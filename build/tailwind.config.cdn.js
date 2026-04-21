'use strict';

module.exports = {
  presets: [require('../src/tailwind.config')],
  content: [{ raw: ' ' }],
  safelist: [{ pattern: /.*/ }],
};
