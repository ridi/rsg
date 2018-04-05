import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Icon } from '../components';

storiesOf('Icon', module)
  .add('ridi', () => <>
    <Icon name="app_ridi_1" />
    <Icon name="app_ridi_2" />
  </>);
