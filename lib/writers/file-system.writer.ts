
import { Writer } from './writer';
import * as fs from 'fs';
import { execSync } from 'child_process';

export class FileSystemWriter implements Writer {
    constructor(private readonly directory: string) { }

    write(name: string, content: string): void {
        try {

        } catch {
            exit
        }
    }

    writeAnyOf(files: { name: string, content: string }[]): void {
        for (const file of files) {
            this.write(file.name, file.content);
        }
    }

    writeFromGit(skeletonUrl: string): void {
        const script = 'echo "jeje"'
        try {
            execSync(script)
        } catch {
            exit
        }


    }


}

export const exit = () => process.exit(1);
