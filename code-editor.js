// Code Editor Functionality

class CodeEditor {
    constructor() {
        this.codeInput = document.getElementById('codeInput');
        this.codeOutput = document.getElementById('codeOutput');
        this.runBtn = document.getElementById('runBtn');
        this.clearBtn = document.getElementById('clearBtn');
        this.editorSection = document.getElementById('codeEditorSection');
        
        this.initializeEditor();
    }

    initializeEditor() {
        if (!this.runBtn || !this.clearBtn) return;

        this.runBtn.addEventListener('click', () => this.runCode());
        this.clearBtn.addEventListener('click', () => this.clearEditor());
        
        // Keyboard shortcut: Ctrl/Cmd + Enter to run code
        this.codeInput.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                e.preventDefault();
                this.runCode();
            }
        });

        // Tab key support
        this.codeInput.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                const start = this.codeInput.selectionStart;
                const end = this.codeInput.selectionEnd;
                const value = this.codeInput.value;
                
                this.codeInput.value = value.substring(0, start) + '    ' + value.substring(end);
                this.codeInput.selectionStart = this.codeInput.selectionEnd = start + 4;
            }
        });
    }

    show() {
        if (this.editorSection) {
            this.editorSection.style.display = 'block';
        }
    }

    hide() {
        if (this.editorSection) {
            this.editorSection.style.display = 'none';
        }
    }

    setCode(code) {
        if (this.codeInput) {
            this.codeInput.value = code;
        }
    }

    clearEditor() {
        if (this.codeInput) {
            this.codeInput.value = '';
        }
        if (this.codeOutput) {
            this.codeOutput.innerHTML = '<div class="output-placeholder">Rezultat će se prikazati ovde...</div>';
        }
    }

    runCode() {
        const code = this.codeInput.value.trim();
        
        if (!code) {
            this.displayOutput('Molimo unesite kod pre pokretanja.', 'error');
            return;
        }

        // Clear previous output
        this.codeOutput.innerHTML = '';

        // Capture console.log
        const logs = [];
        const originalLog = console.log;
        const originalError = console.error;
        const originalWarn = console.warn;

        // Override console methods
        console.log = (...args) => {
            logs.push({ type: 'log', content: args });
            originalLog.apply(console, args);
        };

        console.error = (...args) => {
            logs.push({ type: 'error', content: args });
            originalError.apply(console, args);
        };

        console.warn = (...args) => {
            logs.push({ type: 'warn', content: args });
            originalWarn.apply(console, args);
        };

        try {
            // Create a function from the code and execute it
            const func = new Function(code);
            const result = func();

            // If there's a return value and no console.log was called
            if (result !== undefined && logs.length === 0) {
                logs.push({ type: 'log', content: [result] });
            }

            // Display all captured logs
            if (logs.length === 0) {
                this.displayOutput('Kod je izvršen uspešno (bez izlaza).', 'success');
            } else {
                logs.forEach(log => {
                    const formattedContent = log.content.map(item => {
                        if (typeof item === 'object') {
                            return JSON.stringify(item, null, 2);
                        }
                        return String(item);
                    }).join(' ');

                    this.displayOutput(formattedContent, log.type);
                });
            }

        } catch (error) {
            this.displayOutput(`Greška: ${error.message}`, 'error');
            console.error('Execution error:', error);
        } finally {
            // Restore console methods
            console.log = originalLog;
            console.error = originalError;
            console.warn = originalWarn;
        }
    }

    displayOutput(message, type = 'log') {
        const outputLine = document.createElement('div');
        outputLine.className = `output-line output-${type}`;
        
        // Format the message
        const formattedMessage = this.formatMessage(message);
        outputLine.textContent = formattedMessage;
        
        this.codeOutput.appendChild(outputLine);
        
        // Scroll to bottom
        this.codeOutput.scrollTop = this.codeOutput.scrollHeight;
    }

    formatMessage(message) {
        if (typeof message === 'object') {
            try {
                return JSON.stringify(message, null, 2);
            } catch (e) {
                return String(message);
            }
        }
        return String(message);
    }

    loadExample(code) {
        this.setCode(code);
        this.show();
        this.clearOutput();
        
        // Scroll to editor
        setTimeout(() => {
            if (this.editorSection) {
                this.editorSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    }

    clearOutput() {
        if (this.codeOutput) {
            this.codeOutput.innerHTML = '<div class="output-placeholder">Rezultat će se prikazati ovde...</div>';
        }
    }
}

// Export for use in other files
window.CodeEditor = CodeEditor;

