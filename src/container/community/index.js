import {
createElement,
createHeader,
} from '../../script/myblog'

import { createCommunity } from '../../script/homework'

const main = document.querySelector('.main')

const header = createHeader()

main.append(header)

const title = createElement('h1', 'title', "Ком'юніті")

main.append(title)

const communitySection = createCommunity()

main.append(communitySection)