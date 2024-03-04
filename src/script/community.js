import {
    createElement,
} from '../script/myblog'

const NAV_BUTTONS = [
    {
        text: 'База знань', 
        isActive: false,
    },
    {   
        text: 'Інформація',
        isActive: true,
    },
]

const COMMUNITY_INFO = {
    imgSrc: '/img/community.png',
    title: 'Що таке база знань?',
    info_text: 'База знань - база даних, що містить правила виведення та інформацію про людський досвід і знання в деякій предметній галузі. У системах, що самонавчаються, база знань також містить інформацію, що є результатом вирішення попередніх завдань.',
    button_text: "Перейти до ком'юніті у Телеграм",
}

export const createCommunity = ()=>{
    const comSection = createElement('section','community')

    const navBar = createElement('div', 'community__navBar')
    NAV_BUTTONS.forEach((buttonData)=>{
        const button = createElement(
            'button',
            buttonData.isActive
                ? 'button nav__button active'
                : 'button nav__button',
            buttonData.text,
        )
        navBar.append(button)
    })
    
    comSection.append(navBar)
   
    const comContent = createElement('div', 'community__content')
    const comImg = createElement('img')
    comImg['src'] = COMMUNITY_INFO.imgSrc
    const comTitle = createElement('h2', 'community__title', COMMUNITY_INFO.title)
    const comInfo = createElement('p', 'community__info', COMMUNITY_INFO.info_text)
    const comButton = createElement('button', 'button community__button', COMMUNITY_INFO.button_text)
    
    comContent.append(comImg, comTitle, comInfo, comButton)
    comSection.append(comContent)
    
    return comSection
}