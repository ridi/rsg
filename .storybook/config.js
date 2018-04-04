import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/book');
}

configure(loadStories, module);
