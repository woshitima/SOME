// =============================== header ==================================

const header = document.createElement('header')

const header_top_block = document.createElement('div')
header_top_block.className = 'header_top_block'

const logo = document.createElement('img')
logo.src = '../images/logo.png'
logo.alt = 'logo'

const main_title = document.createElement('h1')
main_title.textContent = 'SLOGAN SLOGAN SLOGAN'

const navbar = document.createElement('nav')

const menuWithoutBurger = document.createElement('ul')
menuWithoutBurger.className = 'menu_without_buger'

const navItems = [
    { class: 'menu__item', text: 'Главная' },
    { class: 'menu__item', text: 'О приложении' },
    { class: 'menu__item', text: 'О проект' },
    { class: 'menu__item', text: 'Скачать' },
    { class: 'menu__item', text: 'Контакты' }
]

let navItem
let navLink

for (let i = 0; i < navItems.length; i++) {
    navItem = document.createElement('li')
    navLink = document.createElement('a')

    navLink.className = navItems[i].class
    navLink.textContent = navItems[i].text

    navItem.append(navLink);
    menuWithoutBurger.append(navItem);
}

// =========================================================================



// ================================= main ==================================

const main = document.createElement('main')

// =========================================================================



// ========================= Картинки с вопросами ==========================

const questionsSection = document.createElement('section')
questionsSection.className = 'question'

for (let i = 1; i < 4; i++) {
    const questionCard = document.createElement('div')
    questionCard.className = 'question_card'

    const questionCardImg = document.createElement('img')
    questionCardImg.src = './images/question.png'
    questionCardImg.alt = 'question'

    const questionCardText = document.createElement('p')
    questionCardText.textContent = 'Часто ли Вы опаздываете на работу (учёбу)?'

    questionsSection.append(questionCard)
    questionCard.append(questionCardImg, questionCardText);
}

// =========================================================================



// ============================= О приложении ==============================

const appinfo = document.createElement('section')
appinfo.className = 'appinfo section'

const appinfo_card = document.createElement('div')
appinfo_card.className = 'appinfo_card'

const appinfoTitle = document.createElement('h2')
appinfoTitle.className = 'title'
appinfoTitle.textContent = 'О приложении'

const appinfoImage = document.createElement('img')
appinfoImage.src = '../images/desktop.png'
appinfoImage.alt = 'desktop'


const playbtn = document.createElement('div')
playbtn.className = 'playbtn'

const playbtnImage = document.createElement('img')
playbtnImage.src = '../images/playbtn.png'
playbtnImage.alt = 'playbutton'

// =========================================================================



// ============================== Картинки =================================

const picturesSection = document.createElement('section')
picturesSection.className = 'five_pictures'

for (let i = 1; i <= 5; i++) {
    const picturesCard = document.createElement('div')
    picturesCard.className = 'five_card'

    const picturesCardImg = document.createElement('img')
    picturesCardImg.src = './images/screenpic.png'
    picturesCardImg.alt = 'screen photo'

    picturesSection.append(picturesCard)
    picturesCard.append(picturesCardImg);
}

// =========================================================================



// ============================== О проекте ================================

const projectInfo = document.createElement('section')
projectInfo.className = 'projectinfo'

const projectCard = document.createElement('div')
projectCard.className = 'project_card'

const projectCardTitle = document.createElement('h2')
projectCardTitle.className = 'title'
projectCardTitle.textContent = 'О проекте'

const projectCardText = document.createElement('p')
projectCardText.textContent = `
    Курс для начинающих предпринимателей, направленный на качественный результат за 6 недель. Опытные
    бизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития их
    бизнеса: от разработки идеи до ее реализации.
    `

// =========================================================================



// =============================== Cкачать =================================

const downloadSection = document.createElement('section')
downloadSection.className = 'download'

const downloadCard = document.createElement('div')
downloadCard.className = 'download_card'

const downloadCardTitle = document.createElement('h2')
downloadCardTitle.className = 'title'
downloadCardTitle.textContent = 'Скачать'

const downloadCardImages = document.createElement('div')
downloadCardImages.className = 'images_div'

