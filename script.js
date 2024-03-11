function setStyles() {
    // Получаем элементы, к которым хотим применить стили
    var body = document.querySelector('.body');
    var header = document.querySelector('.header');
    var headerContent = document.querySelector('.header-content');
    var headerParagraph = document.querySelector('.header-content p');
    var headerButton = document.querySelector('.header-content button');
    var navbar = document.querySelector('.navbar');
    var navbarList = document.querySelector('.navbar-list');

    // Применяем стили через объект style
    body.style.minHeight = "100vh";
    body.style.display = "flex";
    body.style.flexDirection = "column";

    header.style.display = "flex";
    header.style.flexDirection = "column";
    header.style.paddingTop = "57.71px";
    header.style.paddingBottom = "119px";
    header.style.alignItems = "center";
    header.style.backgroundColor = "#87509c";
    header.style.height = "100%";

    headerContent.style.display = "flex";
    headerContent.style.flexDirection = "column";
    headerContent.style.justifyContent = "space-between";
    headerContent.style.alignItems = "center";  
    headerContent.style.marginTop = "113px";

    headerParagraph.style.fontFamily = "Titilium Web";
    headerParagraph.style.width = "971px";
    headerParagraph.style.fontSize = "42px";
    headerParagraph.style.fontWeight = "bold";
    headerParagraph.style.textAlign = "center";
    headerParagraph.style.verticalAlign = "text-top";
    headerParagraph.style.color = "#fff";

    headerButton.style.width = "337.96px";
    headerButton.style.height = "87.54px";
    headerButton.style.backgroundColor = "#eb7d4b";
    headerButton.style.color = "#fff";
    headerButton.style.fontSize = "18px";
    headerButton.style.fontWeight = "bold";
    headerButton.style.margin = "32.95px";

    navbar.style.display = "flex";
    navbar.style.flexDirection = "row";
    navbar.style.justifyContent = "space-between";
    navbar.style.alignItems = "center";
    navbar.style.width = "1011.02px";

    navbarList.style.display = "flex";
    navbarList.style.flexDirection = "row";
    navbarList.style.justifyContent = "space-around";
    navbarList.style.alignItems = "center";
    navbarList.style.width = "393px";

    // Добавляем hover стили к ссылкам в навигационном меню
    var navbarLinks = document.querySelectorAll('.navbar-list a');
    navbarLinks.forEach(function(link) {
        link.style.textDecoration = "none";
        link.style.color = "#fff";
        link.style.padding = "8px";
        link.style.borderRadius = "5px";
        link.addEventListener('mouseover', function() {
            link.style.backgroundColor = "#643a79";
        });
        link.addEventListener('mouseout', function() {
            link.style.backgroundColor = "initial";
        });
    });

    // Применяем стили для .service
    var serviceDiv = document.querySelector('.service');
    serviceDiv.style.display = 'flex';
    serviceDiv.style.flexDirection = 'column';
    serviceDiv.style.justifyContent = 'space-between';
    serviceDiv.style.alignItems = 'center';
    serviceDiv.style.backgroundColor = '#17c2a4';
    serviceDiv.style.padding = '112.51px 195px';

    var serviceContent = document.querySelector('.service-content');
    serviceContent.style.display = 'flex';
    serviceContent.style.flexDirection = 'column';
    serviceContent.style.alignItems = 'center';
    serviceContent.style.justifyContent = 'space-evenly';

    var serviceTitleSpan = document.querySelector('.service-title');
    serviceTitleSpan.style.fontFamily = 'Titillium Web';
    serviceTitleSpan.style.fontStyle = 'normal';
    serviceTitleSpan.style.fontWeight = '700';
    serviceTitleSpan.style.fontSize = '40px';
    serviceTitleSpan.style.lineHeight = '61px';
    serviceTitleSpan.style.textAlign = 'center';
    serviceTitleSpan.style.color = '#FFF';

    var serviceDescriptionP = document.querySelector('.service-description');
    serviceDescriptionP.style.fontFamily = 'Titillium Web';
    serviceDescriptionP.style.fontStyle = 'normal';
    serviceDescriptionP.style.fontWeight = '400';
    serviceDescriptionP.style.fontSize = '18px';
    serviceDescriptionP.style.lineHeight = '27px';
    serviceDescriptionP.style.textAlign = 'center';
    serviceDescriptionP.style.color = '#FFF';
    serviceDescriptionP.style.width = '577px';

    var seviceCards = document.querySelector('.cards');
    seviceCards.style.display = 'flex';

    var servicesCard = document.querySelectorAll('.service-card');
    servicesCard.forEach(function(card, index) {
        card.style.display = 'flex';
        card.style.flexDirection = 'column';
        card.style.alignItems = 'center';
        card.style.justifyContent = 'space-evenly';
        card.style.width = '190px';
        card.style.height = '305px';
        card.querySelector('span').style.color = '#fff';
        card.querySelector('span').style.fontFamily = 'Titillium Web';
        card.querySelector('span').style.fontWeight = '700';
        card.querySelector('span').style.fontSize = '20px';
        card.querySelector('p').style.color = '#fff';
        card.querySelector('p').style.fontFamily = 'Titillium Web';
        card.querySelector('p').style.textAlign = 'center';
        card.querySelector('p').style.fontSize = '16px';
        if (index == 0) {
            card.querySelector('img').style.width = '120px';
            card.querySelector('img').style.height = '124px';
        }
        else if (index == 1) {
            card.querySelector('img').style.width = '90px';
            card.querySelector('img').style.height = '131px';
        }
        else if (index == 2) {
            card.querySelector('img').style.width = '159px';
            card.querySelector('img').style.height = '126px';
        }
        else if (index == 3) {
            card.querySelector('img').style.width = '95px';
            card.querySelector('img').style.height = '134px';
        }
    });

    // Применяем стили для .employee
    var employeeDiv = document.querySelector('.employee');
    employeeDiv.style.display = 'flex';
    employeeDiv.style.flexDirection = 'column';
    employeeDiv.style.justifyContent = 'space-between';
    employeeDiv.style.alignItems = 'center';
    employeeDiv.style.backgroundColor = '#e7f1f8';
    employeeDiv.style.padding = '107px 200px';

    // Применяем стили для .employee-content
    var employeeContentDiv = document.querySelector('.employee-content');
    employeeContentDiv.style.display = 'flex';
    employeeContentDiv.style.flexDirection = 'column';
    employeeContentDiv.style.justifyContent = 'space-between';
    employeeContentDiv.style.alignItems = 'center';

    // Применяем стили для .employee-title
    var employeeTitleSpan = document.querySelector('.employee-title');
    employeeTitleSpan.style.fontFamily = 'Titillium Web';
    employeeTitleSpan.style.fontStyle = 'normal';
    employeeTitleSpan.style.fontWeight = '700';
    employeeTitleSpan.style.fontSize = '40px';
    employeeTitleSpan.style.lineHeight = '61px';
    employeeTitleSpan.style.textAlign = 'center';
    employeeTitleSpan.style.marginBottom = '26px';

    // Применяем стили для .employee-description
    var employeeDescriptionP = document.querySelector('.employee-description');
    employeeDescriptionP.style.fontFamily = 'Titillium Web';
    employeeDescriptionP.style.fontStyle = 'normal';
    employeeDescriptionP.style.fontWeight = '400';
    employeeDescriptionP.style.fontSize = '18px';
    employeeDescriptionP.style.lineHeight = '27px';
    employeeDescriptionP.style.textAlign = 'center';
    employeeDescriptionP.style.width = 'auto';
    employeeDescriptionP.style.marginBottom = '73px';

    // Применяем стили для .employee-cards
    var employeeCardsDiv = document.querySelector('.employee-cards');
    employeeCardsDiv.style.display = 'flex';
    employeeCardsDiv.style.flexDirection = 'row';
    employeeCardsDiv.style.alignItems = 'center';
    employeeCardsDiv.style.justifyContent = 'space-between';

    // Применяем стили для .employee-card
    var employeeCardDivs = document.querySelectorAll('.employee-card');
    employeeCardDivs.forEach(function(card) {
        card.style.display = 'flex';
        card.style.flexDirection = 'column';
        card.style.alignItems = 'center';
    });

    // Применяем стили для .mr-80
    var mr80Divs = document.querySelectorAll('.mr-80');
    mr80Divs.forEach(function(mr) {
        mr.style.marginRight = '80px';
    });

    // Применяем стили для .employee-card img
    var employeeCardImages = document.querySelectorAll('.employee-card img');
    employeeCardImages.forEach(function(img) {
        img.style.marginBottom = '34px';
    });

    // Применяем стили для .employee-name
    var employeeNameSpans = document.querySelectorAll('.employee-name');
    employeeNameSpans.forEach(function(name) {
        name.style.fontFamily = 'Titillium Web';
        name.style.fontStyle = 'normal';
        name.style.fontWeight = '700';
        name.style.fontSize = '22px';
        name.style.lineHeight = '37px';
        name.style.color = '#27283D';
    });

    // Применяем стили для .employee-department
    var employeeDepartmentSpans = document.querySelectorAll('.employee-department');
    employeeDepartmentSpans.forEach(function(department) {
        department.style.fontFamily = 'Titillium Web';
        department.style.fontStyle = 'normal';
        department.style.fontWeight = '400';
        department.style.fontSize = '16px';
        department.style.lineHeight = '24px';
        department.style.textAlign = 'center';
        department.style.color = '#30BAE7';
        department.style.marginBottom = '9px';
    });

    // Применяем стили для .employee-card p
    var employeeCardParagraphs = document.querySelectorAll('.employee-card p');
    employeeCardParagraphs.forEach(function(paragraph) {
        paragraph.style.fontFamily = 'Titillium Web';
        paragraph.style.fontStyle = 'normal';
        paragraph.style.fontWeight = '300';
        paragraph.style.fontSize = '16px';
        paragraph.style.lineHeight = '24px';
        paragraph.style.textAlign = 'center';
        paragraph.style.marginBottom = '37px';
    });

    // Применяем стили для .employee-social
    var employeeSocialDivs = document.querySelectorAll('.employee-social');
    employeeSocialDivs.forEach(function(social) {
        social.style.display = 'flex';
        social.style.flexDirection = 'row';
        social.style.justifyContent = 'space-around';
        social.style.alignItems = 'center';
    });

    // Применяем стили для .employee-social li
    var employeeSocialListItems = document.querySelectorAll('.employee-social li');
    employeeSocialListItems.forEach(function(item) {
        item.style.marginRight = '11px';
    });

    // Применяем стили для .skill
    var skillDiv = document.querySelector('.skill');
    skillDiv.style.display = 'flex';
    skillDiv.style.flexDirection = 'column';
    skillDiv.style.backgroundColor = '#fff';
    skillDiv.style.padding = '104px 220px';

    // Применяем стили для .skill-content
    var skillContentDiv = document.querySelector('.skill-content');
    skillContentDiv.style.display = 'flex';
    skillContentDiv.style.flexDirection = 'column';
    skillContentDiv.style.justifyContent = 'space-between';
    skillContentDiv.style.alignItems = 'center';

    // Применяем стили для .skill-title
    var skillTitleSpan = document.querySelector('.skill-title');
    skillTitleSpan.style.fontFamily = 'Titillium Web';
    skillTitleSpan.style.fontStyle = 'normal';
    skillTitleSpan.style.fontWeight = '700';
    skillTitleSpan.style.fontSize = '40px';
    skillTitleSpan.style.lineHeight = '61px';
    skillTitleSpan.style.textAlign = 'center';
    skillTitleSpan.style.color = '#3C4761';
    skillTitleSpan.style.marginBottom = '24.37px';

    // Применяем стили для .skill-description
    var skillDescriptionP = document.querySelector('.skill-description');
    skillDescriptionP.style.fontFamily = 'Titillium Web';
    skillDescriptionP.style.fontStyle = 'normal';
    skillDescriptionP.style.fontWeight = '400';
    skillDescriptionP.style.fontSize = '18px';
    skillDescriptionP.style.lineHeight = '27px';
    skillDescriptionP.style.textAlign = 'center';
    skillDescriptionP.style.color = '#3C4761';
    skillDescriptionP.style.marginBottom = '79px';

    // Применяем стили для .skill-identificator
    var skillIdentificatorDiv = document.querySelector('.skill-identificator');
    skillIdentificatorDiv.style.display = 'flex';
    skillIdentificatorDiv.style.flexDirection = 'row';
    skillIdentificatorDiv.style.justifyContent = 'space-between';
    skillIdentificatorDiv.style.alignItems = 'center';

    // Применяем стили для .skill-progress
    var skillProgressDivs = document.querySelectorAll('.skill-progress');
    skillProgressDivs.forEach(function(progress) {
        progress.style.display = 'flex';
        progress.style.flexDirection = 'column';
        progress.style.justifyContent = 'space-between';
        progress.style.alignItems = 'center';
        progress.style.marginRight = '10px';
    });

    // Применяем стили для .skill-progress text
    var skillProgressTexts = document.querySelectorAll('.skill-progress text');
    skillProgressTexts.forEach(function(text) {
        text.style.fontFamily = 'Titillium Web';
        text.style.fontStyle = 'normal';
        text.style.fontWeight = '300';
        text.style.fontSize = '42px';
        text.style.lineHeight = '76px';
        text.style.color = '#3C4761';
    });

    // Применяем стили для .skill-progress span
    var skillProgressSpans = document.querySelectorAll('.skill-progress span');
    skillProgressSpans.forEach(function(span) {
        span.style.fontFamily = 'Titillium Web';
        span.style.fontStyle = 'normal';
        span.style.fontWeight = '700';
        span.style.fontSize = '24px';
        span.style.lineHeight = '37px';
        span.style.textTransform = 'uppercase';
        span.style.color = '#3C4761';
    });

    // Применяем стили для .progress-ring
    var progressRings = document.querySelectorAll('.progress-ring');
    progressRings.forEach(function(ring) {
        ring.style.width = '160px';
        ring.style.height = '160px';
    });

    // Применяем стили для .progress-ring__circle1, .progress-ring__circle2, .progress-ring__circle3, .progress-ring__circle4
    var progressRingCircles = document.querySelectorAll('.progress-ring__circle1, .progress-ring__circle2, .progress-ring__circle3, .progress-ring__circle4');
    progressRingCircles.forEach(function(circle) {
        circle.style.strokeWidth = '10';
        circle.style.animation = 'spin 1s linear infinite';
        circle.style.transform = 'rotate(-90deg)';
        circle.style.transformOrigin = '50% 50%';
    });

    // Применяем стили для .progress-ring__circle1
    var progressRingCircle1 = document.querySelector('.progress-ring__circle1');
    progressRingCircle1.style.stroke = '#30bae7';
    progressRingCircle1.style.strokeDasharray = '283';
    progressRingCircle1.style.strokeDashoffset = '28.3';

    // Применяем стили для .progress-ring__circle2
    var progressRingCircle2 = document.querySelector('.progress-ring__circle2');
    progressRingCircle2.style.stroke = '#d74680';
    progressRingCircle2.style.strokeDasharray = '283';
    progressRingCircle2.style.strokeDashoffset = '70.75';

    // // Применяем стили для .progress-ring__circle3
    // var progressRingCircle3 = document.querySelector('.progress-ring__circle3');
    // progressRingCircle3.style.stroke = '#15c7a8';
    // progressRingCircle3.style.strokeDasharray = '283';
    // progressRingCircle3.style.strokeDashoffset = '84.9';

    // // Применяем стили для .progress-ring__circle4
    // var progressRingCircle4 = document.querySelector('.progress-ring__circle4');
    // progressRingCircle4.style.stroke = '#eb7d4b';
    // progressRingCircle4.style.strokeDasharray = '283';
    // progressRingCircle4.style.strokeDashoffset = '56.6';

    var portfolio = document.querySelector('.portfolio');
    console.log('portfolio');
    portfolio.style.display = 'flex';
    portfolio.style.flexDirection = 'column';
    portfolio.style.justifyContent = 'space-between';
    portfolio.style.alignItems = 'center';
    portfolio.style.padding = '107px 170px';
    portfolio.style.backgroundColor = '#ffdd99';

    let portfolioContent = document.querySelector('.portfolio-content');
    portfolioContent.style.display = 'flex';
    portfolioContent.style.flexDirection = 'column';
    portfolioContent.style.justifyContent = 'space-between';
    portfolioContent.style.alignItems = 'center';

    let portfolioTitle = document.querySelector('.portfolio-title');
    portfolioTitle.style.marginBottom = '24.37px';
    portfolioTitle.style.fontFamily = "'Titillium Web'";
    portfolioTitle.style.fontStyle = 'normal';
    portfolioTitle.style.fontWeight = '700';
    portfolioTitle.style.fontSize = '40px';
    portfolioTitle.style.lineHeight = '61px';
    portfolioTitle.style.textAlign = 'center';
    portfolioTitle.style.color = '#393939';

    let portfolioDescription = document.querySelector('.portfolio-description');
    portfolioDescription.style.marginBottom = '37.13px';
    portfolioDescription.style.fontFamily = "'Titillium Web'";
    portfolioDescription.style.fontStyle = 'normal';
    portfolioDescription.style.fontWeight = '400';
    portfolioDescription.style.fontSize = '18px';
    portfolioDescription.style.lineHeight = '27px';
    portfolioDescription.style.textAlign = 'center';
    portfolioDescription.style.color = '#393939';

    let portfolioCategory = document.querySelector('.portfolio-category');
    portfolioCategory.style.display = 'flex';
    portfolioCategory.style.flexDirection = 'row';
    portfolioCategory.style.justifyContent = 'space-between';
    portfolioCategory.style.alignItems = 'center';
    portfolioCategory.style.marginBottom = '62px';

    let categoryBtn = document.querySelectorAll('.category-btn');
    categoryBtn.forEach(function(btn) {
        btn.style.padding = '10px';
        btn.style.borderRadius = '5px';
        btn.style.width = '84px';
        btn.style.height = '38px';
        btn.style.backgroundColor = '#d5b882';
        btn.style.fontFamily = 'Titillium Web';
        btn.style.borderRadius = '5px';
        btn.style.fontSize = '24px';
        btn.style.fontWeight = 'bold';
        btn.style.color = '#393939';
        btn.style.textTransform = 'uppercase';
        btn.style.marginRight = '10px';
        btn.style.textAlign = 'center';
        btn.style.lineHeight = '38px';
    });

    let selected = document.querySelector('.selected');
    selected.style.width = '84px';
    selected.style.height = '38px';
    selected.style.backgroundColor = '#fff';
    selected.style.fontFamily = 'Titillium Web';
    selected.style.borderRadius = '5px';
    selected.style.fontSize = '24px';
    selected.style.fontWeight = 'bold';
    selected.style.color = '#393939';
    selected.style.textTransform = 'uppercase';
    selected.style.marginRight = '10px';

    let portfolioCards = document.querySelector('.portfolio-cards');
    portfolioCards.style.width = '1103px';
    portfolioCards.style.height = '785.03px';
    portfolioCards.style.display = 'flex';
    portfolioCards.style.flexWrap = 'wrap';
    portfolioCards.style.gap = '19px';

    let portfolioCard = document.querySelectorAll('.portfolio-card');
    portfolioCard.forEach(function(card) {
        card.style.width = '541px';
        card.style.height = '365.03px';
        card.style.display = 'flex';
        card.style.alignItems = 'end';
        card.style.justifyContent = 'center';
        card.style.backgroundSize = '100% 85%';
        card.style.backgroundPosition = 'center';
        card.style.backgroundPositionY = '0';
    });

    let one = document.querySelector('.one');
    one.style.background = "url('./assets/portfolios/1.png') no-repeat";

    let two = document.querySelector('.two');
    two.style.background = "url('./assets/portfolios/2.png') no-repeat";

    let three = document.querySelector('.three');
    three.style.background = "url('./assets/portfolios/3.png') no-repeat";

    let four = document.querySelector('.four');
    four.style.background = "url('./assets/portfolios/4.png') no-repeat";

    let text = document.querySelector('.text');
    text.style.fontFamily = 'Titillium Web';
    text.style.fontSize = '18px';
    text.style.fontWeight = '400';
    text.style.lineHeight = '27px';
    text.style.letterSpacing = '0em';
    text.style.textAlign = 'center';
    text.style.color = '#393939';

    let button5 = document.querySelector('.button5');
    button5.style.width = '294px';
    button5.style.height = '70px';

    let btn5 = document.querySelector('.btn5');
    btn5.style.width = '100%';
    btn5.style.height = '100%';
    btn5.style.fontFamily = 'Titillium Web';
    btn5.style.fontSize = '18px';
    btn5.style.fontWeight = '600';
    btn5.style.lineHeight = '27px';
    btn5.style.letterSpacing = '0em';
    btn5.style.textAlign = 'center';
    btn5.style.color = '#FFFFFF';
    btn5.style.background = '#17C2A4';
    btn5.style.border = 'none';
    btn5.style.cursor = 'pointer';
    btn5.style.boxShadow = '0px 4px 4px 0px #00000040';

    // Получаем элементы по классам
    const about = document.querySelector('.about');
    const aboutContent = document.querySelector('.about-content');
    const aboutContentTitle = document.querySelector('.about-content-title');
    const aboutContentDescription = document.querySelector('.about-content-description');
    const peopleCards = document.querySelector('.people-cards');
    const aboutCard = document.querySelectorAll('.about-card');
    const clientImg = document.querySelectorAll('.client-img');
    const aboutCardRight = document.querySelectorAll('.about-card-right');
    const aboutCardRightParagraph = document.querySelectorAll('.about-card-right p');
    const aboutCardRightBottom = document.querySelectorAll('.about-card-right-bottom');
    const clientName = document.querySelectorAll('.client-name');
    const clientDevelopment = document.querySelectorAll('.client-development');

    // Применяем стили через объект style
    about.style.display = 'flex';
    about.style.flexDirection = 'column';
    about.style.justifyContent = 'space-between';
    about.style.alignItems = 'center';
    about.style.backgroundColor = '#d74680';
    about.style.padding = '106px 182px';

    aboutContent.style.display = 'flex';
    aboutContent.style.flexDirection = 'column';
    aboutContent.style.justifyContent = 'space-between';
    aboutContent.style.alignItems = 'center';

    aboutContentTitle.style.fontFamily = 'Titillium Web';
    aboutContentTitle.style.fontStyle = 'normal';
    aboutContentTitle.style.fontWeight = '700';
    aboutContentTitle.style.fontSize = '40px';
    aboutContentTitle.style.lineHeight = '61px';
    aboutContentTitle.style.display = 'flex';
    aboutContentTitle.style.alignItems = 'center';
    aboutContentTitle.style.textAlign = 'center';
    aboutContentTitle.style.color = '#FFFFFF';
    aboutContentTitle.style.marginBottom = '24px';

    aboutContentDescription.style.fontFamily = 'Titillium Web';
    aboutContentDescription.style.fontStyle = 'normal';
    aboutContentDescription.style.fontWeight = '400';
    aboutContentDescription.style.fontSize = '18px';
    aboutContentDescription.style.lineHeight = '27px';
    aboutContentDescription.style.textAlign = 'center';
    aboutContentDescription.style.marginBottom = '83px';
    aboutContentDescription.style.color = '#FFF';

    peopleCards.style.display = 'flex';
    peopleCards.style.flexWrap = 'wrap';
    peopleCards.style.justifyContent = 'space-between';
    peopleCards.style.alignItems = 'center';

    aboutCard.forEach(card => {
        card.style.display = 'flex';
        card.style.flexDirection = 'row';
        card.style.justifyContent = 'space-around';
        card.style.alignItems = 'center';
    });

    clientImg.forEach(img => {
        img.style.alignSelf = 'flex-start';
    });

    aboutCardRight.forEach(right => {
        right.style.display = 'flex';
        right.style.flexDirection = 'column';
        right.style.justifyContent = 'space-around';
        right.style.alignSelf = 'center';
        right.style.width = '502px';
    });

    aboutCardRightParagraph.forEach(paragraph => {
        paragraph.style.fontFamily = 'Titillium Web';
        paragraph.style.fontStyle = 'italic';
        paragraph.style.fontWeight = '400';
        paragraph.style.fontSize = '21px';
        paragraph.style.lineHeight = '32px';
        paragraph.style.color = '#FFF';
    });

    aboutCardRightBottom.forEach(bottom => {
        bottom.style.display = 'flex';
        bottom.style.flexDirection = 'column';
        bottom.style.justifyContent = 'space-between';
    });

    clientName.forEach(name => {
        name.style.fontFamily = 'Titillium Web';
        name.style.fontStyle = 'normal';
        name.style.fontWeight = '700';
        name.style.fontSize = '24px';
        name.style.lineHeight = '37px';
        name.style.color = '#FFF';
    });

    clientDevelopment.forEach(development => {
        development.style.fontFamily = 'Titillium Web';
        development.style.fontStyle = 'normal';
        development.style.fontWeight = '400';
        development.style.fontSize = '18px';
        development.style.lineHeight = '27px';
        development.style.color = '#FFDD99';
    });
}

