"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
function activate(context) {
    const completionProvider = vscode.languages.registerCompletionItemProvider('pseudo-assembler', {
        provideCompletionItems(document, position) {
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
                // Add more keywords as needed
            ];
            return completionItems;
        }
    });
    context.subscriptions.push(completionProvider);
}
function deactivate() { }
