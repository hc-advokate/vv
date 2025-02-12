export const animated = {
	mounted(el, binding) {
		el.classList.add("animate__animated");
		const options = binding.value || {
			animateClass: "animate__fadeIn",
			delayClass: "animate__delay-1s",
		};

		let isEntered = false;
		let isRepeat = options.repeat || false;

		if (options.delayClass) {
			el.classList.add(options.delayClass);
		}

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				// const viewHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
				// const elTop = el.offsetTop;
				// const scrollTop = document.documentElement.scrollTop;
				// const top = elTop - scrollTop;
				// console.log(top);

				if (entry.isIntersecting && !isEntered) {
					el.classList.add(options.animateClass);
					isEntered = true;
				} else if (!entry.isIntersecting && isEntered && isRepeat) {
					el.classList.remove(options.animateClass);
					isEntered = false;
				}
			});
		}, options.intersectionOptions || {});
		observer.observe(el);
	},
};
