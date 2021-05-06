// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   plugins: [
//     'react-native-reanimated/plugin',
//     [
//       'module-resolver',
//       {
//         root: ['./src'],
//         extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
//         alias: {
//           // Top Level alias
//           "@src": "./src",
//           // '@assets': './assets',
//           '@components': './src/components/*',
//           '@screens': './src/screens/*'
//           // '@config': './src/config',
//           // '@features': './src/features',
//           // '@helper': './src/helper',
//           // '@instances': './src/instances',
//           // '@navigation': './src/navigation',
//           // '@shared-state': './src/shared-state',
//           // '@values': './src/values',
//         },
//       },
//     ],
//     'babel-plugin-transform-typescript-metadata',
//     ["@babel/plugin-proposal-decorators", { "legacy": true }],
//     ["@babel/plugin-proposal-class-properties", { "loose" : false }],
//     ["@babel/plugin-transform-flow-strip-types"]
//   ],
// };
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
       [
          'module-resolver',
          {
            root: ['./src'],
            extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
            alias: {
              "tests": ["./tests/"],
              "@core": "./src/core",
              "@screens":"./src/screens"
            }
          }
        ]
      ]
};
