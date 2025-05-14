let mermaidCounter = 0;

function mermaidChart(code) {
    try {
        mermaidCounter++;
        let thisCounter = mermaidCounter;
        mermaid.render("theGraph", code).then(function (result) {
            observeVisiblilty = function(el) {
                let observer = new MutationObserver((entries) => {
                    let target = entries[0].target;

                    // Act only when the element becomes visible
                    if(target.classList.contains('visible')) {
                        // Get the contents of the Mermaid element
                        let html = el.textContent;

                        // Generate a unique-ish ID so we don't clobber existing graphs
                        // This is definitely quick and dirty and could be improved to
                        // avoid collisions when many charts are used
                        let id = 'graph-' + Math.floor(Math.random() * Math.floor(1000));

                        // Actually render the chart
                        el.innerHTML = result.svg;

                        // Disconnect the observer, since the chart is now on the page.
                        // There's no point in continuing to watch it
                        observer.disconnect();
                    }
                });
                observer.observe(el, {
                    attributes: true
                });
            };
            observeVisiblilty(document.getElementById(`mermaid${thisCounter}`));
        });
        return `<div class="mermaid" id="mermaid${thisCounter}"></div>`;
    } catch (e) {
        return `<pre>${code}</pre>`;
    }
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