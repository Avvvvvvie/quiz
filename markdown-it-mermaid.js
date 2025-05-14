let mermaidCounter = 0;

function mermaidChart(code) {
    try {
        mermaidCounter++;
        let thisCounter = mermaidCounter;
        mermaid.render("theGraph", code).then(function (result) {
            element = document.getElementById(`mermaid${thisCounter}`);
            respondToVisibility(element, (el) {
                element.innerHTML = result.svg;
            });
        });
        return `<div class="mermaid" id="mermaid${thisCounter}"></div>`;
    } catch (e) {
        return `<pre>${code}</pre>`;
    }
}

function respondToVisibility(element, callback) {
    var options = {
        root: document.documentElement,
    };

    var observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            callback(entry.intersectionRatio > 0);
        });
    }, options);

    observer.observe(element);
}


const markdownItMermaid = (md) => {
    md.mermaid = mermaid
    mermaid.loadPreferences = (preferenceStore) => {
        let mermaidTheme = preferenceStore.get('mermaid-theme')
        if (mermaidTheme === undefined) {
            mermaidTheme = 'default'
        }
        let ganttAxisFormat = preferenceStore.get('gantt-axis-format')
        if (ganttAxisFormat === undefined) {
            ganttAxisFormat = '%Y-%m-%d'
        }
        mermaid.initialize({
            theme: mermaidTheme,
            gantt: { axisFormatter: [
                    [ganttAxisFormat, (d) => {
                        return d.getDay() === 1
                    }]
                ]}
        })
        return {
            'mermaid-theme': mermaidTheme,
            'gantt-axis-format': ganttAxisFormat
        }
    }

    const temp = md.renderer.rules.fence.bind(md.renderer.rules)
    md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
        const token = tokens[idx]
        const code = token.content.trim()
        if (token.info === 'mermaid') {
            return mermaidChart(code);
        }
        const firstLine = code.split(/\n/)[0].trim()
        if (firstLine === 'gantt' || firstLine === 'sequenceDiagram' || firstLine.match(/^graph (?:TB|BT|RL|LR|TD);?$/)) {
            return mermaidChart(code);
        }
        return temp(tokens, idx, options, env, slf)
    }
}