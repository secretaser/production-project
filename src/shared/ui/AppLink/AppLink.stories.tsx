import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
        to: '/',
    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.PRIMARY,
    },
};
export const PrimaryDark: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Secondary: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.SECONDARY,
    },
};
export const SecondaryDark: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Red: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.RED,
    },
};

export const RedDark: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.RED,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
