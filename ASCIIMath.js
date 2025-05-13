String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "");
};

var assign = _.assign;
var defaults = {
    useKeyword: false
}
var options;

function ASCIIMath(md, o) {
    // use defaults if no options set
    options = {
        useKeyword: false
    }

    var useKeyword = options.useKeyword;
    var defaultRender = md.renderer.rules.fence;

    md.renderer.rules.fence = function (tokens, idx, options, env, self) {
        var token = tokens[idx];

        if(token.info === "math") {
            return render(token.content, true);
        }

        if(token.info === "latex") {
            return renderTeX(token.content, true);
        }

        // pass token to default renderer.
        return defaultRender(tokens, idx, options, env, self);
    };

    md.renderer.rules.code_inline = function(tokens, idx, options, env, self) {
        var token = tokens[idx];

        if(!useKeyword) {
            return renderInline(token.content.trim(), false);
        } else {
            if(token.content.substr(0,4) === "math") {
                return renderInline(token.content.substr(4).trim(), false);
            } else if(token.content.substr(0,5) === "latex") {
                return renderElement(token.content.substr(5).trim(), false);
            }
        }

        return defaultRender(tokens, idx, options, env, self);
    }

    const inlineDelimiters = ["$", ["$`", "`$"],["$", "$"]];
    const inlineDelimitersArray = fromDelimiterOption(inlineDelimiters);
    const inlineMathRule = createInlineMathRule({
        delimiters: inlineDelimitersArray,
        allowWhiteSpacePadding: true,
    });
    md.inline.ruler.before("escape", "math_inline", inlineMathRule);

    md.renderer.rules.math_inline = md.renderer.rules.code_inline;
}

function createInlineMathRule({ delimiters, allowWhiteSpacePadding }) {
    return (state, silent) => {
        const start = state.pos;

        const markers = delimiters.filter(
            ([open]) => open === state.src.slice(start, start + open.length),
        );

        if (markers.length === 0) {
            return false;
        }

        // Scan until the end of the line (or until close marker is found).
        for (const [open, close] of markers) {
            const pos = start + open.length;

            if (
                state.md.utils.isWhiteSpace(state.src.charCodeAt(pos)) &&
                !allowWhiteSpacePadding
            ) {
                // Don’t allow whitespace immediately after open delimiter
                continue;
            }

            const matchStart = state.src.indexOf(close, pos);

            if (matchStart === -1 || pos === matchStart) {
                // Don’t allow empty expressions.
                continue;
            }

            if (
                state.md.utils.isWhiteSpace(state.src.charCodeAt(matchStart - 1)) &&
                !allowWhiteSpacePadding
            ) {
                // Don’t allow whitespace immediately before close delimiter
                continue;
            }

            let content = state.src.slice(pos, matchStart).replaceAll("\n", " ");

            if (allowWhiteSpacePadding) {
                content = content.replace(/^ (.+) $/, "$1");
            }

            if (!silent) {
                const token = state.push("math_inline", "math", 0);

                token.markup = open;
                token.content = content;
            }

            state.pos = matchStart + close.length;

            return true;
        }

        return false;
    };
}

function fromDelimiterOption(delimiters) {
    if (typeof delimiters === "string") {
        if (delimiters.length === 0) {
            return null;
        }

        return [[delimiters, delimiters]];
    }

    /** @type {Array<[string, string]>} */
    const pairs = [];
    for (const pair of delimiters) {
        if (typeof pair === "string") {
            if (pair.length === 0) {
                continue;
            }

            pairs.push([pair, pair]);
        } else {
            if (pair[0].length === 0 || pair[1].length === 0) {
                continue;
            }

            pairs.push(pair);
        }
    }

    if (pairs.length === 0) {
        return null;
    }

    // Make sure we match longer variants first.
    return pairs.sort(([a], [b]) => b.length - a.length);
}

function render(str, disp) {
    // split content
    var arr = str.trim().split("\n\n");
    var result = "";

    for(var i = 0; i < arr.length; i++) {
        if(arr[i]) {
            result += "<p>" + renderElement(preprocessMath(arr[i]), disp) + "<p>";
        }
    }

    return result;
}

function renderTeX(str, disp) {
    // split content
    var arr = str.trim().split("\n");
    var result = "";

    // render each line, skipping empty lines
    for(var i = 0; i < arr.length; i++) {
        if(arr[i]) {
            result += "<p>" + renderElement(arr[i], disp) + "<p>";
        }
    }

    return result;
}

function renderInline(str, disp) {
    return renderElement(preprocessMath(str), disp);
}

function renderElement(str, disp) {
    return katex.renderToString(str, { displayMode: disp });
}

function preprocessMath(str) {
    // parse to TeX
    var newstr = AMTparseAMtoTeX(str);

    return newstr;
}