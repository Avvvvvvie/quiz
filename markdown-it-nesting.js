// Markdown-it plugin to render GitHub-style task lists; see
//
// https://github.com/blog/1375-task-lists-in-gfm-issues-pulls-comments
// https://github.com/blog/1825-task-lists-in-all-markdown-documents

var disableCheckboxes = true;
var useLabelWrapper = false;
var useLabelAfter = false;

markdownItNesting = function(md) {
    md.core.ruler.after('inline', 'github-task-lists', function(state) {
        var tokens = state.tokens;
        for (var i = 2; i < tokens.length; i++) {
            if(tokens[i].nesting > 0 && isListItem(tokens, i)) {
                nestify(tokens[i], state.Token);
            }
        }
    });
};

function isListItem(tokens, index) {
    return isInline(tokens[index]) &&
        isParagraph(tokens[index - 1]) &&
        isListItem(tokens[index - 2])
}

function nestify(token, TokenConstructor) {
    token.children.unshift(makeIndent(token, TokenConstructor));
    token.children[1].content = token.children[1].content.slice(3);
    token.content = token.content.slice(3);
}

function makeIndent(token, TokenConstructor) {
    var indent = new TokenConstructor('html_inline', '', 0);
    indent.content = '<span class="indent"></span>';
    return indent;
}

function isInline(token) { return token.type === 'inline'; }
function isParagraph(token) { return token.type === 'paragraph_open'; }
function isListItem(token) { return token.type === 'list_item_open'; }