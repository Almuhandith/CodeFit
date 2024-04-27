import * as vscode from 'vscode';

// Define an array of ergonomics tips
const ergonomicsTips: string[] = [
	"Take regular breaks to stretch and relax your muscles.",
	"Maintain a neutral posture to reduce strain on your body.",
	"Adjust your chair and desk height to ensure proper ergonomics.",
	"Use a keyboard and mouse that promote a comfortable hand position.",
	"Position your monitor at eye level to reduce neck strain.",
];

// Function to get a random tip from the array
function getRandomTip(): string {
	const randomIndex = Math.floor(Math.random() * ergonomicsTips.length);
	return ergonomicsTips[randomIndex];
}

// Command to display a random ergonomics tip
function showErgonomicsTip() {
	const tip = getRandomTip();
	setInterval(() => {
		vscode.window.showInformationMessage(tip);
	}, 1);
}

// Command to set a reminder
async function setReminder() {
	const intervalString = await vscode.window.showInputBox({
		placeHolder: 'Enter reminder interval in minutes...'
	});
	if (intervalString) {
		const interval = parseInt(intervalString);
		if (!isNaN(interval)) {
			const minutes = interval * 60 * 1000; // Convert minutes to milliseconds
			setInterval(() => {
				vscode.window.showInformationMessage('Time to take a break! Stretch and relax.');
			}, minutes);
		} else {
			vscode.window.showErrorMessage('Invalid input. Please enter a valid number.');
		}
	}
}

// Activate function
export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "codefit" is now active!');

	// Register the command to show an ergonomics tip
	let showErgonomicsTipDisposable = vscode.commands.registerCommand('codefit.showErgonomicsTip', showErgonomicsTip);

	// Register the command to set a reminder
	let setReminderDisposable = vscode.commands.registerCommand('codefit.setReminder', setReminder);

	// Add the commands to the context subscriptions
	context.subscriptions.push(showErgonomicsTipDisposable);
	context.subscriptions.push(setReminderDisposable);

	startReminder(context);
}

// Function to start the reminder
export async function startReminder(context: vscode.ExtensionContext) {
	const interval = vscode.workspace.getConfiguration().get<number>('codefit.reminderInterval');
	if (interval) {
		setInterval(() => {
			vscode.window.showInformationMessage('Time for a break!', 'Take a Break');
		}, interval * 60 * 1000); // Convert minutes to milliseconds
	}
}

// This method is called when your extension is deactivated
export function deactivate() { }
