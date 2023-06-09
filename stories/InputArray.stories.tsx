import React from 'react';
import { Meta, Story } from '@storybook/react';
import { InputArray, InputArrayProps } from '../src';

const meta: Meta = {
  title: 'inputArray',
  component: InputArray,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const InputTemplate: Story<InputArrayProps> = args => <InputArray {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Simple = InputTemplate.bind({});

Simple.args = {
  inputs: [
    { label: 'simple input1', placeHolder: 'type something1' },
    { label: 'simple input2', placeHolder: 'type something2' },
    { label: 'simple input3', placeHolder: 'type something3' },
  ],
  hasDeleteOption: true,
};
