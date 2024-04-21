    chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
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
    
    // Create a Set to store processed tab IDs
// const processedTabs = new Set();

// chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
//     console.log(tab);
//     // Check if the tab status is complete and the URL hasn't changed
//     if (changeInfo.status === 'complete' && tab.url === changeInfo.url) {
//         // Check if the tab ID has already been processed
//         if (!processedTabs.has(tabId)) {
//             console.log(tabId);
//             console.log(changeInfo.status);

//             // Check if the tab is still accessible
//             const tabExists = await new Promise((resolve) => {
//                 chrome.tabs.get(tabId, (tab) => {
//                     resolve(!!tab); // Resolve with a boolean indicating if the tab exists
//                 });
//             });

//             if (tabExists) {
//                 chrome.tabs.sendMessage(tabId, { 
//                     value: "New"
//                 });
//             } else {
//                 console.error('Error: Tab is not accessible.');
//             }

//             // Add the tab ID to the set of processed tabs
//             processedTabs.add(tabId);
//         } else {
//             console.log('Tab already processed:', tabId);
//         }
//     }
// });
