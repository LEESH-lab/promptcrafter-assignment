document.addEventListener('DOMContentLoaded', () => {
    // --- Navigation ---
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.page-section');
    const startBtn = document.getElementById('start-btn');

    function switchSection(targetId) {
        // Update nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.target === targetId) {
                link.classList.add('active');
            }
        });

        // Update sections
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === targetId) {
                section.classList.add('active');
            }
        });
        
        if (targetId === 'library') {
            renderLibrary();
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            switchSection(e.target.dataset.target);
        });
    });

    startBtn.addEventListener('click', () => switchSection('builder'));


    // --- Prompt Builder Logic ---
    const roleInput = document.getElementById('role');
    const taskInput = document.getElementById('task');
    const toneInput = document.getElementById('tone');
    const formatInput = document.getElementById('format');
    const resultPrompt = document.getElementById('result-prompt');

    function generatePrompt() {
        const role = roleInput.value;
        const task = taskInput.value || "[여기에 작업 입력]";
        const tone = toneInput.value;
        const format = formatInput.value;

        const promptText = `당신은 훌륭한 ${role}입니다. 다음 지시사항에 따라 작업을 수행해 주세요.
        
[작업 내용]
${task}

[요구사항]
- 어조: ${tone}
- 출력 형식: ${format}

답변은 사용자가 바로 활용할 수 있도록 완성도 높게 작성해 주세요.`;

        resultPrompt.value = promptText;
    }

    // Event listeners for real-time update
    [roleInput, taskInput, toneInput, formatInput].forEach(input => {
        input.addEventListener('input', generatePrompt);
        input.addEventListener('change', generatePrompt); // For select elements
    });

    // Initial generation
    generatePrompt();


    // --- Copy and Save Actions ---
    const copyBtn = document.getElementById('copy-btn');
    const saveBtn = document.getElementById('save-btn');

    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(resultPrompt.value).then(() => {
            const originalText = copyBtn.innerText;
            copyBtn.innerText = "✅ 복사 완료!";
            setTimeout(() => {
                copyBtn.innerText = originalText;
            }, 2000);
        });
    });

    saveBtn.addEventListener('click', () => {
        const task = taskInput.value || "제목 없는 프롬프트";
        const content = resultPrompt.value;
        
        if (!content.trim()) return;

        const newItem = {
            id: Date.now(),
            task: task,
            content: content,
            date: new Date().toLocaleDateString()
        };

        let savedPrompts = JSON.parse(localStorage.getItem('promptCrafterLibrary')) || [];
        savedPrompts.unshift(newItem); // Add to beginning
        localStorage.setItem('promptCrafterLibrary', JSON.stringify(savedPrompts));

        const originalText = saveBtn.innerText;
        saveBtn.innerText = "✅ 저장됨!";
        setTimeout(() => {
            saveBtn.innerText = originalText;
            switchSection('library');
        }, 1000);
    });


    // --- Library Rendering ---
    const libraryList = document.getElementById('library-list');

    function renderLibrary() {
        let savedPrompts = JSON.parse(localStorage.getItem('promptCrafterLibrary')) || [];
        
        if (savedPrompts.length === 0) {
            libraryList.innerHTML = `<p style="color: var(--text-secondary); grid-column: 1/-1; text-align: center; padding: 2rem;">저장된 프롬프트가 없습니다.</p>`;
            return;
        }

        libraryList.innerHTML = '';
        savedPrompts.forEach(item => {
            const card = document.createElement('div');
            card.className = 'prompt-card';
            
            card.innerHTML = `
                <div class="task-title">${item.task}</div>
                <div style="font-size: 0.8rem; color: var(--text-secondary)">${item.date}</div>
                <div class="prompt-text">${item.content}</div>
                <div class="card-actions">
                    <button class="btn-secondary btn-small copy-item-btn" data-content="${item.content.replace(/"/g, '&quot;')}">복사</button>
                    <button class="btn-secondary btn-small delete-item-btn" data-id="${item.id}" style="border-color: rgba(239, 68, 68, 0.5); color: #ef4444;">삭제</button>
                </div>
            `;
            
            libraryList.appendChild(card);
        });

        // Add event listeners to dynamically created buttons
        document.querySelectorAll('.copy-item-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const content = e.target.dataset.content;
                navigator.clipboard.writeText(content).then(() => {
                    const orig = e.target.innerText;
                    e.target.innerText = "완료!";
                    setTimeout(() => e.target.innerText = orig, 1500);
                });
            });
        });

        document.querySelectorAll('.delete-item-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                let savedPrompts = JSON.parse(localStorage.getItem('promptCrafterLibrary')) || [];
                savedPrompts = savedPrompts.filter(item => item.id !== id);
                localStorage.setItem('promptCrafterLibrary', JSON.stringify(savedPrompts));
                renderLibrary(); // Re-render
            });
        });
    }
});
