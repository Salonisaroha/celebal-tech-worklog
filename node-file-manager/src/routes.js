async function collectRequestData(req) {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', chunk => body += chunk.toString());
        req.on('end', () => resolve(body));
        req.on('error', reject);
    });
}

const handleListFiles = async (req, res, fileManager) => {
    try {
        const result = await fileManager.listFiles();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: err.message }));
    }
};

const handleCreateFile = async (req, res, fileManager) => {
    try {
        const body = await collectRequestData(req);
        if (!body) throw new Error('Request body is empty');
        
        const { filename, content } = JSON.parse(body);
        if (!filename) throw new Error('Filename is required');
        
        const result = await fileManager.createFile(filename, content || '');
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    } catch (err) {
        const status = err.message.includes('required') ? 400 : 500;
        res.writeHead(status, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: err.message }));
    }
};

const handleReadFile = async (req, res, fileManager) => {
    try {
        const filename = req.url.split('/').pop();
        const result = await fileManager.readFile(filename);
        
        const status = result.success ? 200 : 404;
        res.writeHead(status, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: err.message }));
    }
};

const handleDeleteFile = async (req, res, fileManager) => {
    try {
        const filename = req.url.split('/').pop();
        const result = await fileManager.deleteFile(filename);
        
        const status = result.success ? 200 : 404;
        res.writeHead(status, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: err.message }));
    }
};

module.exports = {
    handleListFiles,
    handleCreateFile,
    handleReadFile,
    handleDeleteFile
};