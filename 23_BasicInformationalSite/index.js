import http from 'http';
import fs from 'fs/promises';
import path from 'path';

const PORT = 8000;

// Get directory path
const dirPath = process.cwd();

const server = http.createServer(async (req, res) => {
  try {
    
    if (req.method === 'GET') {
      let filePath;
      if (req.url === '/') {
        filePath = path.join(dirPath, 'static' ,'index.html');
  
      } else if (req.url === '/about') {
        filePath = path.join(dirPath, 'static', 'about.html');
     
      } else if (req.url === '/contact') {
        filePath = path.join(dirPath, 'static','contact-me.html');
      
      }
      else {
        throw new Error('Not Found');
      }

      const data = await fs.readFile(filePath);
      res.setHeader('Content-Type', 'text/html');
      res.write(data);
      res.end();
    } else {
      throw new Error('Method not allowed');
    }
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Server Error');
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});