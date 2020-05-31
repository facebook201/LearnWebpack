import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../src/components/Button';

const defaultButton = () => (
  <Button onClick={action('clicked')}></Button>
);