document.addEventListener("DOMContentLoaded", function() {
// Создаем элементы header
var header = document.createElement("header");
header.className = "header";

var nav = document.createElement("nav");
nav.className = "navbar";

var img = document.createElement("img");
img.src = "./assets/logo.png";
img.alt = "Cuda logo";

var ul = document.createElement("ul");
ul.className = "navbar-list";

var navItems = ["HOME", "ABOUT", "WORK", "BLOG", "CONTACT"];
navItems.forEach(function(item) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = "#";
    a.textContent = item;
    li.appendChild(a);
    ul.appendChild(li);
});

nav.appendChild(img);
nav.appendChild(ul);
header.appendChild(nav);

var headerContent = document.createElement("div");
headerContent.className = "header-content";

var p = document.createElement("p");
p.textContent = "Hi there! We are the new kids on the block and we build awesome websites and mobile apps.";

var button = document.createElement("button");
button.textContent = "WORK WITH US";

headerContent.appendChild(p);
headerContent.appendChild(button);
header.appendChild(headerContent);

// Создаем элементы main
var main = document.createElement("main");
main.className = "main";

// Создаем элементы для сервисов
var service = document.createElement("div");
service.className = "service";

var serviceContent = document.createElement("div");
serviceContent.className = "service-content";

var serviceTitle = document.createElement("span");
serviceTitle.className = "service-title";
serviceTitle.textContent = "SERVICES WE PROVIDE";

var serviceDescription = document.createElement("p");
serviceDescription.className = "service-description";
serviceDescription.textContent = "We are working with both individuals and businesses from all over the globe to create awesome websites and applications.";

var cards = document.createElement("div");
cards.className = "cards";

var serviceCardData = [
    { imgSrc: "./assets/flag.png", imgAlt: "Branding", spanText: "BRANDING", pText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh." },
    { imgSrc: "./assets/pencil.png", imgAlt: "Design", spanText: "DESIGN", pText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem" },
    { imgSrc: "./assets/settings.png", imgAlt: "Development", spanText: "DEVELOPMENT", pText: "At vero eos et accusamus et iusto odio dignissimos qui blanditiis praesentium." },
    { imgSrc: "./assets/rocket.png", imgAlt: "Rocket science", spanText: "ROCKET SCIENCE", pText: "Et harum quidem rerum est et expedita distinctio. Nam libero tempore." }
];

serviceCardData.forEach(function(data) {
    var serviceCard = document.createElement("div");
    serviceCard.className = "service-card";

    var img = document.createElement("img");
    img.src = data.imgSrc;
    img.alt = data.imgAlt;

    var span = document.createElement("span");
    span.textContent = data.spanText;

    var p = document.createElement("p");
    p.textContent = data.pText;

    serviceCard.appendChild(img);
    serviceCard.appendChild(span);
    serviceCard.appendChild(p);

    cards.appendChild(serviceCard);
});

serviceContent.appendChild(serviceTitle);
serviceContent.appendChild(serviceDescription);
serviceContent.appendChild(cards);
service.appendChild(serviceContent);
main.appendChild(service);

// Создаем элементы div.employee
var employeeDiv = document.createElement("div");
employeeDiv.className = "employee";

var employeeContentDiv = document.createElement("div");
employeeContentDiv.className = "employee-content";

var employeeTitleSpan = document.createElement("span");
employeeTitleSpan.className = "employee-title";
employeeTitleSpan.textContent = "MEET OUR BEAUTIFUL TEAM";

var employeeDescriptionP = document.createElement("p");
employeeDescriptionP.className = "employee-description";
employeeDescriptionP.textContent = "We are a small team of designers and developers, who help brands with big ideas.";

var employeeCardsDiv = document.createElement("div");
employeeCardsDiv.className = "employee-cards";

// Создаем карточки сотрудников
var employees = [
    {
        name: "ANNE HATHAWAY",
        image: "./assets/employees/Anne.png",
        department: "CEO / Marketing Guru",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        socials: ["./assets/socials/facebook.png", "./assets/socials/twitter.png", "./assets/socials/linkedin.png", "./assets/socials/mail.png"]
    },
    {
        name: "Kate Upton",
        image: "./assets/employees/Kate.png",
        department: "Creative Designer",
        description: "Duis aute irure dolor in in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat non diam proident.",
        socials: ["./assets/socials/twitter.png", "./assets/socials/linkedin.png", "./assets/socials/mail.png"]
    },
    {
        name: "Olivia Wilde",
        image: "./assets/employees/Olivie.png",
        department: "Lead Designer",
        description: "Nemo enim ipsam voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem nesciunt.",
        socials: ["./assets/socials/facebook.png", "./assets/socials/twitter.png", "./assets/socials/linkedin.png", "./assets/socials/mail.png"]
    },
    {
        name: "Ashley Greene",
        image: "./assets/employees/Ashley.png",
        department: "SEO / Developer",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
        socials: ["./assets/socials/facebook.png", "./assets/socials/twitter.png", "./assets/socials/mail.png"]
    }
];

employees.forEach(function(employee) {
    var employeeCardDiv = document.createElement("div");
    employeeCardDiv.className = "employee-card mr-80";

    var img = document.createElement("img");
    img.src = employee.image;
    img.alt = employee.name;
    img.width = 200;
    img.height = 200;

    var nameSpan = document.createElement("span");
    nameSpan.className = "employee-name";
    nameSpan.textContent = employee.name;

    var departmentSpan = document.createElement("span");
    departmentSpan.className = "employee-department";
    departmentSpan.textContent = employee.department;

    var descriptionP = document.createElement("p");
    descriptionP.textContent = employee.description;

    var socialUl = document.createElement("ul");
    socialUl.className = "employee-social";

    employee.socials.forEach(function(social) {
        var socialLi = document.createElement("li");
        var socialLink = document.createElement("a");
        socialLink.href = "#";
        var socialImg = document.createElement("img");
        socialImg.src = social;
        socialImg.alt = social;
        socialImg.width = 32;
        socialImg.height = 32;
        socialLink.appendChild(socialImg);
        socialLi.appendChild(socialLink);
        socialUl.appendChild(socialLi);
    });

    employeeCardDiv.appendChild(img);
    employeeCardDiv.appendChild(nameSpan);
    employeeCardDiv.appendChild(departmentSpan);
    employeeCardDiv.appendChild(descriptionP);
    employeeCardDiv.appendChild(socialUl);

    employeeCardsDiv.appendChild(employeeCardDiv);
});

employeeContentDiv.appendChild(employeeTitleSpan);
employeeContentDiv.appendChild(employeeDescriptionP);
employeeContentDiv.appendChild(employeeCardsDiv);

employeeDiv.appendChild(employeeContentDiv);

// Создаем элемент div
var skillDiv = document.createElement('div');
skillDiv.classList.add('skill');

// Создаем элемент div для содержимого скилла
var skillContentDiv = document.createElement('div');
skillContentDiv.classList.add('skill-content');

// Создаем заголовок скилла
var skillTitle = document.createElement('span');
skillTitle.classList.add('skill-title');
skillTitle.textContent = 'WE GOT SKILLS!';

// Создаем абзац с описанием скилла
var skillDescription = document.createElement('p');
skillDescription.classList.add('skill-description');
skillDescription.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

// Создаем обертку для прогресс-баров
var skillIdentificatorDiv = document.createElement('div');
skillIdentificatorDiv.classList.add('skill-identificator');

// Массив с данными для прогресс-баров
var skillsData = [
    { text: 'WEB DESIGN', percentage: 90, color: '#30bae7' },
    { text: 'HTML / CSS', percentage: 75, color: '#d74680' },
    { text: 'GRAPHIC DESIGN', percentage: 70, color: '#15c7a8' },
    { text: 'UI / UX', percentage: 80, color: '#eb7d4b' }
];

// Создаем прогресс-бары
skillsData.forEach(function(skill) {
    var skillProgressDiv = document.createElement('div');
    skillProgressDiv.classList.add('skill-progress');
    
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('progress-ring');
    svg.setAttribute('width', '160');
    svg.setAttribute('height', '160');
    
    var circle1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle1.classList.add('progress-ring__circle1');
    circle1.setAttribute('stroke', '#dfe8ed');
    circle1.setAttribute('stroke-width', '10');
    circle1.setAttribute('fill', 'transparent');
    circle1.setAttribute('r', '45');
    circle1.setAttribute('cx', '90');
    circle1.setAttribute('cy', '75');
    
    var circle2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle2.classList.add('progress-ring__circle2');
    circle2.setAttribute('stroke', skill.color);
    circle2.setAttribute('stroke-width', '10');
    circle2.setAttribute('fill', 'transparent');
    circle2.setAttribute('r', '45');
    circle2.setAttribute('cx', '90');
    circle2.setAttribute('cy', '75');

    var circle3 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle3.classList.add('progress-ring__circle3');
    circle3.setAttribute('stroke', skill.color);
    circle3.setAttribute('stroke-width', '10');
    circle3.setAttribute('fill', 'transparent');
    circle3.setAttribute('r', '45');
    circle3.setAttribute('cx', '90');
    circle3.setAttribute('cy', '75');

    var circle4 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle4.classList.add('progress-ring__circle4');
    circle4.setAttribute('stroke', skill.color);
    circle4.setAttribute('stroke-width', '10');
    circle4.setAttribute('fill', 'transparent');
    circle4.setAttribute('r', '45');
    circle4.setAttribute('cx', '90');
    circle4.setAttribute('cy', '75');
    
    var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', '47%');
    text.setAttribute('y', '43%');
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('stroke', '#3C4761');
    text.setAttribute('stroke-width', '1px');
    text.setAttribute('dy', '.3em');
    text.setAttribute('font-family', 'Titillium Web');
    text.setAttribute('fill', '#3C4761');
    text.textContent = skill.percentage + '%';
    
    svg.appendChild(circle1);
    svg.appendChild(circle2);
    svg.appendChild(text);
    
    var span = document.createElement('span');
    span.textContent = skill.text;
    
    skillProgressDiv.appendChild(svg);
    skillProgressDiv.appendChild(span);
    
    skillIdentificatorDiv.appendChild(skillProgressDiv);
});

// Добавляем все созданные элементы в нужные родительские элементы
skillContentDiv.appendChild(skillTitle);
skillContentDiv.appendChild(skillDescription);
skillContentDiv.appendChild(skillIdentificatorDiv);
skillDiv.appendChild(skillContentDiv);

// Создаем элементы div.portfolio
var portfolioDiv = document.createElement("div");
portfolioDiv.className = "portfolio";

var portfolioContentDiv = document.createElement("div");
portfolioContentDiv.className = "portfolio-content";

var portfolioTitleSpan = document.createElement("span");
portfolioTitleSpan.className = "portfolio-title";
portfolioTitleSpan.textContent = "OUR PORTFOLIO";

var portfolioDescriptionP = document.createElement("p");
portfolioDescriptionP.className = "portfolio-description";
portfolioDescriptionP.textContent = "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur, adipisci velit, sed quia non numquam";

var portfolioCategoryDiv = document.createElement("div");
portfolioCategoryDiv.className = "portfolio-category";

var categoryNames = ["All", "Web", "Apps", "Icons"];
categoryNames.forEach(function(categoryName) {
    var categoryBtnDiv = document.createElement("div");
    categoryBtnDiv.className = "category-btn";
    if (categoryName === "All") {
        categoryBtnDiv.className += " selected";
    }
    categoryBtnDiv.textContent = categoryName;
    portfolioCategoryDiv.appendChild(categoryBtnDiv);
});

var portfolioCardsDiv = document.createElement("div");
portfolioCardsDiv.className = "portfolio-cards";

var projectNames = ["Isometric Perspective Mock-Up", "Time Zone App UI", "Viro Media Players UI", "Blog / Magazine Flat UI Kit"];
projectNames.forEach(function(projectName, index) {
    var portfolioCardDiv = document.createElement("div");
    portfolioCardDiv.className = "portfolio-card";
    if (index === 0) portfolioCardDiv.className += " one";
    else if (index === 1) portfolioCardDiv.className += " two";
    else if (index === 2) portfolioCardDiv.className += " three";
    else if (index === 3) portfolioCardDiv.className += " four";

    var textP = document.createElement("p");
    textP.className = "text";
    textP.textContent = projectName;

    portfolioCardDiv.appendChild(textP);
    portfolioCardsDiv.appendChild(portfolioCardDiv);
});

var button5Div = document.createElement("div");
button5Div.className = "button5";

var loadMoreBtn = document.createElement("button");
loadMoreBtn.className = "btn5";
loadMoreBtn.textContent = "LOAD MORE PROJECTS";

button5Div.appendChild(loadMoreBtn);

portfolioContentDiv.appendChild(portfolioTitleSpan);
portfolioContentDiv.appendChild(portfolioDescriptionP);
portfolioContentDiv.appendChild(portfolioCategoryDiv);
portfolioContentDiv.appendChild(portfolioCardsDiv);
portfolioContentDiv.appendChild(button5Div);

portfolioDiv.appendChild(portfolioContentDiv);

// Создаем элементы div.about
var aboutDiv = document.createElement("div");
aboutDiv.className = "about";

var aboutContentDiv = document.createElement("div");
aboutContentDiv.className = "about-content";

var aboutContentTitleSpan = document.createElement("span");
aboutContentTitleSpan.className = "about-content-title";
aboutContentTitleSpan.textContent = "WHAT POEPLE SAY ABOUT US";

var aboutContentDescriptionP = document.createElement("p");
aboutContentDescriptionP.className = "about-content-description";
aboutContentDescriptionP.textContent = "Our clients love us!";

var peopleCardsDiv = document.createElement("div");
peopleCardsDiv.className = "people-cards";

var aboutCardDiv = document.createElement("div");
aboutCardDiv.className = "about-card";

var img = document.createElement("img");
img.src = "./assets/clients/Chanel.png";
img.alt = "Chanel Iman";
img.width = 96;
img.height = 96;
img.className = "client-img";

var aboutCardRightDiv = document.createElement("div");
aboutCardRightDiv.className = "about-card-right";

var p = document.createElement("p");
p.textContent = "“Nullam dapibus blandit orci, viverra gravida dui lobortis eget. Maecenas fringilla urna eu nisl scelerisque.”";

var aboutCardRightBottomDiv = document.createElement("div");
aboutCardRightBottomDiv.className = "about-card-right-bottom";

var clientNameSpan = document.createElement("span");
clientNameSpan.className = "client-name";
clientNameSpan.textContent = "Chanel Iman";

var clientDevelopmentSpan = document.createElement("span");
clientDevelopmentSpan.className = "client-development";
clientDevelopmentSpan.textContent = "CEO of Pinterest";

aboutCardRightBottomDiv.appendChild(clientNameSpan);
aboutCardRightBottomDiv.appendChild(clientDevelopmentSpan);

aboutCardRightDiv.appendChild(p);
aboutCardRightDiv.appendChild(aboutCardRightBottomDiv);

aboutCardDiv.appendChild(img);
aboutCardDiv.appendChild(aboutCardRightDiv);

peopleCardsDiv.appendChild(aboutCardDiv);

aboutContentDiv.appendChild(aboutContentTitleSpan);
aboutContentDiv.appendChild(aboutContentDescriptionP);
aboutContentDiv.appendChild(peopleCardsDiv);

aboutDiv.appendChild(aboutContentDiv);

// Добавляем элементы в body
document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(employeeDiv);
document.body.appendChild(skillDiv);
document.body.appendChild(portfolioDiv);
document.body.appendChild(aboutDiv);

setStyles();
});