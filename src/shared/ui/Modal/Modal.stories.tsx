import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Я ебал в рот тех хкто нее нбал в тор тех кто ебал в жопу тек кто не ебал',
    },
};
export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Я ебал в рот тех хкто нее нбал в тор тех кто ебал в жопу тек кто не ебал',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
