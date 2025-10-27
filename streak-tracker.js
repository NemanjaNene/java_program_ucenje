// Streak Tracker & Daily Motivation System

class StreakTracker {
    constructor() {
        this.streakData = {
            currentStreak: 0,
            longestStreak: 0,
            lastVisitDate: null,
            totalDays: 0,
            visitDates: [],
            achievements: []
        };
        
        this.achievements = [
            { id: 'first_day', name: 'Prvi korak', desc: 'Započeli ste učenje!', icon: '🎯', requirement: 1 },
            { id: 'streak_3', name: '3 dana', desc: '3 dana zaredom', icon: '🔥', requirement: 3 },
            { id: 'streak_7', name: 'Nedelja dana', desc: '7 dana zaredom', icon: '⭐', requirement: 7 },
            { id: 'streak_14', name: 'Dve nedelje', desc: '14 dana zaredom', icon: '🌟', requirement: 14 },
            { id: 'streak_30', name: 'Mesec dana', desc: '30 dana zaredom', icon: '💎', requirement: 30 },
            { id: 'comeback', name: 'Povratak', desc: 'Vratili ste se posle pauze', icon: '💪', special: true },
            { id: 'dedicated', name: 'Posvećen', desc: '10 ukupnih dana učenja', icon: '📚', requirement: 10, type: 'total' }
        ];
        
        this.motivationalMessages = {
            newUser: {
                icon: '🎉',
                title: 'Dobrodošli!',
                message: 'Počnite svoju JavaScript avantuру danas! Učite malo svaki dan za najbolje rezultate.'
            },
            sameDay: {
                icon: '👋',
                title: 'Dobrodošli nazad!',
                message: 'Super što ste opet tu! Nastavite sa lekcijama.'
            },
            continuedStreak: {
                icon: '🔥',
                title: 'Sjajan niz!',
                message: 'Držite tempo! Vaš niz raste svakim danom.'
            },
            brokenStreak: {
                icon: '😢',
                title: 'Vratili ste se!',
                message: 'Propustili ste nekoliko dana, ali to je u redu! Najvažnije je da ste se vratili. Počnimo ponovo!'
            },
            milestone: {
                icon: '🏆',
                title: 'Čestitamo!',
                message: 'Postigli ste novi mejlston!'
            }
        };
        
        this.load();
    }

    load() {
        const saved = localStorage.getItem('jsStreakData');
        if (saved) {
            try {
                this.streakData = JSON.parse(saved);
            } catch (e) {
                console.error('Error loading streak data:', e);
            }
        }
    }

    save() {
        localStorage.setItem('jsStreakData', JSON.stringify(this.streakData));
    }

    getTodayString() {
        const today = new Date();
        return today.toISOString().split('T')[0]; // YYYY-MM-DD
    }

    getYesterdayString() {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        return yesterday.toISOString().split('T')[0];
    }

