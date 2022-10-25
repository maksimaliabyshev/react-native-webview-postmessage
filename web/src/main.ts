import './style.css';

declare global {
	interface Window {
		ReactNativeWebView?: any;
	}
}

// const generateOnMessageFunction = (data: any) => {
// 	window.dispatchEvent(new MessageEvent('message', { data: JSON.stringify(data) }));
// };
// generateOnMessageFunction({ text: 'window.dispatchEvent message' });

window.addEventListener('DOMContentLoaded', function () {
	window.postMessage('window.postMessage DOMContentLoaded', '*');
});

// window.addEventListener('message', function (event) {
// 	alert('message received: ' + event.data);
// });

const button = document.querySelector<HTMLElement>('#button');
button!.onclick = () => {
	if (window.ReactNativeWebView) {
		// @param only string
		window.ReactNativeWebView.postMessage('window.ReactNativeWebView.postMessage');
	}
};
