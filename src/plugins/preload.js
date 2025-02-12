export const preloadMedia = async (mediaUrls) => {
	for (const url of mediaUrls) {
		if (url.endsWith(".mp4")) {
			await preloadVideo(url);
		} else if (url.endsWith(".mp3")) {
			await preloadAudio(url);
		} else {
			await preloadImg(url);
		}
	}
};

function preloadImg(url) {
	return new Promise((resolve, reject) => {
		let img = new Image();
		img.onload = () => {
			resolve(img);
		};
		img.onerror = () => {
			reject(img);
		};
		img.src = url;
	});
}
function preloadAudio(url) {}
function preloadVideo(url) {
	return new Promise((resolve, reject) => {
		let v = document.createElement("video");
		v.onload = () => {
			resolve(img);
		};
		v.onerror = () => {
			reject(img);
		};
		v.src = url;
	});
}
