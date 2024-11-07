module.exports = {
  env: { node: true, jest: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: ['unused-imports'],
  root: true,
  rules: {
    curly: ['warn', 'all'],
    '@typescript-eslint/consistent-type-assertions': [
      'warn',
      { assertionStyle: 'never' },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      { prefer: 'type-imports' },
    ],
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'prefer-template': 'warn',
    'no-restricted-syntax': [
      'warn',
      {
        selector: 'ExportDefaultDeclaration',
        message: 'Default exports are forbidden. Use named exports instead.',
      },
      {
        selector: 'ExportNamedDeclaration + ExportNamedDeclaration',
        message: 'Only one export per file is allowed.',
      },
    ],
    'unused-imports/no-unused-imports': 'warn',
    'lines-between-class-members': ['warn', 'always'],
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: [
          'class',
          'import',
          'multiline-block-like',
          'multiline-const',
          'multiline-expression',
          'multiline-let',
          'multiline-var',
        ],
        next: '*',
      },
      { blankLine: 'never', prev: 'import', next: 'import' },
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'multiline-block-like',
          'multiline-const',
          'multiline-expression',
          'multiline-let',
          'multiline-var',
          'return',
          'throw',
        ],
      },
    ],
  },
};
