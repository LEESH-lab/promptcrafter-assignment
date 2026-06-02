# Product Requirements Document (PRD)

## 1. Product Overview
**PromptCrafter** is an AI-assisted web service designed to help users generate highly optimized, professional-grade prompts for Large Language Models (LLMs) like ChatGPT, Claude, and Gemini. It solves the "blank canvas problem" by providing a structured, intuitive interface where users can select frameworks, roles, and magic keywords without needing to memorize prompt engineering techniques.

## 2. Target Users
- **Students & Academics:** Needs help structuring essays, summarizing papers, or planning study schedules.
- **Developers:** Needs help debugging code, writing documentation, or understanding new frameworks.
- **Marketers & Creators:** Needs engaging copy, content strategies, and SEO optimization.
- **General Public (Beginners):** People who want to use AI effectively but don't know how to write good prompts.

*Pain Points Addressed:* Low quality AI responses due to vague instructions, lack of knowledge about prompt engineering, and the repetitive nature of typing out constraints.

## 3. Project Goals
- Provide a 1-minute, zero-learning-curve prompt generation experience.
- Implement at least 4 proven prompt frameworks (Basic, Chain of Thought, Persona, Extraction).
- Ensure the output is instantly usable via a 1-click copy feature.
- Maintain a visually pleasing, modern glassmorphism UI.

## 4. Core User Scenario
1. A user wants to write a marketing email but doesn't know how to instruct the AI.
2. The user opens PromptCrafter.
3. They select the "Deep Persona" framework and choose the "Digital Marketer" role.
4. They enter their task: "Write a launch email for a new productivity app."
5. They open "Advanced Options" and check the "Virtual Tip" and "Reverse Questioning" magic keywords.
6. A perfectly structured markdown prompt is dynamically generated.
7. The user clicks "Copy" and pastes it into ChatGPT.
8. The user clicks "Save to Library" to reuse this setup later.

## 5. Feature List
- **Framework Selection** (Must-have): Dropdown to select different prompt engineering structures (RTF, CoT, etc.).
- **Dynamic Prompt Generator** (Must-have): Real-time text generation based on inputs.
- **Advanced Options** (Should-have): Inputs for Context, Target Audience, and Constraints.
- **Prompt Boosters / Magic Keywords** (Should-have): Checkboxes to inject proven prompt hacks (e.g., Virtual Tip, Bias Prevention).
- **Clipboard Copy** (Must-have): 1-click copy functionality.
- **My Library** (Nice-to-have): Save and delete favorite prompts using Local Storage.

## 6. Page Structure
The application is a Single Page Application (SPA) divided into three logical sections:
1. **Home Section:** Landing area with a hero title, brief description, and a "Start" button.
2. **Builder Section:** The core tool area containing dropdowns, inputs, advanced options toggle, and the real-time result preview.
3. **Library Section:** A dashboard grid displaying previously saved prompts.

## 7. Technical Requirements
- **Frontend:** HTML5, Vanilla CSS3, Vanilla JavaScript (ES6+). No frontend frameworks (React/Vue) are used to keep it lightweight.
- **Styling:** CSS variables for theming, CSS Flexbox/Grid for layout, and backdrop-filter for glassmorphism.
- **Storage:** Browser `localStorage` API for the Library feature (No backend/database).
- **Deployment:** Vercel (Static Site Deployment).

## 8. Design Requirements
- **Theme:** Dark Mode by default.
- **Aesthetics:** "Glassmorphism" - semi-transparent panels with background blur over floating, animated gradient orbs.
- **Typography:** 'Outfit' Google Font for a modern, geometric, and clean look.
- **Interactions:** Smooth CSS transitions for button hovers, section toggling, and expanding the advanced options panel.

## 9. Milestones
1. **Idea Definition & PRD Completion:** Outline the problem, solution, and core features.
2. **First Prototype:** Implement the basic HTML/CSS skeleton and simple string-concatenation JS logic.
3. **Advanced Implementation:** Integrate prompt frameworks and magic keywords based on prompt engineering research.
4. **Refinement & Testing:** Add smooth UI transitions and test Local Storage persistence.
5. **Final Deployment:** Push code to GitHub and deploy publicly via Vercel.
