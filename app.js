// Main Application Logic

class JavaScriptLearningApp {
    constructor() {
        this.lessons = lessonsData;
        this.currentLessonIndex = -1;
        this.completedLessons = new Set();
        this.codeEditor = null;
        this.streakTracker = null;
        
        this.init();
    }

    init() {
        this.loadProgress();
        this.initializeStreakTracker();
        this.renderLessonsNav();
        this.initializeCodeEditor();
        this.setupEventListeners();
        this.updateProgress();
        
        // Show motivation modal after a short delay
        setTimeout(() => {
            this.streakTracker.showMotivationModal();
        }, 500);
    }

    initializeStreakTracker() {
        this.streakTracker = new StreakTracker();
        this.streakTracker.updateUI();
    }

    loadProgress() {
        // Load from localStorage
        const saved = localStorage.getItem('jsLearningProgress');
        if (saved) {
            try {
                const data = JSON.parse(saved);
                this.completedLessons = new Set(data.completed || []);
                this.currentLessonIndex = data.current || -1;
            } catch (e) {
                console.error('Error loading progress:', e);
            }
        }
    }

    saveProgress() {
        const data = {
            completed: Array.from(this.completedLessons),
            current: this.currentLessonIndex
        };
        localStorage.setItem('jsLearningProgress', JSON.stringify(data));
    }

