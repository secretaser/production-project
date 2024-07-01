// import globals from 'globals';
import tseslint from 'typescript-eslint';
// import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: pluginJs.configs.recommended,
});

export default [
    // { languageOptions: { globals: globals.browser } },
    ...tseslint.configs.recommended,
    ...compat.config({
        env: {
            browser: true,
            es2021: true,
            jest: true,
        },
        extends: [
            'plugin:react/recommended',
            'airbnb',
            'plugin:i18next/recommended',
        ],
        parser: '@typescript-eslint/parser',
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        plugins: [
            'react',
            // '@typescript-eslint',
            'i18next',
        ],
        rules: {
            'react/jsx-indent': [2, 4],
            'react/jsx-indent-props': [2, 4],
            indent: [2, 4],
            'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
            'import/no-unresolved': 'off',
            'import/prefer-default-export': 'off',
            'no-unused-vars': 'off',
            'react/require-default-props': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-props-no-spreading': 'warn',
            'react/function-component-definition': 'off',
            'no-shadow': 'off',
            'import/extensions': 'off',
            'import/no-extraneous-dependencies': 'off',
            'no-underscore-dangle': 'off',
            'linebreak-style': [0, 'windows'],
            'i18next/no-literal-string': [2,
                { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] },
            ],
            'max-len': ['error', { code: 100, ignoreComments: true }],
            '@typescript-eslint/no-unused-vars': 'off',
            'no-param-reassign': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
        },
        globals: {
            __IS_DEV__: true,
        },
        overrides: [
            {
                files: ['**/src/**/*.test.{ts,tsx}'],
                rules: {
                    'i18next/no-literal-string': 'off',
                },
            },
        ],
    }),
    // pluginReactConfig,
];
