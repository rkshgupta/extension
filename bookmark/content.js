document.body.addEventListener("mouseup", getSelectedTxt);
function getSelectedTxt(){
	let selectedTxt = window.getSelection().toString();
	if(selectedTxt.length > 0){
		let msg = {
			text: selectedTxt
		}
		chrome.runtime.sendMessage(msg);
	}
}