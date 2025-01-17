//                                         ____
//   __ _____  ___  ___ ___ ___    _____ _/ / /
//  / // / _ \/ _ \/ _ `/ // / |/|/ / _ `/ / / 
//  \_,_/_//_/ .__/\_,_/\_, /|__,__/\_,_/_/_/  
//          /_/        /___/                           
//
//  settings library
//  github.com/tobimori/unpaywall
//

browser.browserAction.onClicked.addListener((tab) => {
    browser.cookies.set({
        url: tab.url,
        name: "unpaywallDisabled",
        value: "true"
      });
  }
);