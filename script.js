var recentPage = "frontPage";   // 目前頁面

// ----------頁面切換----------

function showFrontPage(){
    // 顯示首頁頁面
    const page = document.getElementsByClassName("page");
    const frontPage = document.getElementById("frontPage");

    for(var i=0; i<page.length; i++){
        page[i].style.display = "none";
    }

    frontPage.style.display= "block";
    recentPage = "frontPage";

    // 隱藏最新消息子頁面
    const newsEachContent = document.getElementsByClassName("newsEachContent");

    for(var i=0; i<newsEachContent.length; i++){
        newsEachContent[i].style.display = "none";
    }

    // 選單按鈕點擊
    const tab = document.getElementsByClassName("tab");
    const showFrontPage = document.getElementById("showFrontPage");

    for(var i=0; i<tab.length; i++){
        tab[i].style.color = "gray";
    }

    showFrontPage.style.color= "#990000";
}

function showNewsPage(){
    // 顯示最新消息頁面
    const page = document.getElementsByClassName("page");
    const newsPage = document.getElementById("newsPage");

    for(var i=0; i<page.length; i++){
        page[i].style.display = "none";
    }
    
    newsPage.style.display= "block";
    recentPage = "newsPage";

    // 隱藏最新消息子頁面
    const newsEachContent = document.getElementsByClassName("newsEachContent");

    for(var i=0; i<newsEachContent.length; i++){
        newsEachContent[i].style.display = "none";
    }

    // 選單按鈕點擊
    const tab = document.getElementsByClassName("tab");
    const showNewsPage = document.getElementById("showNewsPage");

    for(var i=0; i<tab.length; i++){
        tab[i].style.color = "gray";
    }

    showNewsPage.style.color= "#990000";
}

function showServicePage(){
    // 顯示服務項目頁面
    const page = document.getElementsByClassName("page");
    const servicePage = document.getElementById("servicePage");

    for(var i=0; i<page.length; i++){
        page[i].style.display = "none";
    }

    servicePage.style.display= "block";
    recentPage = "servicePage";

    // 隱藏最新消息子頁面
    const newsEachContent = document.getElementsByClassName("newsEachContent");

    for(var i=0; i<newsEachContent.length; i++){
        newsEachContent[i].style.display = "none";
    }

    // 選單按鈕點擊
    const tab = document.getElementsByClassName("tab");
    const showServicePage = document.getElementById("showServicePage");

    for(var i=0; i<tab.length; i++){
        tab[i].style.color = "gray";
    }

    showServicePage.style.color= "#990000";
}

function showHealthPage(){
    // 顯示衛教專區頁面
    const page = document.getElementsByClassName("page");
    const healthPage = document.getElementById("healthPage");

    for(var i=0; i<page.length; i++){
        page[i].style.display = "none";
    }

    healthPage.style.display= "block";
    recentPage = "healthPage";

    // 隱藏最新消息子頁面
    const newsEachContent = document.getElementsByClassName("newsEachContent");

    for(var i=0; i<newsEachContent.length; i++){
        newsEachContent[i].style.display = "none";
    }

    // 選單按鈕點擊
    const tab = document.getElementsByClassName("tab");
    const showHealthPage = document.getElementById("showHealthPage");

    for(var i=0; i<tab.length; i++){
        tab[i].style.color = "gray";
    }

    showHealthPage.style.color= "#990000";
}

function showJoinPage(){
    // 顯示加入我們頁面
    const page = document.getElementsByClassName("page");
    const joinPage = document.getElementById("joinPage");

    for(var i=0; i<page.length; i++){
        page[i].style.display = "none";
    }

    joinPage.style.display= "block";
    recentPage = "joinPage";

    // 隱藏最新消息子頁面
    const newsEachContent = document.getElementsByClassName("newsEachContent");

    for(var i=0; i<newsEachContent.length; i++){
        newsEachContent[i].style.display = "none";
    }

    // 選單按鈕點擊
    const tab = document.getElementsByClassName("tab");
    const showJoinPage = document.getElementById("showJoinPage");

    for(var i=0; i<tab.length; i++){
        tab[i].style.color = "gray";
    }

    showJoinPage.style.color= "#990000";
}

