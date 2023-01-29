"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exit = exports.FileSystemWriter = void 0;
const child_process_1 = require("child_process");
class FileSystemWriter {
    constructor(directory) {
        this.directory = directory;
    }
    write(name) {
        throw new Error('Method not implemented.');
    }
    writeAnyOf(filenames) {
        throw new Error('Method not implemented.');
    }
    writeFromGit(skeletonUrl) {
        const script = 'echo "jeje"';
        try {
            (0, child_process_1.execSync)(script);
        }
        catch (_a) {
            exports.exit;
        }
    }
}
exports.FileSystemWriter = FileSystemWriter;
const exit = () => process.exit(1);
exports.exit = exit;
