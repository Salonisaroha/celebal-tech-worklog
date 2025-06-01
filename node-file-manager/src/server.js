const http = require('http');
const path = require('path');
const fs = require('fs').promises;
const url = require('url');
const FileManager = require('./fileManager');
const routes = require('./routes');

const PORT = process.env.PORT || 3000;
const fileManager = new FileManager();

const server = http.createServer(async (req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const method = req.method;

    
    // Serve static files
if (pathname.startsWith('/public/')) {
    try {
        
        const filePath = path.join(__dirname, '..', 'public', pathname.replace('/public/', ''));
        const data = await fs.readFile(filePath);
        const ext = path.extname(filePath).substring(1);
        const contentType = {
            'html': 'text/html',
            'css': 'text/css',
            'js': 'text/javascript'
        }[ext] || 'text/plain';

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    } catch (err) {
        console.error('Static file error:', err);
        res.writeHead(404);
        res.end('File Not Found');
    }
    return;
}
    
    try {
        if (pathname === '/api/files' && method === 'GET') {
            await routes.handleListFiles(req, res, fileManager);
        } else if (pathname === '/api/files' && method === 'POST') {
            await routes.handleCreateFile(req, res, fileManager);
        } else if (pathname.startsWith('/api/files/') && method === 'GET') {
            await routes.handleReadFile(req, res, fileManager);
        } else if (pathname.startsWith('/api/files/') && method === 'DELETE') {
            await routes.handleDeleteFile(req, res, fileManager);
        } else if (pathname === '/' || pathname === '/index.html') {
            const data = await fs.readFile(path.join(__dirname, '../', 'public', 'index.html'));
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        } else {
            res.writeHead(404);
            res.end('Not Found');
        }
    } catch (err) {
        console.error('Server error:', err);
        res.writeHead(500);
        res.end('Internal Server Error');
    }
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});