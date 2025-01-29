import * as assert from 'assert';
import * as vscode from 'vscode';

suite('Extension Test Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');

    test('Completion Provider Test', async () => {
        const doc = await vscode.workspace.openTextDocument({ content: '' });
        await vscode.window.showTextDocument(doc);

        const position = new vscode.Position(0, 0);
        const completionList = await vscode.commands.executeCommand<vscode.CompletionList>(
            'vscode.executeCompletionItemProvider',
            doc.uri,
            position
        );

        assert.ok(completionList);
        const items = completionList.items.map((item: vscode.CompletionItem) => item.label);
		const expectedKeywords = [
			'LD', 'OUT', 'CALL', 'RET', 'HLT', 'IN', 'ADD', 'SUB', 'CMP', 'BEQ', 'BNE', 'BLT', 'BGT', 'BRA',
			'LSL', 'LSR', 'AND', 'OR', 'XOR', 'NOT', 'DB', 'DW', 'RB', 'RW', 'PUSH', 'POP', 'NOP', 'JMP',
			'JZ', 'JNZ', 'JC', 'JNC', 'JO', 'JNO', 'JS', 'JNS', 'MOV', 'ST', 'DIV', 'MUL'
		];

        expectedKeywords.forEach(keyword => {
            assert.ok(items.includes(keyword), `Missing keyword: ${keyword}`);
        });
    });
});