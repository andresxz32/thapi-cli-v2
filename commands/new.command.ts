import { Command, CommanderStatic } from 'commander';
import { AbstractCommand } from './abstract.command';
import { Input } from './command.input';

export class NewCommand extends AbstractCommand {
  public load(program: CommanderStatic) {
    program
      .command('new [name]')
      .alias('n')
      .description('Generate Thapi application.')
      .option('--directory [directory]', 'Specify the destination directory')
      .action(async (name: string, command: Command) => {

        const options: Input[] = [];

        options.push({ name: 'directory', value: command.directory });

        const inputs: Input[] = [];
        inputs.push({ name: 'name', value: name });

        await this.action.handle(inputs, options);
      });
  }
}
