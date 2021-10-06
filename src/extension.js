const commands = require('./config')
const vscode = require("vscode")
const { DATA_FLAG, METHOD_FLAG } = require("./symbol.js")
const { is } = require("cutil")
const { BR } = require("./util")

function activate(context) {

    Object.keys(commands).forEach((key, index) => {
        let command = commands[key]

        context.subscriptions.push(vscode.commands.registerCommand(command.name, async function () {

            const activeEditor = vscode.window.activeTextEditor;
            const start = new vscode.Position(0, 0);

            let input = ""
            if (command.needInput) input = await vscode.window.showInputBox()

            // 全部替换模板
            if (command.replaceAll === true) {
                await vscode.window.activeTextEditor.edit(async editBuilder => {
                    let currentText = editBuilder._document.getText(range)
                    currentText = `${command.template}${BR}${command.script}${BR}`
                    let end = new vscode.Position(vscode.window.activeTextEditor.document.lineCount + 1, 0);
                    let range = new vscode.Range(start, end)
                    editBuilder.replace(range, currentText)
                });
            }

            // 处理template
            if (!command.replaceAll && command.template) {
                await vscode.window.activeTextEditor.edit(async editBuilder => {

                    if (command.needInput && !input) return vscode.window.showInformationMessage('组件变量标识为空，创建失败')

                    let textData = command.template
                    if (is(command.template) === Function) textData = command.template(input)
                    editBuilder.insert(activeEditor.selection.start, textData)
                })
            }

            // 处理data
            if (!command.replaceAll && command.data) {
                await vscode.window.activeTextEditor.edit(async editBuilder => {

                    let end = new vscode.Position(vscode.window.activeTextEditor.document.lineCount + 1, 0);
                    let range = new vscode.Range(start, end)
                    let currentText = editBuilder._document.getText(range)

                    if (command.needInput && !input) return vscode.window.showInformationMessage('组件变量标识为空，创建失败')

                    let textData = command.data
                    if (is(command.data) === Function) textData = command.data(input)
                    currentText = currentText.replace(DATA_FLAG, `${textData}${BR}${DATA_FLAG}`)

                    editBuilder.replace(range, currentText)
                });
            }

            // 处理method
            if (!command.replaceAll && command.method) {
                await vscode.window.activeTextEditor.edit(async editBuilder => {

                    let end = new vscode.Position(vscode.window.activeTextEditor.document.lineCount + 1, 0);
                    let range = new vscode.Range(start, end)
                    let currentText = editBuilder._document.getText(range)

                    if (command.needInput && !input) return vscode.window.showInformationMessage('组件变量标识为空，创建失败')

                    let textMethod = command.method
                    if (is(command.method) === Function) textMethod = command.method(input)
                    currentText = currentText.replace(METHOD_FLAG, `${textMethod}${BR}${METHOD_FLAG}`)

                    editBuilder.replace(range, currentText)
                });
            }

            vscode.commands.executeCommand('editor.action.formatDocument', activeEditor.document.uri)

        }))
    })

}

function deactivate() {
    console.log('您的扩展“vscode-plugin-demo”已被释放！')
}

module.exports = {
    activate,
    deactivate
}