    getDaysDifference(date1, date2) {
        const d1 = new Date(date1);
        const d2 = new Date(date2);
        const diffTime = Math.abs(d2 - d1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }

    checkStreak() {
        const today = this.getTodayString();
        const lastVisit = this.streakData.lastVisitDate;

        // First time visitor
        if (!lastVisit) {
            this.streakData.currentStreak = 1;
            this.streakData.longestStreak = 1;
            this.streakData.totalDays = 1;
            this.streakData.lastVisitDate = today;
            this.streakData.visitDates.push(today);
            this.unlockAchievement('first_day');
            this.save();
            return 'newUser';
        }

        // Same day visit
        if (lastVisit === today) {
            return 'sameDay';
        }

        // Consecutive day
        const yesterday = this.getYesterdayString();
        if (lastVisit === yesterday) {
            this.streakData.currentStreak++;
            this.streakData.totalDays++;
            this.streakData.lastVisitDate = today;
            this.streakData.visitDates.push(today);
            
            // Update longest streak
            if (this.streakData.currentStreak > this.streakData.longestStreak) {
                this.streakData.longestStreak = this.streakData.currentStreak;
            }
            
            // Check achievements
            this.checkAchievements();
            
            this.save();
            return 'continuedStreak';
        }

        // Broken streak
        const daysSinceLastVisit = this.getDaysDifference(lastVisit, today);
        if (daysSinceLastVisit > 1) {
            this.streakData.currentStreak = 1;
            this.streakData.totalDays++;
            this.streakData.lastVisitDate = today;
            this.streakData.visitDates.push(today);
            this.unlockAchievement('comeback');
            this.save();
            return 'brokenStreak';
        }
    }

    checkAchievements() {
        const currentStreak = this.streakData.currentStreak;
        const totalDays = this.streakData.totalDays;
        
        this.achievements.forEach(achievement => {
            if (this.streakData.achievements.includes(achievement.id)) {
                return; // Already unlocked
            }
            
            if (achievement.special) {
                return; // Special achievements unlocked manually
            }
            
            if (achievement.type === 'total') {
                if (totalDays >= achievement.requirement) {
                    this.unlockAchievement(achievement.id);
                }
            } else {
                if (currentStreak >= achievement.requirement) {
                    this.unlockAchievement(achievement.id);
                }
            }
        });
    }

    unlockAchievement(achievementId) {
        if (!this.streakData.achievements.includes(achievementId)) {
            this.streakData.achievements.push(achievementId);
            this.save();
        }
    }

    getNewAchievements(oldAchievements) {
        return this.streakData.achievements.filter(
            id => !oldAchievements.includes(id)
        );
    }

    getAchievementInfo(achievementId) {
        return this.achievements.find(a => a.id === achievementId);
    }

    showMotivationModal() {
        const oldAchievements = [...this.streakData.achievements];
        const visitType = this.checkStreak();
        
        if (visitType === 'sameDay') {
            // Don't show modal for same-day visits
            this.updateUI();
            return;
        }

        const newAchievements = this.getNewAchievements(oldAchievements);
        const modal = document.getElementById('motivationModal');
        const modalIcon = document.getElementById('modalIcon');
        const modalTitle = document.getElementById('modalTitle');
        const modalMessage = document.getElementById('modalMessage');
        const streakInfo = document.getElementById('streakInfo');
        const achievementBadges = document.getElementById('achievementBadges');
        const closeBtn = document.getElementById('closeModal');

        if (!modal) return;

        // Set content based on visit type
        const messageData = this.motivationalMessages[visitType] || this.motivationalMessages.sameDay;
        
        modalIcon.textContent = messageData.icon;
        modalTitle.textContent = messageData.title;
        modalMessage.textContent = messageData.message;

        // Streak info
        streakInfo.innerHTML = `
            <p><strong>🔥 Trenutni niz:</strong> ${this.streakData.currentStreak} ${this.getDaysLabel(this.streakData.currentStreak)}</p>
            <p><strong>🏆 Najbolji niz:</strong> ${this.streakData.longestStreak} ${this.getDaysLabel(this.streakData.longestStreak)}</p>
            <p><strong>📊 Ukupno dana:</strong> ${this.streakData.totalDays} ${this.getDaysLabel(this.streakData.totalDays)}</p>
        `;

        // Show new achievements
        if (newAchievements.length > 0) {
            let badgesHTML = '<h3 style="color: var(--accent-color); margin-bottom: 1rem;">🎉 Novi bedževi!</h3>';
            newAchievements.forEach(id => {
                const achievement = this.getAchievementInfo(id);
                if (achievement) {
                    badgesHTML += `
                        <div class="badge unlocked">
                            <div class="badge-icon">${achievement.icon}</div>
                            <div class="badge-name">${achievement.name}</div>
                            <div class="badge-desc">${achievement.desc}</div>
                        </div>
                    `;
                }
            });
            achievementBadges.innerHTML = badgesHTML;
        } else {
            achievementBadges.innerHTML = '';
        }

        // Show modal
        modal.classList.add('show');

        // Close handler
        const closeModal = () => {
            modal.classList.remove('show');
        };

        closeBtn.onclick = closeModal;
        
        // Close on background click
        modal.onclick = (e) => {
            if (e.target === modal) {
                closeModal();
            }
        };

        this.updateUI();
    }

    getDaysLabel(count) {
        if (count === 1) return 'dan';
        if (count >= 2 && count <= 4) return 'dana';
        return 'dana';
    }

    updateUI() {
        // Update streak display in header
        const streakNumber = document.getElementById('streakNumber');
        if (streakNumber) {
            streakNumber.textContent = this.streakData.currentStreak;
        }

        // Update stats on welcome page
        const totalDaysEl = document.getElementById('totalDays');
        const currentStreakEl = document.getElementById('currentStreak');
        const bestStreakEl = document.getElementById('bestStreak');
        const lastVisitEl = document.getElementById('lastVisit');

        if (totalDaysEl) totalDaysEl.textContent = this.streakData.totalDays;
        if (currentStreakEl) currentStreakEl.textContent = this.streakData.currentStreak;
        if (bestStreakEl) bestStreakEl.textContent = this.streakData.longestStreak;
        if (lastVisitEl) {
            if (this.streakData.lastVisitDate) {
                const date = new Date(this.streakData.lastVisitDate);
                const formattedDate = date.toLocaleDateString('sr-RS', { 
                    day: 'numeric', 
                    month: 'long',
                    year: 'numeric'
                });
                lastVisitEl.textContent = formattedDate;
            } else {
                lastVisitEl.textContent = 'Nikad';
            }
        }
    }

    getStats() {
        return {
            currentStreak: this.streakData.currentStreak,
            longestStreak: this.streakData.longestStreak,
            totalDays: this.streakData.totalDays,
            lastVisit: this.streakData.lastVisitDate,
            achievements: this.streakData.achievements
        };
    }

    reset() {
        this.streakData = {
            currentStreak: 0,
            longestStreak: 0,
            lastVisitDate: null,
            totalDays: 0,
            visitDates: [],
            achievements: []
        };
        this.save();
        this.updateUI();
    }
}

// Export
window.StreakTracker = StreakTracker;

