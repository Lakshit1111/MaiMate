    chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
        chrome.default = null;
        if (changeInfo.status === 'complete') {
            console.log(tabId);
            console.log(changeInfo.status);
    
            // Check if the tab is still accessible
            const tabExists = await new Promise((resolve) => {
                chrome.tabs.get(tabId, (tab) => {
                    resolve(!!tab); // Resolve with a boolean indicating if the tab exists
                });
            });
    
            if (tabExists) {
                chrome.tabs.sendMessage(tabId ,{ 
                    value: "New"
                })
            } else {
                console.error('Error: Tab is not accessible.');
            }
        }
    });
    chrome.runtime.onInstalled.addListener(() => {
        chrome.sidePanel.setOptions({ path: welcomePage });
      });
