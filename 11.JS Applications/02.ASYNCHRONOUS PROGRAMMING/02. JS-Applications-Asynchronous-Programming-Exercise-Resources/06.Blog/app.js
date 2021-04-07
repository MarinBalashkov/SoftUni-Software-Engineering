function attachEvents() {
    const loadBtn = document.querySelector('#btnLoadPosts');
    const viewBtn = document.querySelector('#btnViewPost');
    const h1PostTitleElement = document.querySelector('#post-title');
    const ulPostBodyElement = document.querySelector('#post-body');
    const ulPostCommentsElement = document.querySelector('#post-comments');

    loadBtn.addEventListener('click', addPostsOtions);
    viewBtn.addEventListener('click', addComments);






}

attachEvents();

async function addPostsOtions(){
    const selectElement = document.querySelector('#posts');

    if (selectElement.children.length != 0) {
        return;
    }
    
    const posts = await getPosts();
    Object.entries(posts).forEach(([k, v]) => {
        const option = document.createElement('option');
        option.setAttribute('value', `${k}`);
        option.textContent = v.title;
        selectElement.appendChild(option);
    })

}

async function addComments(){
    const postId = document.querySelector('#posts').value;
    const h1PostTitleElement = document.querySelector('#post-title');
    const ulPostBodyElement = document.querySelector('#post-body');
    const ulPostCommentsElement = document.querySelector('#post-comments');

    const [postData, commentsData] = await Promise.all([
        getSelectedPost(postId), 
        getComments()
    ])

    h1PostTitleElement.textContent = postData.title;
    ulPostBodyElement.textContent = postData.body;
    const comments = Object.values(commentsData).filter(c => c.postId == postId);
    comments.map(createComment).forEach(c => ulPostCommentsElement.appendChild(c));

}

function createComment(comment) {
    const result = document.createElement('li');
    result.textContent = comment.text;
    result.id = comment.id;
    return result;
}

async function getPosts(){
    const url = `http://localhost:3030/jsonstore/blog/posts`;
    const response = await fetch(url);
    if (response.ok == false) {
        throw new Error('Something went wrong please check your URl !');
    }
     
    return response.json();
}

async function getComments(){
    const url = `http://localhost:3030/jsonstore/blog/comments`;
    const response = await fetch(url);
    if (response.ok == false) {
        throw new Error('Something went wrong please check your URl !');
    }

    return response.json();
}

async function getSelectedPost(postId){
    const url = `http://localhost:3030/jsonstore/blog/posts/` + postId;
    const response = await fetch(url);
    if (response.ok == false) {
        throw new Error('Something went wrong please check your URl !');
    }

    return response.json();
}

