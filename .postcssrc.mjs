// https://postcss.org/
// 375 设计 PC / 3
export default {
	plugins: {
		autoprefixer: {
			overrideBrowserslist: ["Android >= 4.1", "iOS >= 7.1", "Chrome > 31", "ff > 31", "ie >= 8"],
			add: true,
			grid: false,
		},
		"postcss-pxtorem": {
			rootValue: 37.5,
			unitPrecision: 5,
			propList: ["*"],
			selectorBlackList: ["ignore", "van-"],
			replace: true,
			mediaQuery: false,
			minPixelValue: 0,
			exclude: /node_modules/i,
		},
	},
};
