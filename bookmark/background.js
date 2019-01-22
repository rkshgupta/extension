chrome.runtime.onMessage.addListener(getMsg);

window.bookmark = {};

function getMsg(request, sender, response){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	 	bookmark.url = tabs[0].url;
	 	bookmark.text = request.text;
	});
}