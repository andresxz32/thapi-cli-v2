"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exit = exports.retrieveCols = exports.NewAction = void 0;
const ui_1 = require("../lib/ui");
const abstract_action_1 = require("./abstract.action");
const child_process_1 = require("child_process");
const chalk = require("chalk");
const writers_1 = require("../lib/writers");
class NewAction extends abstract_action_1.AbstractAction {
    handle(inputs, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const directoryOption = options.find((option) => option.name === 'directory');
            yield generateApplicationFiles(inputs, options); //.catch(exit);
            printCollective();
            process.exit(0);
        });
    }
}
exports.NewAction = NewAction;
const generateApplicationFiles = (args, options) => __awaiter(void 0, void 0, void 0, function* () {
    console.info(ui_1.MESSAGES.PROJECT_INFORMATION_START);
    const fileSystemWriter = new writers_1.FileSystemWriter(process.cwd());
    yield fileSystemWriter.writeFromGit('');
    console.log('THE LOG', args, options);
    console.info();
});
const printCollective = () => {
    const dim = print('dim');
    const yellow = print('yellow');
    const emptyLine = print();
    emptyLine();
    yellow(`Thanks for installing Thapi ${ui_1.EMOJIS.PRAY}`);
    dim('Please consider donating to our open collective');
    dim('to help us maintain this package.');
    emptyLine();
    emptyLine();
    print()(`${chalk.bold(`${ui_1.EMOJIS.WINE}  Donate:`)} ${chalk.underline('https://opencollective.com/thapi')}`);
    emptyLine();
};
const print = (color = null) => (str = '') => {
    const terminalCols = (0, exports.retrieveCols)();
    const strLength = str.replace(/\u001b\[[0-9]{2}m/g, '').length;
    const leftPaddingLength = Math.floor((terminalCols - strLength) / 2);
    const leftPadding = ' '.repeat(Math.max(leftPaddingLength, 0));
    if (color) {
        str = chalk[color](str);
    }
    console.log(leftPadding, str);
};
const retrieveCols = () => {
    const defaultCols = 80;
    try {
        const terminalCols = (0, child_process_1.execSync)('tput cols', {
            stdio: ['pipe', 'pipe', 'ignore'],
        });
        return parseInt(terminalCols.toString(), 10) || defaultCols;
    }
    catch (_a) {
        return defaultCols;
    }
};
exports.retrieveCols = retrieveCols;
const exit = () => process.exit(1);
exports.exit = exit;
