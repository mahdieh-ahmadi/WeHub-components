import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SwitchButton, SwitchButtonProps } from '../src';

const meta: Meta = {
  title: 'Switch button',
  component: SwitchButton,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const InputTemplate: Story<SwitchButtonProps> = args => (
  <SwitchButton {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Simple = InputTemplate.bind({});

Simple.args = {};
