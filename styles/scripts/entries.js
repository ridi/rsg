const fs = require('fs');
const path = require('path');

const cwd = path.resolve(process.cwd(), 'styles');
const src = path.join(cwd, 'src');
const dist = path.join(cwd, 'dist');
const index = fs.readFileSync(path.join(cwd, 'index.css'), 'utf8');

function readdirSync (dirname) {
  return fs.readdirSync(path.join(src, dirname), 'utf8').flatMap(filename => {
    const file = path.join(dirname, filename);
    const stat = fs.statSync(path.join(src, file));
    if (stat && stat.isDirectory()) {
      return readdirSync(file);
    }
    return file;
  });
}

module.exports = {
  rui: {
    to: path.join(dist, 'rui.css'),
    from: path.join(cwd, 'rui.css'),
    css: readdirSync('rui/')
      .filter(filename => /\.css$/.test(filename))
      .reduce((accumulator, filename) => `${accumulator}@import './src/${filename}';\n`, index),
  },
  book: {
    to: path.join(dist, 'book.css'),
    from: path.join(cwd, 'book.css'),
    css: readdirSync('book/')
      .filter(filename => /\.css$/.test(filename))
      .reduce((accumulator, filename) => `${accumulator}@import './src/${filename}';\n`, index),
  },
};
