import { Input } from '../commands';
import { EMOJIS, MESSAGES } from '../lib/ui';
import { AbstractAction } from './abstract.action';
import { execSync } from 'child_process';
import * as chalk from 'chalk';
import { FileSystemWriter } from '../lib/writers';

export class NewAction extends AbstractAction {
  public async handle(inputs: Input[], options: Input[]) {
    const directoryOption = options.find(
      (option) => option.name === 'directory',
    );

    await generateApplicationFiles(inputs, options)//.catch(exit);

    printCollective();

    process.exit(0);
  }
}

const generateApplicationFiles = async (args: Input[], options: Input[]) => {
  console.info(MESSAGES.PROJECT_INFORMATION_START);
  const fileSystemWriter = new FileSystemWriter(process.cwd());
  await fileSystemWriter.writeFromGit('')
  console.log('THE LOG', args, options)
};

const printCollective = () => {
  const dim = print('dim');
  const yellow = print('yellow');
  const emptyLine = print();

  emptyLine();
  yellow(`Thanks for installing Thapi ${EMOJIS.PRAY}`);
  dim('Please consider donating to our open collective');
  dim('to help us maintain this package.');
  emptyLine();
  emptyLine();
  print()(
    `${chalk.bold(`${EMOJIS.WINE}  Donate:`)} ${chalk.underline(
      'https://opencollective.com/thapi',
    )}`,
  );
  emptyLine();
};

const print = (color: string | null = null) =>
  (str = '') => {
    const terminalCols = retrieveCols();
    const strLength = str.replace(/\u001b\[[0-9]{2}m/g, '').length;
    const leftPaddingLength = Math.floor((terminalCols - strLength) / 2);
    const leftPadding = ' '.repeat(Math.max(leftPaddingLength, 0));
    if (color) {
      str = (chalk as any)[color](str);
    }
    console.log(leftPadding, str);
  };

export const retrieveCols = () => {
  const defaultCols = 80;
  try {
    const terminalCols = execSync('tput cols', {
      stdio: ['pipe', 'pipe', 'ignore'],
    });
    return parseInt(terminalCols.toString(), 10) || defaultCols;
  } catch {
    return defaultCols;
  }
};



export const exit = () => process.exit(1);
