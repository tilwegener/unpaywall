//                                         ____
//   __ _____  ___  ___ ___ ___    _____ _/ / /
//  / // / _ \/ _ \/ _ `/ // / |/|/ / _ `/ / / 
//  \_,_/_//_/ .__/\_,_/\_, /|__,__/\_,_/_/_/  
//          /_/        /___/                           
//
//  dumont newsnet component
//  github.com/tobimori/unpaywall
//

if (document.getElementsByClassName("dm_article_headline teaser_heading_paid paid_logo")) {
    let txt = JSON.parse(document.getElementsByTagName("script")[11].innerHTML).articleBody;
    if (!txt) txt = JSON.parse(document.getElementsByTagName("script")[13].innerHTML).articleBody;
    document.getElementsByClassName("selectionShareable")[1].innerHTML = txt;
    document.getElementById('c1-template-platzhalter').remove();
}