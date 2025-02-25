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

    const completionProvider = vscode.languages.registerCompletionItemProvider('pseudo-assembler', {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const completionItems = [
                new vscode.CompletionItem('LD', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('OUT', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('CALL', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('RET', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('HLT', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('IN', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('ADD', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('SUB', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('CMP', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('BEQ', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('BNE', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('BLT', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('BGT', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('BRA', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('LSL', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('LSR', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('AND', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('OR', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('XOR', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('NOT', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('DB', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('DW', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('RB', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('RW', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('PUSH', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('POP', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('NOP', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('JMP', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('JZ', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('JNZ', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('JC', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('JNC', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('JO', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('JNO', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('JS', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('JNS', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('DEC', vscode.CompletionItemKind.Keyword), 
                new vscode.CompletionItem('INC', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('NEG', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('MUL', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('DIV', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('ROL', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('ROR', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('SHL', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('SHR', vscode.CompletionItemKind.Keyword),
                
                // Add more keywords as needed
            ];
            return completionItems;
        }
    });

    context.subscriptions.push(completionProvider);
}

export function deactivate() {}