function showCasePage(){
    // 顯示案例分享頁面
    const page = document.getElementsByClassName("page");
    const casePage = document.getElementById("casePage");

    for(var i=0; i<page.length; i++){
        page[i].style.display = "none";
    }

    casePage.style.display= "block";
    recentPage = "casePage";

    // 隱藏最新消息子頁面
    const newsEachContent = document.getElementsByClassName("newsEachContent");

    for(var i=0; i<newsEachContent.length; i++){
        newsEachContent[i].style.display = "none";
    }

    // 選單按鈕點擊
    const tab = document.getElementsByClassName("tab");
    const showCasePage = document.getElementById("showCasePage");

    for(var i=0; i<tab.length; i++){
        tab[i].style.color = "gray";
    }

    showCasePage.style.color= "#990000";
}

function showLocationPage(){
    // 顯示交通位置頁面
    const page = document.getElementsByClassName("page");
    const locationPage = document.getElementById("locationPage");

    for(var i=0; i<page.length; i++){
        page[i].style.display = "none";
    }

    locationPage.style.display= "block";
    recentPage = "locationPage";

    // 隱藏最新消息子頁面
    const newsEachContent = document.getElementsByClassName("newsEachContent");

    for(var i=0; i<newsEachContent.length; i++){
        newsEachContent[i].style.display = "none";
    }

    // 選單按鈕點擊
    const tab = document.getElementsByClassName("tab");
    const showLocationPage = document.getElementById("showLocationPage");

    for(var i=0; i<tab.length; i++){
        tab[i].style.color = "gray";
    }

    showLocationPage.style.color= "#990000";
}

function showContactPage(){
    // 顯示聯絡我們頁面
    const page = document.getElementsByClassName("page");
    const contactPage = document.getElementById("contactPage");

    for(var i=0; i<page.length; i++){
        page[i].style.display = "none";
    }

    contactPage.style.display= "block";
    recentPage = "contactPage";
    
    // 隱藏最新消息子頁面
    const newsEachContent = document.getElementsByClassName("newsEachContent");

    for(var i=0; i<newsEachContent.length; i++){
        newsEachContent[i].style.display = "none";
    }

    // 選單按鈕點擊
    const tab = document.getElementsByClassName("tab");
    const showContactPage = document.getElementById("showContactPage");

    for(var i=0; i<tab.length; i++){
        tab[i].style.color = "gray";
    }

    showContactPage.style.color= "#990000";
}

// ----------至頂按鈕----------

function topFunction() {
    document.documentElement.scrollTop = 0;
}

// ----------服務項目次選單----------

function toServiceItem(){
    // 滑動至居家服務
    if(recentPage != "servicePage"){
        showServicePage();
        topFunction();
    }

    const serviceItemY = document.getElementById("serviceItem").offsetTop;
    const scrollDistance = serviceItemY - window.pageYOffset;
        
    window.scrollBy(0, scrollDistance);
}

function toServiceRest(){
    // 滑動至居家喘息
    if(recentPage != "servicePage"){
        showServicePage();
        topFunction();
    }
    
    const serviceRestY = document.getElementById("resting").offsetTop;
    const scrollDistance = serviceRestY - window.pageYOffset;
    
    window.scrollBy(0, scrollDistance);
}

function toServiceTarget(){
    // 滑動至服務對象
    if(recentPage != "servicePage"){
        showServicePage();
        topFunction();
    }
    
    const serviceTargetY = document.getElementById("serviceTarget").offsetTop;
    const scrollDistance = serviceTargetY - window.pageYOffset;
    
    window.scrollBy(0, scrollDistance);
}

function toServiceList(){
    // 滑動至服務項目
    if(recentPage != "servicePage"){
        showServicePage();
        topFunction();
    }
    
    const serviceListY = document.getElementById("serviceList").offsetTop;
    const scrollDistance = serviceListY - window.pageYOffset;
    
    window.scrollBy(0, scrollDistance);
}

// ----------最新消息子頁面----------

function news20230114(){
    const page = document.getElementsByClassName("page");
    const news20230114Content = document.getElementById("news20230114Content");

    page[1].style.display = "none";

    news20230114Content.style.display = "block";
    recentPage = "news20230114";
}