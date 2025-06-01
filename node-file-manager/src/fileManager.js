const fs = require('fs').promises;
const path = require('path');

class FileManager {
    constructor(baseDir = './files') {
        this.baseDir = path.resolve(baseDir);
        this.ensureDirectoryExists();
    }

    async ensureDirectoryExists() {
        try {
            await fs.mkdir(this.baseDir, { recursive: true });
            console.log(`Directory ensured: ${this.baseDir}`);
        } catch (err) {
            if (err.code !== 'EEXIST') {
                console.error(`Directory creation error: ${err.message}`);
                throw err;
            }
        }
    }

    async createFile(filename, content = '') {
        if (!filename || typeof filename !== 'string') {
            throw new Error('Filename must be a non-empty string');
        }

        const sanitizedFilename = filename.replace(/[^a-zA-Z0-9._-]/g, '');
        const filePath = path.join(this.baseDir, sanitizedFilename);
        
        try {
            await fs.writeFile(filePath, content);
            return { 
                success: true, 
                message: `File ${sanitizedFilename} created`,
                path: filePath
            };
        } catch (err) {
            console.error(`File creation error: ${err.message}`);
            throw new Error(`Failed to create file: ${err.message}`);
        }
    }

    async readFile(filename) {
        const filePath = path.join(this.baseDir, filename);
        try {
            const content = await fs.readFile(filePath, 'utf8');
            return { success: true, content };
        } catch (err) {
            if (err.code === 'ENOENT') {
                return { success: false, message: 'File not found' };
            }
            throw err;
        }
    }

    async deleteFile(filename) {
        const filePath = path.join(this.baseDir, filename);
        try {
            await fs.unlink(filePath);
            return { success: true, message: `File deleted` };
        } catch (err) {
            if (err.code === 'ENOENT') {
                return { success: false, message: 'File not found' };
            }
            throw err;
        }
    }

    async listFiles() {
        try {
            const files = await fs.readdir(this.baseDir);
            return { success: true, files };
        } catch (err) {
            if (err.code === 'ENOENT') {
                await this.ensureDirectoryExists();
                return { success: true, files: [] };
            }
            throw err;
        }
    }
}

module.exports = FileManager;