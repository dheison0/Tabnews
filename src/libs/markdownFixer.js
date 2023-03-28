import striptags from 'striptags'
import { parse } from 'node-html-parser'

const urlRegex = /[^\](]https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)/g
const replacers = {
  a: (element) => {
    const title = element.innerText.trim()
    const url = element.getAttribute('href')
    element.replaceWith(`[${title}](${url})`)
  },
  img: (element) => {
    const alt = element.getAttribute('alt')
    const url = element.getAttribute('src')
    element.replaceWith(`\n![${alt}](${url})\n`)
  },
  br: (element) => element.replaceWith('\n')
}

export const markdownFixer = (markdown) => {
  const strippedContent = striptags(markdown, Object.keys(replacers))
  const parsedContent = parse(strippedContent)
  for (const tag of Object.keys(replacers)) {
    parsedContent.querySelectorAll(tag).forEach(replacers[tag])
  }
  let fixedMarkdown = parsedContent.toString()
  fixedMarkdown = fixedMarkdown.replaceAll('\n\n\n', '\n\n')
  for (const url of fixedMarkdown.matchAll(urlRegex)) {
    const newUrl = url[0].replace('http:', 'https:')
    fixedMarkdown = fixedMarkdown.replace(url[0], `[${newUrl}](${newUrl})`)
  }
  return fixedMarkdown
}
