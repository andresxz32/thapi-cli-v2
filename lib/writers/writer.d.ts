export interface Writer {
    write(name: string): string | Promise<string>;
    writeAnyOf(filenames: string[]): string | Promise<string | undefined>;
    writeFromGit(skeletonUrl: string): void;
}
