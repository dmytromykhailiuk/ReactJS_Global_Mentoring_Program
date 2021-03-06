module.exports = {
  presets: [
    [
      "@babel/env",
      {
        corejs: 3.8,
        useBuiltIns: "usage",
        debug: false,
        modules: process.env.NODE_ENV === "test" ? "commonjs" : false,
      },
    ],
    "@babel/preset-typescript",
    "@babel/react",
  ],
  plugins: ["@babel/plugin-proposal-class-properties"],
};
