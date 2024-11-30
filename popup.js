document.getElementById('convertButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        const currentTab = tabs[0];
        const pageUrl = currentTab.url;
        console.log('Redirecting to Jina AI URL with:', pageUrl);
  
        // Construct the Jina AI URL
        const jinaUrl = `https://r.jina.ai/${pageUrl}`;
  
        // Redirect the current tab to the Jina AI URL
        chrome.tabs.update(currentTab.id, { url: jinaUrl });
      }
    });
  });