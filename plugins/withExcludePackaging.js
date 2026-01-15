const { withAppBuildGradle } = require("@expo/config-plugins");

module.exports = function withExcludePackaging(config) {
    return withAppBuildGradle(config, (config) => {
        // Exclude worklets from react-native-reanimated to avoid duplicate classes
        if (!config.modResults.contents.includes("exclude group: 'com.swmansion.worklets'")) {
            config.modResults.contents = config.modResults.contents.replace(
                /dependencies\s*{/,
                `dependencies {
    configurations.all {
        exclude group: 'com.swmansion.worklets', module: 'worklets'
    }
`,
            );
        }
        return config;
    });
};
