const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig(__dirname);
  return {
    transformer: {
      babelTransformerPath: require.resolve(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"]
    }
  }
})();
