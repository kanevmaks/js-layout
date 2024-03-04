export const createElement = (tag, className, text) => {
	const elem = document.createElement(tag)

	if (className) {
		elem.className = className
	}

	if (text) {
		elem.innerHTML = text
	}

	return elem
}

const HEADER_BUTTON_LIST = [
	{
		width: 24,
		height: 24,
		src: "/svg/arrow-back.svg",
	},
	{
		width: 24,
		height: 24,
		src: "/img/avatar.png",
	},
]

export const createHeader = ()=>{
    const header = createElement('header','header')

    HEADER_BUTTON_LIST.forEach((params)=>{
        const button = createElement('button','button')
        const img = createElement('img')
        Object.entries(params).forEach(([key,value])=>{
            img[key] = value
        })
        button.append(img)
        header.append(button)
    })
return header
}

const POSTS = [
    {
        category: [
            {text: 'Важливо', type: 'cat_impotant'},
            {text: 'Нова', type: 'cat_new'},
        ],
        date: '25.01',
        post_text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ad iusto sunt, nam necessitatibus labore voluptatum iure voluptates ex, omnis fuga quos dicta dolore vitae itaque nihil, voluptas explicabo. Possimus!',
        viewed: false,
    },
    {
        category: [
            {text: 'Важливо', type: 'cat_impotant'},
            {text: 'Нова', type: 'cat_new'},
        ],
        date: '25.01',
        post_text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ad iusto sunt, nam necessitatibus labore voluptatum iure voluptates ex, omnis fuga quos dicta dolore vitae itaque nihil, voluptas explicabo. Possimus!',
        viewed: true,
    },
    {
        category: [
            {text: 'Важливо', type: 'cat_impotant'},
            {text: 'Нова', type: 'cat_new'},
        ],
        date: '25.01',
        post_text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ad iusto sunt, nam necessitatibus labore voluptatum iure voluptates ex, omnis fuga quos dicta dolore vitae itaque nihil, voluptas explicabo. Possimus!',
        viewed: false,
    },
]

export const createPosts = ()=>{
    const postSection = createElement('section','posts')

    POSTS.forEach((postData)=>{
        const post = createElement(
            'div',
            postData.viewed
                ? 'post button post--viewed'
                : 'post button',
        )

        const postHeader = createElement('div', 'post__header')
        const postCategorys = createElement('div', 'categorys')
        const dateSpan = ('span','date',postData.date)

        postData.category.forEach((category)=>{
            const catSpan = createElement(
                'span',
                `category ${category.type}`,
                category.text
            )
            postCategorys.append(catSpan)
        })

        postHeader.append(postCategorys, dateSpan)
        const postBody = createElement('div', 'post__body', postData.post_text)

        post.append(postHeader,postBody)
        postSection.append(post)
        
    })
    return postSection
}