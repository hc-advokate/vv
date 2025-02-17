(function flexible(window, document) {
	const docEl = document.documentElement;
	const dpr = window.devicePixelRatio || 1;

	// 调整 body 字体大小
	function setBodyFontSize() {
		if (document.body) {
			document.body.style.fontSize = `${12 * dpr}px`;
		} else {
			document.addEventListener("DOMContentLoaded", setBodyFontSize);
		}
	}

	// 设置 rem 单位
	function setRemUnit() {
		let rem = docEl.clientWidth / 10;
		if (docEl.clientWidth > 768) {
			rem = 37.5;
		}
		docEl.style.fontSize = `${rem}px`;
	}

	// 初始化函数
	function init() {
		setBodyFontSize();
		setRemUnit();

		// 监听窗口变化
		window.addEventListener("resize", setRemUnit);
		window.addEventListener("pageshow", (e) => {
			if (e.persisted) {
				setRemUnit();
			}
		});

		// 检测 0.5px 支持
		if (dpr >= 2) {
			const fakeBody = document.createElement("body");
			const testElement = document.createElement("div");
			testElement.style.border = ".5px solid transparent";
			fakeBody.appendChild(testElement);
			docEl.appendChild(fakeBody);
			if (testElement.offsetHeight === 1) {
				docEl.classList.add("hairlines");
			}
			docEl.removeChild(fakeBody);
		}
	}

	init();
})(window, document);
