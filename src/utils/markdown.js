import MarkdownIt from "markdown-it";

const md = new MarkdownIt({
  html: false,
  breaks: true,
  linkify: true,
  typographer: true,
});

export const renderMd = (text) => {
  if (!text) return "";
  return md.render(String(text));
};
