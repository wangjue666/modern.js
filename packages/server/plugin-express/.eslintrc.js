module.exports = {
  extends: ['@modern-js'],
  parserOptions: {
    project: require.resolve('./tsconfig.json'),
  },
  ignorePatterns: ['types.d.ts'],
};
