module.exports = function (wallaby) {
  return {
    autoDetect: true,
    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({ isolatedModules: true }),
    },
    reportConsoleErrorAsError: true,
  };
};
