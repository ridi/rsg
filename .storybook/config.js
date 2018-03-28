import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/book');
  require('../stories/icon');
}

configure(loadStories, module);
