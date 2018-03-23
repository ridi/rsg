const { builder } = require('./build');
const { rebuild } = require('./watcher');

const locked = Object.keys(builder).reduce((result, key) => Object.assign(result, { [key]: false }), {});
const queue = [];

export function isLocked (key) {
  return locked[key];
}

export function lock (key, value = true) {
  locked[key] = value;
}

function retry () {
  const intervalId = setInterval(() => {
    const target = queue[0];
    if (!isLocked(target)) {
      queue.splice(0, 1) && rebuild(target);
    }
    if (!queue.length) {
      clearInterval(intervalId);
    }
  }, 500);
}

export function add (key) {
  if (!queue.includes(key)) {
    queue.push(key);
    retry();
  }
}

export function remove (key) {
  queue.splice(queue.findIndex(k => k === key), 1);
}
