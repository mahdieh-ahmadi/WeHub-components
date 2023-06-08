import React from 'react';
import { Meta, Story } from '@storybook/react';
import { RadioButton, RadioButtonProps } from '../src';

const meta: Meta = {
  title: 'radio button',
  component: RadioButton,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const InputTemplate: Story<RadioButtonProps> = args => (
  <RadioButton {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Simple = InputTemplate.bind({});

Simple.args = {
    label: 'radio label'
};
