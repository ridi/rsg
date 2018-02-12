/**
 * https://github.com/EE/gitignore-to-glob
 */

const fs = require('fs');
const path = require('path');

module.exports = () => {
  const gitignore = path.resolve('.gitignore');

  return fs.readFileSync(gitignore, 'utf8')
    .split('\n')

    // Filter out empty lines and comments.
    .filter(pattern => !!pattern && pattern[0] !== '#')

    // '!' in .gitignore and glob mean opposite things so we need to swap it.
    // Return pairt [ignoreFlag, pattern], we'll concatenate it later.
    .map(pattern => (pattern[0] !== '!' ? ['', pattern] : ['!', pattern.substring(1)]))

    // Filter out hidden files/directories (i.e. starting with a dot).
    .filter(([exclude, pattern]) => pattern.indexOf('/.') === -1 && pattern.indexOf('.') !== 0)

    // There may be a lot of files outside of directories from `dirsToCheck`, don't ignore
    // them wasting time.
    .filter(([exclude, pattern]) => pattern[0] !== '/')

    // Patterns not starting with '/' are in fact "starting" with '**/'. Since that would
    // catch a lot of files, restrict it to directories we check.
    // Patterns starting with '/' are relative to the project directory and glob would
    // treat them as relative to the OS root directory so strip the slash then.
    .map(([exclude, pattern]) => (pattern[0] !== '/' ? [exclude, `**/${pattern}`] : [exclude, pattern.substring(1)]))

    // We don't know whether a pattern points to a directory or a file and we need files.
    // Therefore, include both `pattern` and `pattern/**` for every pattern in the array.
    .reduce((result, patternPair) => {
      const pattern = patternPair.join('');
      return result.concat([
        pattern,
        `${pattern}/**`,
      ]);
    }, []);
};
