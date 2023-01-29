export interface Writer {
  write(name: string, content: string): void;
  writeAnyOf(files: { name: string, content: string }[]): void;
  writeFromGit(skeletonUrl: string): void;
}
