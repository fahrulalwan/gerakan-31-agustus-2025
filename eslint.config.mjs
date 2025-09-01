import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import prettierPlugin from 'eslint-plugin-prettier'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import globals from 'globals'
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export const BASE_CONFIG = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  js.configs.recommended
]

export const GLOBAL_SETTINGS = {
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.es2021,
      ...globals.node
    }
  }
}

export const TYPESCRIPT_CONFIG = {
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    parser: tsparser,
    parserOptions: {
      project: ['./tsconfig.json', './tsconfig.app.json'],
      ecmaFeatures: {
        jsx: true
      }
    }
  },
  plugins: {
    '@typescript-eslint': tseslint,
    react: reactPlugin,
    'react-hooks': reactHooksPlugin,
    'jsx-a11y': jsxA11yPlugin,
    import: importPlugin,
    prettier: prettierPlugin
  },
  rules: {
    // TypeScript specific rules
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',

    // Import rules
    'import/extensions': 'off',
    'import/no-anonymous-default-export': 'off',
    'import/no-cycle': 'warn',
    'import/no-extraneous-dependencies': 'warn',
    'import/no-named-as-default': 'off',
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    'import/prefer-default-export': 'off',
    'import/no-duplicates': 'error',

    // React specific rules
    'react/display-name': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    ],
    'react/jsx-handler-names': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-duplicate-props': [
      'error',
      {
        ignoreCase: false
      }
    ],
    'react/react-in-jsx-scope': 'off',
    'react/no-array-index-key': 'off',
    'react/no-children-prop': 'off',
    'react/prop-types': 'off',
    'react/jsx-key': 'error',
    'react/jsx-no-undef': 'error',
    'react/no-danger': 'warn',
    'react/no-deprecated': 'warn',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'warn',
    'react/no-is-mounted': 'error',
    'react/no-render-return-value': 'error',
    'react/no-string-refs': 'error',
    'react/no-unescaped-entities': 'warn',
    'react/no-unknown-property': 'warn',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'off',

    // React Hooks rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Accessibility rules
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/anchor-has-content': 'error',
    'jsx-a11y/anchor-is-valid': 'error',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-proptypes': 'error',
    'jsx-a11y/aria-unsupported-elements': 'error',
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',

    // General rules
    'implicit-arrow-linebreak': 'off',
    'linebreak-style': 'off',
    'no-param-reassign': [
      'error',
      {
        ignorePropertyModificationsFor: [
          'acc',
          'accumulator',
          'e',
          'ctx',
          'context',
          'headers',
          'req',
          'request',
          'res',
          'response',
          '$scope',
          'staticContext',
          'state'
        ],
        props: true
      }
    ],
    'no-restricted-exports': ['off', { restrictedNamedExports: ['default'] }],
    'no-useless-catch': 'warn',
    'no-undef': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-alert': 'warn',
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-new-func': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
    'arrow-body-style': ['error', 'as-needed'],

    // Prettier integration
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        trailingComma: 'none',
        semi: false,
        useTabs: false,
        tabWidth: 2,
        singleQuote: true
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      typescript: { project: ['./tsconfig.json', './tsconfig.app.json'] },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
}

export const JAVASCRIPT_CONFIG = {
  files: ['**/*.{js,jsx}'],
  plugins: {
    react: reactPlugin,
    'react-hooks': reactHooksPlugin,
    'jsx-a11y': jsxA11yPlugin,
    import: importPlugin,
    prettier: prettierPlugin
  },
  rules: {
    // React specific rules
    'react/display-name': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    ],
    'react/jsx-handler-names': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-duplicate-props': [
      'error',
      {
        ignoreCase: false
      }
    ],
    'react/react-in-jsx-scope': 'off',
    'react/no-children-prop': 'off',
    'react/prop-types': 'off',
    'react/jsx-key': 'error',
    'react/jsx-no-undef': 'error',
    'react/no-array-index-key': 'off',
    'react/no-danger': 'warn',
    'react/no-deprecated': 'warn',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'warn',
    'react/no-is-mounted': 'error',
    'react/no-render-return-value': 'error',
    'react/no-string-refs': 'error',
    'react/no-unescaped-entities': 'warn',
    'react/no-unknown-property': 'warn',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'off',

    // React Hooks rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Accessibility rules
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/anchor-has-content': 'error',
    'jsx-a11y/anchor-is-valid': 'error',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-proptypes': 'error',
    'jsx-a11y/aria-unsupported-elements': 'error',
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',

    // Import rules
    'import/extensions': 'off',
    'import/no-anonymous-default-export': 'off',
    'import/no-cycle': 'warn',
    'import/no-extraneous-dependencies': 'warn',
    'import/no-named-as-default': 'off',
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    'import/prefer-default-export': 'off',
    'import/no-duplicates': 'error',

    // General rules
    'implicit-arrow-linebreak': 'off',
    'linebreak-style': 'off',
    'no-param-reassign': [
      'error',
      {
        ignorePropertyModificationsFor: [
          'acc',
          'accumulator',
          'e',
          'ctx',
          'context',
          'headers',
          'req',
          'request',
          'res',
          'response',
          '$scope',
          'staticContext',
          'state'
        ],
        props: true
      }
    ],
    'no-empty-function': 'off',
    'no-restricted-exports': ['off', { restrictedNamedExports: ['default'] }],
    'no-useless-catch': 'warn',
    'no-undef': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-alert': 'warn',
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-new-func': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
    'arrow-body-style': ['error', 'as-needed'],

    // Prettier integration
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        trailingComma: 'none',
        semi: false,
        useTabs: false,
        tabWidth: 2,
        singleQuote: true
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      typescript: { project: ['./tsconfig.json', './tsconfig.app.json'] },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
}

export const TEST_CONFIG = {
  files: [
    '**/*.{test,spec}.{js,jsx,ts,tsx}',
    '**/__tests__/**/*.{js,jsx,ts,tsx}'
  ],
  languageOptions: {
    globals: {
      ...globals.jest
    }
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': 'off'
  }
}

export const IGNORE_PATTERNS = {
  ignores: [
    'node_modules/**',
    'dist/**',
    'build/**',
    'coverage/**',
    '.next/**',
    'out/**',
    '.vercel/**',
    '.husky/**',
    '.cache/**',
    '*.config.js',
    '*.config.ts',
    '**/*.min.js',
    '**/*.min.css'
  ]
}

export const ESLINT_CONFIGS = [
  ...BASE_CONFIG,
  GLOBAL_SETTINGS,
  TYPESCRIPT_CONFIG,
  JAVASCRIPT_CONFIG,
  TEST_CONFIG,
  IGNORE_PATTERNS
]

export default ESLINT_CONFIGS
