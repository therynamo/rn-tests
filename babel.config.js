module.exports = (api) => {
  api.cache(false);

  return {
    presets: [
      [
        "module:metro-react-native-babel-preset",
        { useTransformReactJSXExperimental: true }
      ],
      "@babel/preset-env",
      "@babel/preset-typescript"
    ],
    plugins: [
      [
        "@babel/plugin-transform-react-jsx",
        {
          runtime: "automatic"
        }
      ],
      "babel-plugin-transform-inline-environment-variables",
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "react-native$": "react-native-web",
            "@test-utils": ["./render-harness.tsx"]
          }
        }
      ]
    ]
  };
};
