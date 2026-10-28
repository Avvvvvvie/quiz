function readFile(path, callback) {
    fetch(path)
        .then((res) => res.text())
        .then((text) => {
            callback(text)
        })
}

let url = 'https://avvvvvvie.github.io/quiz/'
function absoluteURI(path) {
    return url + encodeURI(path)
}

function resolvePath(path) {
  if (/^https?:\/\//i.test(path)) {
    return path
  }

  if (path.startsWith("/")) {
    return new URL(path, url).href
  }

  return path
}

function renderMarkdown(text) {
    md = markdownit()
    markdownItAsciimath(md, {})
    markdownItMermaid(md)
    markdownItImgSize(md)
    markdownitCheckbox(md)
    return md.render(text)
}

const path = resolvePath(new URLSearchParams(window.location.search).get("path"))

document.addEventListener('load', () => {
    if(!path) document.getElementById('content').innerHTML = "No file path provided"

    readFile(absoluteURI(path), (text) => {
        document.getElementById('content').innerHTML = renderMarkdown(text)
    })
})
