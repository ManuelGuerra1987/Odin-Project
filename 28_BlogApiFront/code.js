const mainContainer = document.getElementById("main-container");

// Factory function to create post item
function createPost(title, content, id) {
    const postDiv = document.createElement('div');
    postDiv.className = 'post-container';
    postDiv.setAttribute('data-post-id', id);

    const titleElement = document.createElement("p");
    titleElement.textContent = title;
    titleElement.style.fontSize = "35px";
    postDiv.appendChild(titleElement);

    const contentElement = document.createElement("p");
    contentElement.textContent = content;
    postDiv.appendChild(contentElement);

       
    const linkSeePostElement = document.createElement('a');
    linkSeePostElement.href = '#';
    linkSeePostElement.textContent = 'See Post';
    
        
    linkSeePostElement.addEventListener('click', function(event) {
        event.preventDefault();
        getPost(id); 
    });
    
    postDiv.appendChild(linkSeePostElement);

    const linkDelPostElement = document.createElement('a');
    linkDelPostElement.href = '#';
    linkDelPostElement.textContent = 'Delete Post';
    
        
    linkDelPostElement.addEventListener('click', function(event) {
        event.preventDefault();
        delPost(id); 
    });
    
    postDiv.appendChild(linkDelPostElement);

    return postDiv;
}

async function getPosts(){

    // Title
    const title = document.createElement("h1");
    title.textContent = "All posts";        
    mainContainer.appendChild(title);

    //Posts container
    const postsDiv = document.createElement('div'); 
    postsDiv.className = 'posts-container'; 

    const response = await fetch("http://localhost:3000/api/blog/posts");
    const data = await response.json();

    data.forEach(post => {
        const postItem = createPost(post.title, post.content, post.id);
        postsDiv.appendChild(postItem);
    });

    mainContainer.appendChild(postsDiv);   

}



function getSignForm(){

    // Title
    const title = document.createElement("h1");
    title.textContent = "Sign up";        
    mainContainer.appendChild(title);

    //Form
    const formContainer = document.createElement('div');

    formContainer.innerHTML = `
    <form id="signupForm">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required><br><br>

        <label for="password">Password</label>
        <input type="password" id="password" name="password" required><br><br>

        <button type="submit">Sign up</button>
    </form>
    `;

    mainContainer.appendChild(formContainer); 

    const form = document.getElementById('signupForm');

    form.addEventListener('submit', async function(event) {
        event.preventDefault(); 
  
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
  
        try {
          
          const response = await fetch('http://localhost:3000/api/blog/users/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          });
  
          const data = await response.json();
  
          
          if (response.ok) {
            console.log(data);
          } 
  
        } catch (error) {
            console.log(error);
        }
      });

     

}


function getCreatePostForm(){

    // Title
    const title = document.createElement("h1");
    title.textContent = "Create post";        
    mainContainer.appendChild(title);

    //Form
    const formContainer = document.createElement('div');

    formContainer.innerHTML = `
    <form id="createPost">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" required><br><br>

        <textarea name="content" id="content" rows="8" cols="40" placeholder="Content"></textarea><br><br>

        <label for="author">Author</label>
        <input type="text" id="author" name="author" required><br><br>

        <button type="submit">Submit</button>
    </form>
    `;

    mainContainer.appendChild(formContainer); 

    const form = document.getElementById('createPost');

    form.addEventListener('submit', async function(event) {
        event.preventDefault(); 
  
        
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const author = document.getElementById('author').value;
  
        try {
          
          const response = await fetch('http://localhost:3000/api/blog/posts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content, author }),
          });
  
          const data = await response.json();
  
          
          if (response.ok) {
            console.log(data);
          } 
  
        } catch (error) {
            console.log(error);
        }
      });

    

}

async function delPost(id){

  try{

  const response = await fetch(`http://localhost:3000/api/blog/posts/${id}`, {
            
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
    },
    });

    const data = await response.json();

    if (response.ok) {
      
      console.log(data);
    }
  }
  catch (error) {
    console.log(error);
}

mainContainer.innerHTML = "";
getPosts();

}


async function getPost(id){

    mainContainer.innerHTML = "";

    const response = await fetch(`http://localhost:3000/api/blog/posts/${id}`);
    const data = await response.json();

    // Title
    const titleElement = document.createElement("h1");
    titleElement.textContent = data.title;      
    mainContainer.appendChild(titleElement);
    
    //Content
    const contentElement = document.createElement("p");
    contentElement.textContent = data.content; 
    mainContainer.appendChild(contentElement); 

    //Comments
    const commentsDiv = document.createElement('div');

    const titleCommentsElement = document.createElement("h2");
    titleCommentsElement.textContent = "Comments";      
    commentsDiv.appendChild(titleCommentsElement);

    const comments = data.comments;

    comments.forEach(comment => {
      const commentItem = document.createElement("p");
      commentItem.textContent = comment.content;
      commentsDiv.appendChild(commentItem);
  });

  mainContainer.appendChild(commentsDiv);

  //Add comment
  const titleAddCommentsElement = document.createElement("h3");
  titleAddCommentsElement.textContent = "Add comment";      
  mainContainer.appendChild(titleAddCommentsElement);

  const addCommentDiv = document.createElement('div');

  addCommentDiv.innerHTML = `
  <form id="addPost">

    <textarea name="content" id="content" rows="8" cols="40" placeholder="Content"></textarea><br><br>

    <label for="author">Author</label>
    <input type="text" id="author" name="author" required><br><br>

    <button type="submit">Submit</button>
  </form>
  `;

  mainContainer.appendChild(addCommentDiv);

  const addCommenForm = document.getElementById('addPost');

  addCommenForm.addEventListener('submit', async function(event) {
    event.preventDefault(); 

    const content = document.getElementById('content').value;
    const author = document.getElementById('author').value;

    try {

      const response = await fetch(`http://localhost:3000/api/blog/posts/${id}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content, author }),
      });

      const data = await response.json();

 
      if (response.ok) {
  
        console.log(data);
      } 

    } catch (error) {
      console.log(error);
    }
  });

  
}


getPosts()

//Home button
const homeButton = document.querySelector("#homeBtn");

homeButton.addEventListener('click', function(){

    const mainContainer = document.getElementById("main-container");
    mainContainer.innerHTML = "";

    getPosts();

});


//Sign up button
const signButton = document.querySelector("#signBtn");

signButton.addEventListener('click', function(){

    const mainContainer = document.getElementById("main-container");
    mainContainer.innerHTML = "";

    getSignForm();

});

//Create post button
const createPostButton = document.querySelector("#createPostBtn");

createPostButton.addEventListener('click', function(){

    const mainContainer = document.getElementById("main-container");
    mainContainer.innerHTML = "";

    getCreatePostForm();

});