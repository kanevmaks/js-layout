import {
    createElement,
    createHeader,
    createPosts,
} from '../../script/layout'

const main = document.querySelector('.main')

const header = createHeader()

main.append(header)

const title = createElement('h1', 'title', 'Мій блог')

main.append(title)

const postSection = createPosts()

main.append(postSection)