// ???
const downloadCardImageOne = document.createElement('img')
downloadCardImageOne.src = '../images/android.png'
downloadCardImageOne.alt = 'android logo'

const downloadCardImageTwo = document.createElement('img')
downloadCardImageTwo.src = '../images/qr_icon.png'
downloadCardImageTwo.alt = 'qr code picture'
// ???

const downloadCardText = document.createElement('p')
downloadCardText.textContent = `
    Курс для начинающих предпринимателей, направленный на качественный результат за 6 недель. Опытные
    бизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития их
    бизнеса: от разработки идеи до ее реализации.
`

// =========================================================================



// =============================== footer ==================================

const footer = document.createElement('footer')
footer.className = 'contacts'

const contacts_card = document.createElement('div')
contacts_card.className = 'contacts_card'

const footer_main_title = document.createElement('h2')
footer_main_title.textContent = 'SOME'

const footerLogos = document.createElement('div')
footerLogos.className = 'app_logos'


// Social Media Logos

const logosArr = [
    { src: "../images/vk.png", alt: "vk logo" },
    { src: "../images/instagram.png", alt: "instagram logo" },
    { src: "../images/facebook.png", alt: "facebook logo" },
]

let logoImg
let logoLink

for (let i = 0; i < logosArr.length; i++) {
    logoImg = document.createElement('img')
    logoLink = document.createElement('a')

    logoImg.src = logosArr[i].src
    logoImg.alt = logosArr[i].alt

    logoLink.append(logoImg)
    footerLogos.append(logoLink)
}


// Footer text

const footerContactsInfo = document.createElement('div')
footerContactsInfo.className = 'contacts_info'

// Контакты
const footerContacts = document.createElement('div')
footerContacts.className = 'data'

const footerContactsTitle = document.createElement('h3')
footerContactsTitle.textContent = 'Контакты'

const footerContactsTel = document.createElement('p')
footerContactsTel.textContent = 'Tel.: +996 (312) 915000 + Еxt.'

const footerContactsFax = document.createElement('p')
footerContactsFax.textContent = 'Fax: +996 (312) 915 028'

// Адреса
const footerAdresses = document.createElement('div')
footerAdresses.className = 'data'

const footerAdressesTitle = document.createElement('h3')
footerAdressesTitle.textContent = 'Адреса'

const footerAdressesText = document.createElement('p')
footerAdressesText.textContent = `
    American University of Central Asia
    7/6 Aaly Tokombaev Street
    Bishkek, Kyrgyz Republic 720060
`

// Помощь
const footerHelp = document.createElement('div')
footerHelp.className = 'data'

const footerHelpTitle = document.createElement('h3')
footerHelpTitle.textContent = 'Помощь'

footerHelp.append(footerHelpTitle)

for (let i = 1; i < 4; i++) {
    const footerHelpText = document.createElement('p')

    footerHelpText.textContent = 'Помощь'
    footerHelp.append(footerHelpText)
}

// =========================================================================



// Добавлени в HTML

const body = document.body
body.append(header, main, footer)

// header
header.append(header_top_block, navbar)
header_top_block.append(logo, main_title)
navbar.append(menuWithoutBurger)

main.append(questionsSection, appinfo, picturesSection, projectInfo, downloadSection)

// Картинки с вопросами
// questionsSection.append(questionCard)
// questionCard.append(questionCardImg, questionCardText);


// О приложении
appinfo.append(appinfo_card, playbtn)
appinfo_card.append(appinfoTitle, appinfoImage)
playbtn.append(playbtnImage)

// Картинки


// О проекте
projectInfo.append(projectCard)
projectCard.append(projectCardTitle, projectCardText)

// Скачать
downloadSection.append(downloadCard)
downloadCard.append(downloadCardTitle, downloadCardImages, downloadCardText)
downloadCardImages.append(downloadCardImageOne, downloadCardImageTwo)

// footer
footer.append(contacts_card)
contacts_card.append(footer_main_title, footerLogos, footerContactsInfo)
footerContactsInfo.append(footerContacts, footerAdresses, footerHelp)
footerContacts.append(footerContactsTitle, footerContactsTel, footerContactsFax)
footerAdresses.append(footerAdressesTitle, footerAdressesText)
