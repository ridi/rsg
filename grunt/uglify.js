module.exports = {
  rui: {
    options: {
      sourceMap: false,
    },
    files: [
      {
        expand: true,
        cwd: 'rui/js',
        src: ['*.js', '!*.min.js'],
        dest: 'rui/js',
        ext: '.min.js',
        extDot: 'last',
      }
    ]
  }
};
