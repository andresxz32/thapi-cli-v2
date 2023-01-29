import { Writer } from './writer';
export declare class FileSystemWriter implements Writer {
    private readonly directory;
    constructor(directory: string);
    write(name: string): string | Promise<string>;
    writeAnyOf(filenames: string[]): string | Promise<string | undefined>;
    writeFromGit(skeletonUrl: string): void;
}
export declare const exit: () => never;
