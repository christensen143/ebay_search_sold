chrome.contextMenus.create({
  id: '1',
  title: 'Search Ebay sold listings for "%s"',
  contexts: ['selection'],
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  urlPrefix = 'https://www.ebay.com/sch/i.html?_from=R40&_nkw=';
  urlSuffix = '&_sacat=0&rt=nc&LH_Sold=1&LH_Complete=1';
  var newURL = urlPrefix + info.selectionText + urlSuffix;
  chrome.tabs.create({ url: newURL });
});
