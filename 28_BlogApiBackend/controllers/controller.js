const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createUser (req, res) {

  const { username, password } = req.body;


  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  try {
 
    const existingUser = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (existingUser) {
      return res.status(400).json({ error: 'Username already taken' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error creating user' });
  }
}


async function createPost (req, res) {

  const { title, content, author } = req.body;


  try {
 
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        author: {
          connect: { username: author } 
        }
      },
    });

    res.status(201).json({ message: 'Post created successfully',
                           title: title,       
     });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error creating post' });
  }
}


async function getAllPosts (req, res) {

  try {
    const posts = await prisma.post.findMany({
      include: {
        author: {
          select: {
            id: true,
            username: true,
          },
        },
        comments: {
          select: {
            id: true,
            content: true,
            author: {
              select: {
                id: true,
                username: true,
              },
            },
          },
        },
      },
    });
    res.status(200).json(posts);
  } 
  
  catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "An error occurred while fetching posts." });
  }


}

  

module.exports = {
  createUser,
  createPost,
  getAllPosts,  
  };