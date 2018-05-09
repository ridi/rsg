import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/book');
  require('../stories/icon');
  require('../stories/rui');
}

configure(loadStories, module);
