// import * as assert from 'assert';
// import * as vscode from 'vscode';
// import { activate, startReminder } from '../extension';
// import * as sinon from 'sinon';

// suite('Extension Tests', () => {
// 	vscode.window.showInformationMessage('Start all tests.');

// 	let mockContext: vscode.ExtensionContext;

// 	setup(() => {
// 		mockContext = {
// 			subscriptions: [],
// 			extensionPath: 'path/to/extension',
// 			workspaceState: {} as vscode.Memento,
// 			globalState: {} as vscode.Memento,
// 			secrets: {} as vscode.SecretStorage,
// 			extensionUri: vscode.Uri.parse('fake:uri'),
// 		} as unknown as vscode.ExtensionContext;

// 		activate(mockContext);
// 	});

// 	test('Set Reminder Command', async () => {
// 		await activate(mockContext);

// 		const mockInputBox = sinon.stub(vscode.window, 'showInputBox');
// 		mockInputBox.resolves('30'); // Simulate user input of 30 minutes


// 		const mockShowInfoMessage = sinon.stub(vscode.window, 'showInformationMessage');

// 		await vscode.commands.executeCommand('codefit.setReminder');

// 		assert.strictEqual(mockInputBox.calledOnce, true, 'showInputBox should be called once');
// 		assert.strictEqual(mockShowInfoMessage.calledOnce, true, 'showInformationMessage should be called once');

// 		mockInputBox.restore();
// 		mockShowInfoMessage.restore();
// 	});

// 	test('Start Reminder', async () => {
// 		const mockInterval = 10; // Reminder interval in minutes
// 		const mockConfiguration = {
// 			get: sinon.stub().returns(mockInterval)
// 		};
// 		const mockWorkspace = {
// 			getConfiguration: sinon.stub().returns(mockConfiguration)
// 		};

// 		const mockShowInfoMessage = sinon.stub(vscode.window, 'showInformationMessage');

// 		await startReminder(mockWorkspace as any);

// 		assert.strictEqual(mockShowInfoMessage.calledOnce, true, 'showInformationMessage should be called once');

// 		mockShowInfoMessage.restore();
// 	});
// });
