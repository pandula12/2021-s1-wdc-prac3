var counter = 0;

function count() {
    counter++;
    document.getElementById('mcount').innerText = counter;
}

function new_post() {
    let date = new Date().toLocaleString();
    let content = document.getElementById('message').value;
    let post = document.getElementById('posts');
    
    add_post(date, content, post);
}

function add_post(date,content, post) {
    let postDate = document.createElement("p");
    let postContent = document.createElement("p");
    postDate.class = 'post-date';
    postDate.style.fontWeight = "bold";
    postDate.style.color = "grey";
    postContent.class = 'post-content';
    let textDate = document.createTextNode(date);
    let textContent = document.createTextNode(content);
    postDate.appendChild(textDate);
    postContent.appendChild(textContent);
    post.appendChild(postDate);
    post.appendChild(postContent);
}




