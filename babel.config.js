module.exports = {
  'presets': [
    [
      '@babel/env',
      {
        'modules': false,
        'targets': {
          'browsers': [
            '>0.25%',
            'not ie 11',
            'not op_mini all'
          ]
        }
      }
    ],
    '@babel/react'
  ],
  'plugins': [
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-export-default-from',
    [
      '@babel/plugin-proposal-decorators',
      { 'legacy': true }
    ], [
      '@babel/plugin-proposal-class-properties',
      { 'loose': true }
    ],
    'macros'
  ],
  'env': {
    'test': {
      'presets': [
        ['@babel/env', { targets: { node: 'current' } }],
        '@babel/react'
      ],
      'plugins': [
        '@babel/plugin-proposal-export-namespace-from',
        '@babel/plugin-proposal-export-default-from',
        'macros'
        // 'require-context-hook',
      ]
    }
  }
};
