<b><i>🚀 LeetCode Clone </b></i>

A full-stack LeetCode-like coding platform built using Next.js, TypeScript, and Firebase, allowing users to solve coding problems, track progress, and experience a real interview-style coding environment.

<b><i>📌 Features</b></i>

🔐 User authentication using Firebase Auth

💻 Interactive code editor (CodeMirror)

📚 Problem listing with difficulty levels

🧠 Real-time coding experience

🎯 Problem solving with test case support

☁️ Firebase integration for backend services

⚡ Fast UI with Next.js App Router

<b><i>🛠️ Tech Stack </b></i>

Frontend: Next.js, React, TypeScript

Styling: Tailwind CSS

Editor: CodeMirror

Backend: Firebase (Auth + Firestore)

State Management: React Hooks / Recoil

<b><i>📁 Project Structure </b></i>

leetcode_clone/

├── app/ or pages/

├── components/

├── firebase/

├── problems/

├── styles/

└── utils/

<b><i>⚙️ Setup Instructions </b></i>

1. Clone the repository

git clone https://github.com/your-username/leetcode_clone.git

cd leetcode_clone

2. Install dependencies

npm install

3. Add Firebase config

Create a .env.local file:

NEXT_PUBLIC_FIREBASE_API_KEY=your_key

NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain

NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id

4. Run the project

npm run dev

Open:

http://localhost:3000

<b><i>🔥 Firebase Setup </b></i>

Enable Authentication (Email/Password)

Enable Firestore Database

Update rules during development:

allow read, write: if true;

<b><i>📸 Screenshots </b></i>

Dashboard page: 
<p>
  <img src="https://github.com/SakshiManjrekar162/LeetCode-clone/blob/main/public/Dashboard%20.png" />
</p>

Code editor UI
<p>
  <img src="https://github.com/SakshiManjrekar162/LeetCode-clone/blob/main/public/Problem%20Solving%20Page.png" />
</p>

TestCases Passed
<p>
  <img src="https://github.com/SakshiManjrekar162/LeetCode-clone/blob/main/public/Test%20Cases%20Passed.png" />
</p>

Login page
<p>
  <img src="https://github.com/SakshiManjrekar162/LeetCode-clone/blob/main/public/LeetCode%20Login.png" />
</p>

<b><i> 🚀 Future Improvements </b></i>

Add online judge system

Add timers for problems

Add contests feature

Add AI code review

Add leaderboard
