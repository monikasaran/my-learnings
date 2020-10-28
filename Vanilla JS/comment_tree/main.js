var comments = [
    {
        id: '1',
        text: 'How was your day?',
        likes: 0,
        reply: [
            {
                id: '1.1',
                text: 'I am fine',
                likes: 0,
                reply: [
                    {
                        id: '1.1.1',
                        text: 'Give me your number',
                        likes: 0,
                        reply: []
                    }
                ]
            }, {
                id: '1.2',
                text: 'Thanks for asking',
                likes: 0,
                reply: []
            }
        ]
    }, {
        id: '2',
        text: 'Where are you?',
        likes: 0,
        reply: [
            {
                id: '2.1',
                text: 'I am fine',
                likes: 0,
                reply: [
                    {
                        id: '2.1.1',
                        text: 'Give me your number',
                        likes: 0,
                        reply: []
                    }
                ]
            }
        ]
    }
]

function main() {
    let root = document.getElementById('root')

    if(document.getElementById('posts'))
        root.removeChild(document.getElementById('posts'))

    let posts = document.createElement('div')
    posts.id = 'posts'
    root.appendChild(posts)

    let newPost = document.createElement('div')
    newPost.classList.add('postComment')

    let newPostElement = document.createElement('textarea')
    newPostElement.placeholder = "Write your post here..."
    let postButton = document.createElement('button')
    postButton.classList.add('postButton')
    postButton.innerText = 'Post'
    postButton.addEventListener('click',addNewPost)
    newPost.appendChild(newPostElement)
    newPost.appendChild(postButton)

    posts.appendChild(newPost)

    comments.map(comment => {
        let child = renderComment(comment)
        posts.appendChild(child)
    })

}

function traverse(target, action, text=null) {
    let feedArray = comments
    let levels = target.split('.')
    levels = levels.map(x => parseInt(x))
    for(let i=0; i<levels.length; i++){
        let next = feedArray[levels[i]-1]
        if(next.id === target) {
            if(action === 'like'){
                next.likes = ++next.likes
            } else {
                let newReply = {
                    id: `${next.id}.${next.reply.length+1}`,
                    text,
                    likes: 0,
                    reply: []
                }
                next.reply.push(newReply)
            }
        } else {
            feedArray = next.reply
        }
    }
    main()
}

function renderComment ({id, text, likes, reply}) {
    let commentNode = document.createElement('div')
    commentNode.classList.add('comment')

    let idElement = document.createElement('div')
    idElement.classList.add('userId')
    idElement.id = `userId-${id}`
    idElement.innerText = `User: ${id}`

    let textElement = document.createElement('div')
    textElement.classList.add('commentText')
    textElement.id = `commentText-${id} `
    textElement.innerText = text

    let likesElement = document.createElement('button')
    likesElement.classList.add('likes')
    likesElement.id = `likes-${id}`
    likesElement.innerText = `${likes} Likes`
    likesElement.addEventListener('click', (e) => onClickLikes(e, id))

    let replyElement = document.createElement('button')
    replyElement.classList.add('reply')
    replyElement.id = `reply-${id}`
    replyElement.innerText = 'Reply'
    replyElement.addEventListener('click', (e) => onClickReply(e, id))

    commentNode.appendChild(idElement)
    commentNode.appendChild(textElement)
    commentNode.appendChild(likesElement)
    commentNode.appendChild(replyElement)
    if(reply.length) {
        reply.map(comment => {
            let replyNode = renderComment(comment)
            commentNode.appendChild(replyNode)
        })
    }
    return commentNode
}

function addNewPost (e) {
    const textAreaEl = document.querySelector('textarea')
    let text = textAreaEl.value
    if(text.length) {
        let id = comments.length+1
        let post = {
            id: `${id}`,
            text,
            likes: 0,
            reply: []
        }
        comments.push(post)
        main()
    } else {
        alert('Cannot Post Empty status!')
    }
    
}

function onClickLikes (e, id) {
    traverse(id, 'like')
}

function removeOpenReply() {
    let existingReply = document.getElementById('comment-reply')
    if(existingReply) {
        let parent = existingReply.parentNode
        let reply = parent.querySelector('.reply')
        reply.style.display = 'inline'
        parent.removeChild(existingReply)
    }
}

function onClickReply({target}, id) {
    target.style.display = 'none'
    removeOpenReply()
    let parent = target.parentElement

    let replyCommentEl = document.createElement('div')
    replyCommentEl.id = 'comment-reply'

    let inputEl = document.createElement('input')
    inputEl.id = 'reply-input'
    inputEl.type = 'text'
    inputEl.placeholder = 'Write here...'

    let postEl = document.createElement('button')
    postEl.classList.add('replyPost')
    postEl.innerText='Reply'
    postEl.addEventListener('click', () => onPostReply(id))

    let cancelEl = document.createElement('button')
    cancelEl.classList.add('replyCancel')
    cancelEl.innerText = 'Cancel'
    cancelEl.addEventListener('click', removeOpenReply)

    replyCommentEl.appendChild(inputEl)
    replyCommentEl.appendChild(postEl)
    replyCommentEl.appendChild(cancelEl)
    parent.appendChild(replyCommentEl)

}

function onPostReply (id) {
    let inputEl = document.getElementById('reply-input')
    let text = inputEl.value
    if(text.length) {
        traverse(id, 'reply', text)
        removeOpenReply()
    }
    else
        alert('Reply should not be empty')
}

main()