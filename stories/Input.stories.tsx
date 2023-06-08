import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, InputProps } from '../src';

const meta: Meta = {
  title: 'input',
  component: Input,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const InputTemplate: Story<InputProps> = args => <Input {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Simple = InputTemplate.bind({});

Simple.args = {
  label: 'simple input',
  placeHolder: 'type something',
};
