export default {
  // 交易类型
  transactionTypeArr: [
    { label: 'Income', value: 0 },
    { label: 'Withdraw', value: 1 },
    { label: 'Invest', value: 2 },
    { label: 'Deposit', value: 3 },
  ],

  // 饼图类型
  pieChartTypeArr: {
    "1": { name: "USDG", label: { color: "#80AEDF" } },
    "2": { name: "US Treasuries", label: { color: "#408A9D" } },
    "3": { name: "Enhancement Pool", label: { color: "#898B8B" } },
    "4": { name: "RWA Projects", label: { color: "#000000" } },
    "5": { name: "Performance Stalking Pool", label: { color: "#4267B9" } },
  },
};
