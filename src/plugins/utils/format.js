/**
 * 数字格式化千分位
 */
export const formatThousand = (value, quantity) => {
	if (!value) return 0;
	// 将数字转换为字符串
	let numStr = value.toFixed(quantity);
	// 将数字字符串分割为整数部分和小数部分
	let parts = numStr.split(".");
	// 对整数部分进行千分位格式化
	let formattedIntPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	// 如果有小数部分，则将其与整数部分拼接，否则只返回整数格式化结果
	return parts.length > 1 ? formattedIntPart + "." + parts[1] : formattedIntPart;
	// return (+value || 0).toString().replace(/^-?\d+/g, (m) => m.replace(/(?=(?!\b)(\d{3})+$)/g, ","));
};

export const formatThousandDef = (value) => {
	if (!value) return 0;
	value = Number(value);
	return (+value || 0).toString().replace(/^-?\d+/g, (m) => m.replace(/(?=(?!\b)(\d{3})+$)/g, ","));
};
export const formatSeconds = (seconds) => {
	// const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const secondsRemaining = seconds % 60;

	// return `${padZero(hours)}:${padZero(minutes)}:${padZero(secondsRemaining)}`;
	return `${padZero(minutes)} : ${padZero(secondsRemaining)}`;
};
function padZero(value) {
	return (value < 10 ? "0" : "") + value;
}
