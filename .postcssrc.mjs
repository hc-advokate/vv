// https://postcss.org/
export default {
    plugins: {
        autoprefixer: {
            overrideBrowserslist: ["Android >= 4.1", "iOS >= 7.1", "Chrome > 31", "ff > 31", "ie >= 8"],
            grid: true,
        },
        // "postcss-pxtorem": {
        //     rootValue: 150,
        //     unitPrecision: 5,
        //     propList: ["*"],
        //     selectorBlackList: [],
        //     replace: true,
        //     mediaQuery: false,
        //     minPixelValue: 0,
        //     exclude: /node_modules/i
        // }
    },
};