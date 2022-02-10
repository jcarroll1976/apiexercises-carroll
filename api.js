fetch("https://www.reddit.com/r/aww/.json")
.then(response => response.json())
.then(data => {
    for(let child of data.data.children) {
        let postsDiv = document.createElement("div");
        let postTitle = document.createElement("h2");
        postTitle.innerText = child.data.title;
        let newPostImage = document.createElement("p");
        newPostImage.innerHTML = child.data.thumbnail;
        let newLink = document.createElement("p");
        newLink.innerHTML = child.data.url;
        postsDiv.append(postTitle);
        postsDiv.append(newPostImage);
        postsDiv.append(newLink);
        document.body.append(postsDiv);
    }
})
