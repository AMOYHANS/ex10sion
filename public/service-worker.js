// eslint-disable-next-line no-undef
chrome.action.onClicked.addListener(function(tab) {
    // eslint-disable-next-line no-undef
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      func: () => {
        alert("hi page")
      }  
    })
})