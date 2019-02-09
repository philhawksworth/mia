'use strict';

const typogr = require('typogr');
const mdown = require('markdown-it')({
  html: true,
  breaks: false,
  linkify: true,
  typographer: true,
}).use(require('markdown-it-mark'));

const amp = s => {
  const r = '<span class="amp">&</span>';
  return s ? s.replace(/&amp;/g, '&').replace(/&/g, r) : s;
};

const set = content => (content ? typogr.typogrify(content) : content);
const render = content => set(mdown.render(content));
const inline = content => set(mdown.renderInline(content));

module.exports = {
  mdown,
  amp,
  set,
  render,
  inline,
};