    renderLessonsNav() {
        const nav = document.getElementById('lessonsNav');
        if (!nav) return;

        let currentModule = '';
        let html = '';

        this.lessons.forEach((lesson, index) => {
            // Add module header if it's a new module
            if (lesson.module !== currentModule) {
                if (currentModule !== '') {
                    html += '</div>'; // Close previous module
                }
                currentModule = lesson.module;
                html += `
                    <div class="module">
                        <div class="module-title">${lesson.module}</div>
                `;
            }

            const isCompleted = this.completedLessons.has(lesson.id);
            const isActive = index === this.currentLessonIndex;
            const status = isCompleted ? '✓' : lesson.id;

            html += `
                <div class="lesson-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}"
                     data-lesson-index="${index}">
                    <span class="lesson-status">${status}</span>
                    <span class="lesson-title">${lesson.title}</span>
                </div>
            `;
        });

        if (currentModule !== '') {
            html += '</div>'; // Close last module
        }

        nav.innerHTML = html;

        // Add click handlers
        nav.querySelectorAll('.lesson-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.dataset.lessonIndex);
                this.loadLesson(index);
            });
        });
    }

    setupEventListeners() {
        // Navigation buttons
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.previousLesson());
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextLesson());
        }

        // Mobile menu
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const sidebar = document.getElementById('sidebar');
        const toggleSidebar = document.getElementById('toggleSidebar');

        if (mobileMenuBtn && sidebar) {
            mobileMenuBtn.addEventListener('click', () => {
                sidebar.classList.add('open');
            });
        }

        if (toggleSidebar && sidebar) {
            toggleSidebar.addEventListener('click', () => {
                sidebar.classList.remove('open');
            });
        }

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (sidebar && window.innerWidth <= 768) {
                if (!sidebar.contains(e.target) && 
                    !mobileMenuBtn.contains(e.target) && 
                    sidebar.classList.contains('open')) {
                    sidebar.classList.remove('open');
                }
            }
        });
    }

    initializeCodeEditor() {
        this.codeEditor = new CodeEditor();
    }

    loadLesson(index) {
        if (index < 0 || index >= this.lessons.length) return;

        this.currentLessonIndex = index;
        const lesson = this.lessons[index];

        // Update UI
        this.renderLessonContent(lesson);
        this.renderExercises(lesson);
        this.updateNavigationButtons();
        this.updateLessonsNav();
        this.saveProgress();

        // Show/hide sections
        document.getElementById('lessonContainer').style.display = 'block';
        this.codeEditor.show();
        document.getElementById('exerciseSection').style.display = 'block';
        document.getElementById('lessonNavigation').style.display = 'flex';

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Close mobile sidebar if open
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
            sidebar.classList.remove('open');
        }
    }

    renderLessonContent(lesson) {
        const container = document.getElementById('lessonContainer');
        if (!container) return;

        container.innerHTML = lesson.content;

        // Add click handlers for code examples
        container.querySelectorAll('pre code').forEach(codeBlock => {
            const code = codeBlock.textContent;
            
            // Add a button to try the code
            const tryButton = document.createElement('button');
            tryButton.textContent = '▶ Probaj ovaj kod';
            tryButton.className = 'btn-secondary try-code-btn';
            tryButton.style.marginTop = '0.5rem';
            tryButton.style.fontSize = '0.875rem';
            
            tryButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.codeEditor.setCode(code);
                this.codeEditor.show();
                
                // Scroll to editor smoothly
                setTimeout(() => {
                    const editorSection = document.getElementById('codeEditorSection');
                    if (editorSection) {
                        editorSection.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'start' 
                        });
                    }
                }, 100);
            });
            
            codeBlock.parentElement.appendChild(tryButton);
        });
    }

    renderExercises(lesson) {
        const exerciseSection = document.getElementById('exerciseSection');
        if (!exerciseSection || !lesson.exercises || lesson.exercises.length === 0) {
            if (exerciseSection) {
                exerciseSection.style.display = 'none';
            }
            return;
        }

        exerciseSection.style.display = 'block';

        let html = `
            <div class="exercise-header">
                <h2>🎯 Vežbe za vežbanje</h2>
                <p>Rešite sledeće zadatke da učvrstite svoje znanje</p>
            </div>
        `;

        lesson.exercises.forEach((exercise, index) => {
            const exerciseId = `exercise-${lesson.id}-${index}`;
            const savedAnswer = this.getSavedExerciseAnswer(lesson.id, index);
            const status = this.getExerciseStatus(lesson.id, index);
            
            html += `
                <div class="exercise-task" id="${exerciseId}-container">
                    <div class="exercise-task-header">
                        <h3>${exercise.title}</h3>
                        ${status ? `<span class="exercise-badge exercise-badge-${status.type}">${status.icon} ${status.text}</span>` : ''}
                    </div>
                    <p><strong>Zadatak:</strong> ${exercise.task}</p>
                    
                    <div class="exercise-answer-section">
                        <label for="${exerciseId}-input" class="exercise-label">
                            <strong>💻 Vaše rešenje:</strong>
                        </label>
                        <textarea 
                            id="${exerciseId}-input" 
                            class="exercise-input"
                            placeholder="// Unesite vaš kod ovde..."
                            rows="6">${savedAnswer || ''}</textarea>
                        
                        <div class="exercise-actions">
                            <button class="btn-primary" onclick="app.checkExercise(${lesson.id}, ${index}, '${exerciseId}')">
                                ✓ Proveri rešenje
                            </button>
                            <button class="btn-secondary" onclick="app.runExerciseCode('${exerciseId}')">
                                ▶ Pokreni kod
                            </button>
                        </div>
                        
                        <div id="${exerciseId}-feedback" class="exercise-feedback"></div>
                    </div>
                    
                    <div class="exercise-hint">
                        <button class="hint-toggle" onclick="toggleHint('${exerciseId}-hint')">
                            💡 Prikaži savet
                        </button>
                        <div id="${exerciseId}-hint" class="hint-content">
                            ${exercise.hint}
                        </div>
                    </div>

                    <div class="solution-section">
                        <button class="solution-toggle" onclick="toggleSolution('${exerciseId}-solution')">
                            👁️ Prikaži rešenje
                        </button>
                        <div id="${exerciseId}-solution" class="solution-content">
                            <pre><code>${this.escapeHtml(exercise.solution)}</code></pre>
                            <button class="btn-primary" onclick="app.loadSolutionToEditor('${this.escapeHtml(exercise.solution)}')">
                                Učitaj u editor
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });

        exerciseSection.innerHTML = html;
        
        // Add Tab support to all exercise inputs
        lesson.exercises.forEach((exercise, index) => {
            const exerciseId = `exercise-${lesson.id}-${index}`;
            const input = document.getElementById(`${exerciseId}-input`);
            
            if (input) {
                input.addEventListener('keydown', (e) => {
                    if (e.key === 'Tab') {
                        e.preventDefault();
                        const start = input.selectionStart;
                        const end = input.selectionEnd;
                        const value = input.value;
                        
                        input.value = value.substring(0, start) + '    ' + value.substring(end);
                        input.selectionStart = input.selectionEnd = start + 4;
                    }
                });
            }
        });
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    loadSolutionToEditor(solution) {
        // Decode HTML entities
        const textarea = document.createElement('textarea');
        textarea.innerHTML = solution;
        const decoded = textarea.value;
        
        this.codeEditor.setCode(decoded);
        this.codeEditor.show();
        
        // Scroll to editor
        setTimeout(() => {
            document.getElementById('codeEditorSection').scrollIntoView({ 
                behavior: 'smooth', 
                block: 'nearest' 
            });
        }, 100);
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        if (prevBtn) {
            prevBtn.disabled = this.currentLessonIndex <= 0;
        }

        if (nextBtn) {
            nextBtn.disabled = this.currentLessonIndex >= this.lessons.length - 1;
        }
    }

    updateLessonsNav() {
        const nav = document.getElementById('lessonsNav');
        if (!nav) return;

        // Remove all active classes
        nav.querySelectorAll('.lesson-item').forEach(item => {
            item.classList.remove('active');
        });

        // Add active class to current lesson
        const currentItem = nav.querySelector(`[data-lesson-index="${this.currentLessonIndex}"]`);
        if (currentItem) {
            currentItem.classList.add('active');
        }
    }

    previousLesson() {
        if (this.currentLessonIndex > 0) {
            // Mark current as completed
            if (this.currentLessonIndex >= 0) {
                const currentLesson = this.lessons[this.currentLessonIndex];
                this.completedLessons.add(currentLesson.id);
            }
            
            this.loadLesson(this.currentLessonIndex - 1);
            this.updateProgress();
        }
    }

    nextLesson() {
        if (this.currentLessonIndex < this.lessons.length - 1) {
            // Mark current as completed
            if (this.currentLessonIndex >= 0) {
                const currentLesson = this.lessons[this.currentLessonIndex];
                this.completedLessons.add(currentLesson.id);
            }
            
            this.loadLesson(this.currentLessonIndex + 1);
            this.updateProgress();
        }
    }

    markLessonComplete() {
        if (this.currentLessonIndex >= 0) {
            const lesson = this.lessons[this.currentLessonIndex];
            this.completedLessons.add(lesson.id);
            this.updateProgress();
            this.renderLessonsNav();
            this.saveProgress();
        }
    }

    updateProgress() {
        const total = this.lessons.length;
        const completed = this.completedLessons.size;
        const percentage = Math.round((completed / total) * 100);

        const progressFill = document.getElementById('progressFill');
        const progressPercentage = document.querySelector('.progress-percentage');

        if (progressFill) {
            progressFill.style.width = `${percentage}%`;
        }

        if (progressPercentage) {
            progressPercentage.textContent = `${percentage}%`;
        }

        this.renderLessonsNav();
    }

    resetProgress() {
        if (confirm('Da li ste sigurni da želite da resetujete sav progres?')) {
            this.completedLessons.clear();
            this.currentLessonIndex = -1;
            this.saveProgress();
            this.updateProgress();
            this.renderLessonsNav();
            
            // Show welcome screen
            window.location.reload();
        }
    }

    resetStreak() {
        if (confirm('Da li ste sigurni da želite da resetujete vaš streak i dostignuća?')) {
            this.streakTracker.reset();
            alert('Streak je resetovan!');
        }
    }

    getStreakStats() {
        return this.streakTracker.getStats();
    }

    // Exercise checking system
    checkExercise(lessonId, exerciseIndex, exerciseId) {
        const inputElement = document.getElementById(`${exerciseId}-input`);
        const feedbackElement = document.getElementById(`${exerciseId}-feedback`);
        
        if (!inputElement || !feedbackElement) return;

        const userAnswer = inputElement.value.trim();
        
        if (!userAnswer) {
            this.showExerciseFeedback(feedbackElement, 'warning', '⚠️ Molimo unesite vaše rešenje pre provere.');
            return;
        }

        // Find the lesson and exercise
        const lesson = this.lessons.find(l => l.id === lessonId);
        if (!lesson || !lesson.exercises[exerciseIndex]) return;

        const exercise = lesson.exercises[exerciseIndex];
        
        // Save the answer
        this.saveExerciseAnswer(lessonId, exerciseIndex, userAnswer);

        // Check the solution
        const isCorrect = this.validateExercise(userAnswer, exercise.solution);
        
        if (isCorrect) {
            this.showExerciseFeedback(
                feedbackElement, 
                'success', 
                `<strong>🎉 Tačno!</strong><br>Odličan posao! Osvojili ste <strong>10 poena</strong>! 🏆`
            );
            this.saveExerciseStatus(lessonId, exerciseIndex, 'correct');
            this.addPoints(10);
            
            // Update badge
            const badge = document.querySelector(`#${exerciseId}-container .exercise-badge`);
            if (badge) {
                badge.className = 'exercise-badge exercise-badge-success';
                badge.innerHTML = '✓ Tačno';
            } else {
                const header = document.querySelector(`#${exerciseId}-container .exercise-task-header h3`);
                if (header) {
                    header.insertAdjacentHTML('afterend', '<span class="exercise-badge exercise-badge-success">✓ Tačno</span>');
                }
            }
        } else {
            const hint = this.getExerciseHint(userAnswer, exercise.solution);
            this.showExerciseFeedback(
                feedbackElement, 
                'error', 
                `<strong>❌ Nije sasvim tačno</strong><br>${hint}`
            );
            this.saveExerciseStatus(lessonId, exerciseIndex, 'incorrect');
        }
    }

    validateExercise(userAnswer, correctAnswer) {
        // First, try to execute the user's code to check for syntax errors
        try {
            // Test if code is valid JavaScript
            new Function(userAnswer);
        } catch (syntaxError) {
            // If there's a syntax error, it's definitely wrong
            return false;
        }

        // Normalize both answers (remove extra whitespace, comments, etc.)
        const normalize = (code) => {
            return code
                .replace(/\/\/.*/g, '') // Remove single-line comments
                .replace(/\/\*[\s\S]*?\*\//g, '') // Remove multi-line comments
                .replace(/\s+/g, ' ') // Normalize whitespace
                .trim()
                .toLowerCase();
        };

        const normalizedUser = normalize(userAnswer);
        const normalizedCorrect = normalize(correctAnswer);

        // Check if they're similar enough
        if (normalizedUser === normalizedCorrect) {
            return true;
        }

        // Capture output from both code snippets
        const getUserOutput = (code) => {
            const outputs = [];
            const tempLog = console.log;
            console.log = (...args) => {
                outputs.push(args.map(arg => String(arg)).join(' '));
            };
            
            try {
                new Function(code)();
            } catch (e) {
                // Ignore execution errors for now
            }
            
            console.log = tempLog;
            return outputs;
        };

        const userOutput = getUserOutput(userAnswer);
        const correctOutput = getUserOutput(correctAnswer);

        // Compare outputs
        if (userOutput.length === correctOutput.length) {
            const outputsMatch = userOutput.every((output, index) => {
                return output === correctOutput[index];
            });
            
            if (outputsMatch) {
                return true;
            }
        }

        // Check if the key elements are present (fallback)
        const correctElements = normalizedCorrect.match(/console\.log|let|const|var|function|=>|if|for|while/g) || [];
        const userElements = normalizedUser.match(/console\.log|let|const|var|function|=>|if|for|while/g) || [];

        // If user has all key elements and similar structure
        return correctElements.length === userElements.length && 
               correctElements.every(element => userElements.includes(element));
    }

    getExerciseHint(userAnswer, correctAnswer) {
        const hints = [];
        
        // Check for syntax errors first
        try {
            new Function(userAnswer);
        } catch (syntaxError) {
            hints.push(`💡 <strong>Sintaksna greška:</strong> ${syntaxError.message}`);
            hints.push('💡 <strong>Savet:</strong> Proverite da li ste zatvorili sve zagrade i navodne znake.');
            return hints.join('<br>');
        }
        
        // Check for common mistakes
        if (userAnswer.match(/console\.log\([^)]+\)\([^)]+\)/)) {
            hints.push('💡 <strong>Hint:</strong> Svaki <code>console.log()</code> treba da bude odvojena naredba. Dodajte <code>;</code> između njih.');
            hints.push('💡 <strong>Primer:</strong> <code>console.log("tekst1");<br>console.log("tekst2");</code>');
            return hints.join('<br>');
        }
        
        if (!userAnswer.includes('console.log') && correctAnswer.includes('console.log')) {
            hints.push('💡 <strong>Hint:</strong> Koristite <code>console.log()</code> za ispis.');
        }
        
        if (!userAnswer.includes('let') && !userAnswer.includes('const') && 
            (correctAnswer.includes('let') || correctAnswer.includes('const'))) {
            hints.push('💡 <strong>Hint:</strong> Možda treba da kreirate promenljivu sa <code>let</code> ili <code>const</code>.');
        }
        
        if (!userAnswer.includes('function') && !userAnswer.includes('=>') && 
            (correctAnswer.includes('function') || correctAnswer.includes('=>'))) {
            hints.push('💡 <strong>Hint:</strong> Ovaj zadatak zahteva kreiranje funkcije.');
        }

        // Count console.log calls
        const userLogCount = (userAnswer.match(/console\.log\s*\(/g) || []).length;
        const correctLogCount = (correctAnswer.match(/console\.log\s*\(/g) || []).length;
        
        if (userLogCount < correctLogCount) {
            hints.push(`💡 <strong>Hint:</strong> Trebate napisati ${correctLogCount} <code>console.log()</code> naredbe, a vi ste napisali ${userLogCount}.`);
        }

        if (hints.length === 0) {
            hints.push('💡 <strong>Savet:</strong> Kod se izvršava, ali rezultat nije tačan. Proverite logiku i vrednosti.');
        }

        return hints.join('<br>');
    }

    showExerciseFeedback(element, type, message) {
        element.className = `exercise-feedback exercise-feedback-${type} visible`;
        element.innerHTML = message;
        
        // Scroll to feedback
        setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }

    saveExerciseAnswer(lessonId, exerciseIndex, answer) {
        const key = `exercise_${lessonId}_${exerciseIndex}`;
        localStorage.setItem(key, answer);
    }

    getSavedExerciseAnswer(lessonId, exerciseIndex) {
        const key = `exercise_${lessonId}_${exerciseIndex}`;
        return localStorage.getItem(key) || '';
    }

    saveExerciseStatus(lessonId, exerciseIndex, status) {
        const key = `exercise_status_${lessonId}_${exerciseIndex}`;
        localStorage.setItem(key, status);
    }

    getExerciseStatus(lessonId, exerciseIndex) {
        const key = `exercise_status_${lessonId}_${exerciseIndex}`;
        const status = localStorage.getItem(key);
        
        if (status === 'correct') {
            return { type: 'success', icon: '✓', text: 'Tačno' };
        } else if (status === 'incorrect') {
            return { type: 'error', icon: '✗', text: 'Pokušaj ponovo' };
        }
        return null;
    }

    runExerciseCode(exerciseId) {
        const inputElement = document.getElementById(`${exerciseId}-input`);
        const feedbackElement = document.getElementById(`${exerciseId}-feedback`);
        
        if (!inputElement) return;

        const code = inputElement.value.trim();
        
        if (!code) {
            this.showExerciseFeedback(feedbackElement, 'warning', '⚠️ Molimo unesite kod pre pokretanja.');
            return;
        }

        // Run code in the main editor
        this.codeEditor.setCode(code);
        this.codeEditor.runCode();
        this.codeEditor.show();
        
        // Scroll to editor
        setTimeout(() => {
            document.getElementById('codeEditorSection').scrollIntoView({ 
                behavior: 'smooth', 
                block: 'nearest' 
            });
        }, 100);
    }

    addPoints(points) {
        const currentPoints = parseInt(localStorage.getItem('totalPoints') || '0');
        const newPoints = currentPoints + points;
        localStorage.setItem('totalPoints', newPoints);
        
        // Show points notification
        this.showPointsNotification(points);
    }

    showPointsNotification(points) {
        const notification = document.createElement('div');
        notification.className = 'points-notification';
        notification.innerHTML = `+${points} poena! 🏆`;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }
}

// Global functions for HTML onclick handlers
function toggleHint(id) {
    const hint = document.getElementById(id);
    if (hint) {
        hint.classList.toggle('visible');
    }
}

function toggleSolution(id) {
    const solution = document.getElementById(id);
    if (solution) {
        solution.classList.toggle('visible');
    }
}

function startFirstLesson() {
    if (window.app) {
        window.app.loadLesson(0);
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new JavaScriptLearningApp();
    console.log('📚 JavaScript Learning App initialized!');
    console.log('💡 Tip: Open your browser console to see additional information');
});

