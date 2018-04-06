const fs = require('fs');
const path = require('path');

const cwd = path.resolve(process.cwd(), 'styles');
const src = path.join(cwd, 'src');
const dist = path.join(cwd, 'dist');
const index = fs.readFileSync(path.join(cwd, 'index.css'), 'utf8');

module.exports = {
  rui: {
    to: path.join(dist, 'rui.css'),
    from: path.join(cwd, 'rui.css'),
    css: fs.readdirSync(path.join(src, 'rui/'), 'utf8')
      .filter(filename => /\.css$/.test(filename))
      .reduce((accumulator, filename) => `${accumulator}@import './src/rui/${filename}';\n`, index),
  },
  book: {
    to: path.join(dist, 'book.css'),
    from: path.join(cwd, 'book.css'),
    css: `${index}@import './src/book/index.css'`,
  },
};
