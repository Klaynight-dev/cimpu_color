import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.languages.registerDocumentFormattingEditProvider('pseudo-assembler', {
        provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {
            const edits: vscode.TextEdit[] = [];
            // Add formatting logic here if needed
            return edits;
        }
    });

    context.subscriptions.push(disposable);

    vscode.languages.registerCompletionItemProvider('pseudo-assembler', {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const completionItems = [
                new vscode.CompletionItem('LD', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('OUT', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('CALL', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('RET', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('HLT', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('IN', vscode.CompletionItemKind.Keyword),
                // Add more keywords as needed
            ];
            return completionItems;
        }
    });
}

export function deactivate() {}