function setup(){
	noCanvas();
	bgpage = chrome.extension.getBackgroundPage();
	bookmark = bgpage.bookmark;
	if(bookmark['text'].length > 0){
		createP(bookmark['text']);
		createP(bookmark['url']);
		chrome.bookmarks.create({'title': bookmark['text'], 'url': bookmark['url']});
		// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		// 	chrome.bookmarks.create({'title': word, 'url': tabs[0].url});
		// });
	}
}