# AI-Assisted Development Report

## 1. AI Tools Used
- Gemini 3.1 Pro (via Antigravity IDE)

## 2. Tasks Assisted by AI
- PRD Writing: I came up with the core idea for a prompt generator and used the AI to help structure my thoughts into a professional Product Requirements Document (PRD) that meets the assignment guidelines.
- UI/UX Design & Publishing: I asked the AI to help write the HTML skeleton and apply modern CSS styling, including glassmorphism, dark mode, and background animations.
- JavaScript Implementation: I used the AI to help implement the core logic, such as real-time prompt assembly, clipboard copying, and saving data using the browser Local Storage.
- Prompt Engineering Logic: I researched prompt engineering techniques (like Chain of Thought and reverse questioning) and instructed the AI to implement these dynamic frameworks and magic keyword checkboxes.

## 3. Representative Prompts Used
1. I have an idea for a custom AI prompt generator. Help me draft a professional PRD that includes the Product Overview, Target Users, and Feature List.
2. Based on the PRD we wrote, please generate the index.html, style.css, and script.js files. Make sure the design uses a modern glassmorphism aesthetic and a dark theme.
3. I read an article about prompt hacking techniques like promising a tip and asking for reverse questions. Please add these as magic keyword checkboxes in our web application.

## 4. Modifications and Improvements
- Natural Prompt Generation: The initial string concatenation method suggested by the AI was too basic. I completely overhauled the engine to use a switch-case statement that handles 4 distinct frameworks (Basic, Chain of Thought, Persona, Extraction) and outputs structured markdown.
- Prompt Boosters: Based on my own research, I added logic and UI for toggleable advanced options. These magic keywords (e.g., promising a virtual tip, inducing reverse questions) are automatically appended to the bottom of the prompt when checked, significantly improving the output quality.
- Design Details: The initial background gradient animation was too fast and distracting. I adjusted the CSS animation duration to 10 seconds to create a much smoother and less intrusive visual experience, and added smooth dropdown animations to the advanced options panel.

## 5. Bugs, Errors, and Limitations Found
- Issue: When opening the browser to use the library (Local Storage) feature for the first time, the application threw a JavaScript error because the stored data was null, which broke the array forEach method.
- Solution: I fixed this by adding a logical OR operator when parsing the JSON data. If the data is empty or null, it now returns an empty array as the default value, successfully resolving the error.

## 6. Final Vercel Deployment URL
- https://promptcrafter-six.vercel.app
