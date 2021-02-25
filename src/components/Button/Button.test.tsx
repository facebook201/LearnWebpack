import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Test Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button>Nice</Button>);
    const element = wrapper.queryByText('Nice');
    expect(element?.tagName).toEqual('BUTTON');
  });
});