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
    const frameworkInput = document.getElementById('framework');
    const roleInput = document.getElementById('role');
    const taskInput = document.getElementById('task');
    const toneInput = document.getElementById('tone');
    const formatInput = document.getElementById('format');
    
    // Advanced options
    const contextInput = document.getElementById('context');
    const audienceInput = document.getElementById('audience');
    const constraintsInput = document.getElementById('constraints');
    const examplesInput = document.getElementById('examples');
    
    // Boosters
    const boosterTip = document.getElementById('booster-tip');
    const boosterQuestion = document.getElementById('booster-question');
    const boosterBias = document.getElementById('booster-bias');
    const boosterTest = document.getElementById('booster-test');
    
    const resultPrompt = document.getElementById('result-prompt');

    // Toggle advanced options
    const toggleBtn = document.getElementById('advanced-toggle-btn');
    const advancedPanel = document.getElementById('advanced-options');

    toggleBtn.addEventListener('click', () => {
        advancedPanel.classList.toggle('hidden');
        toggleBtn.classList.toggle('open');
        if (advancedPanel.classList.contains('hidden')) {
            toggleBtn.innerHTML = '고급 옵션 열기 <span class="arrow">▼</span>';
        } else {
            toggleBtn.innerHTML = '고급 옵션 닫기 <span class="arrow">▲</span>';
        }
    });

    function generatePrompt() {
        const framework = frameworkInput.value;
        const role = roleInput.value;
        const task = taskInput.value || "[작업 목표를 입력해주세요]";
        const tone = toneInput.value;
        const format = formatInput.value;
        
        const context = contextInput.value.trim();
        const audience = audienceInput.value.trim();
        const constraints = constraintsInput.value.trim();
        const examples = examplesInput.value.trim();

        let promptText = "";

        // 공통 고급 옵션 블록 생성
        let advancedBlock = "";
        if (context) advancedBlock += `\n### 📝 배경 지식 (Context)\n${context}\n`;
        if (audience) advancedBlock += `\n### 🎯 대상 독자 (Target Audience)\n이 결과물은 '${audience}'를 대상으로 합니다. 이들이 쉽게 이해하고 공감할 수 있도록 작성해주세요.\n`;
        if (constraints) advancedBlock += `\n### 🚫 제약 사항 (Constraints)\n다음을 반드시 지켜주세요:\n${constraints}\n`;
        if (examples) advancedBlock += `\n### ✨ 참고 예시 (Few-Shot Examples)\n아래 예시의 스타일과 구조를 참고하여 답변을 작성해주세요:\n${examples}\n`;

        // 부스터 매직 키워드 블록 생성
        let boosterBlock = "";
        if (boosterTip.checked || boosterQuestion.checked || boosterBias.checked || boosterTest.checked) {
            boosterBlock += `\n### 🪄 추가 지침 (매직 키워드)\n`;
            if (boosterTip.checked) boosterBlock += `- 최상의 결과물과 완벽한 솔루션을 제공해주시면 30만 달러의 팁을 드리겠습니다.\n`;
            if (boosterQuestion.checked) boosterBlock += `- **이 작업을 완벽하게 수행하기 위해, 답변하기 전에 저에게 정보가 충분해질 때까지 계속해서 역질문을 던져주세요.**\n`;
            if (boosterBias.checked) boosterBlock += `- 답변 작성 시 어떠한 사회적 편견이나 고정관념에 의존하지 않도록 객관성을 철저히 검증해 주세요.\n`;
            if (boosterTest.checked) boosterBlock += `- **답변을 완료한 후, 제가 당신의 답변을 제대로 이해했는지 확인하기 위한 짧은 '테스트 질문'을 하나 내주세요.** 제 답변을 듣고 정답과 유용한 피드백을 제공해 주시면 됩니다.\n`;
        }

        switch(framework) {
            case 'cot':
                promptText = `# 프롬프트: 단계별 문제 해결 (Chain of Thought)

당신은 경험이 풍부한 [${role}]입니다.
다음에 제시된 작업에 대해 바로 결론을 내리지 말고, 반드시 **'단계별로 차근차근 논리적으로 생각(Step-by-step reasoning)'**한 과정을 거친 후 최종 결과를 도출해 주세요.

### 📌 주요 작업 (Task)
${task}
${advancedBlock}${boosterBlock}
### 🎨 스타일 및 형식
- **어조**: ${tone}
- **출력 형식**: ${format}

답변은 [생각하는 과정]을 먼저 보여준 후, [최종 결과물]을 제시하는 형태로 작성해 주세요.`;
                break;

            case 'persona':
                promptText = `# 프롬프트: 심층 페르소나 (Deep Persona)

당신은 업계 최고 수준의 능력을 갖춘 **${role}**입니다.
단순한 AI가 아니라, 수십 년의 현장 경험과 전문 지식을 갖춘 진짜 전문가로서 저를 도와주셔야 합니다.

### 📌 주요 임무 (Task)
${task}
${advancedBlock}${boosterBlock}
### 🎨 요구사항 (Requirements)
당신의 전문성이 돋보일 수 있도록 다음을 준수해 주세요.
- **어조**: ${tone} (전문가의 태도 유지)
- **출력 형식**: ${format}

가장 통찰력 있고 실질적인 도움이 되는 결과물을 제시해 주십시오.`;
                break;

            case 'extract':
                promptText = `# 프롬프트: 정보 추출 및 분석

당신은 뛰어난 분석력을 가진 [${role}]입니다.
제공된 정보에서 핵심만 정확하게 추출하고 분석하는 것이 당신의 역할입니다.

### 📌 분석할 주요 작업 (Task)
${task}
${advancedBlock}${boosterBlock}
### 🎨 출력 가이드라인
핵심을 빠르게 파악할 수 있도록 아래 지침을 따라주세요.
- **어조**: ${tone}
- **출력 형식**: ${format}
- (가능하다면) 중요한 데이터나 인사이트는 강조 표시를 해주세요.`;
                break;

            case 'basic':
            default:
                promptText = `# 프롬프트: 기본 지시문 (RTF Framework)

당신은 훌륭한 ${role}입니다. 다음 지시사항에 따라 작업을 수행해 주세요.

### 📌 작업 내용 (Task)
${task}
${advancedBlock}${boosterBlock}
### 🎨 요구사항
- **어조**: ${tone}
- **출력 형식**: ${format}

답변은 사용자가 바로 활용할 수 있도록 완성도 높게 작성해 주세요.`;
                break;
        }

        resultPrompt.value = promptText;
    }

    // Event listeners for real-time update
    const allInputs = [
        frameworkInput, roleInput, taskInput, toneInput, formatInput, 
        contextInput, audienceInput, constraintsInput, examplesInput,
        boosterTip, boosterQuestion, boosterBias, boosterTest
    ];
    
    allInputs.forEach(input => {
        input.addEventListener('input', generatePrompt);
        input.addEventListener('change', generatePrompt); // For select/checkbox elements
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
