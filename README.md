# 📝 Resume Maker (AI-Powered)

An intelligent resume generator built with Spring Boot and React. This full-stack web app leverages AI to help users craft professional, tailored resumes instantly.

## 📌 Features

- ✨ **AI-Powered Resume Suggestions** (via [Spring AI](https://docs.spring.io/spring-ai/docs/))
- 🎨 Responsive UI with **React + Tailwind CSS + DaisyUI**
- ⚙️ Backend built using **Spring Boot 3 (Java 21)**
- 🧠 Local AI model support via **Ollama Integration**
- 📄 JSON-based input parsing and export options
- 🛠️ Easy-to-run locally for dev and testing

---

## 🧠 Tech Stack

### ⚙️ Backend
- **Java 21**
- **Spring Boot 3**
- **Spring AI (Ollama)** — AI model integration
- **Lombok** — boilerplate reduction
- **Maven** — build tool

### 💻 Frontend
- **React + Vite** — fast build + dev
- **Tailwind CSS** — utility-first styling
- **DaisyUI** — pre-built components
- **TypeScript** *(optional if used)*

---

## 📁 Project Structure

Resume_maker/
├── backend/ # Java Spring Boot backend (API, AI logic)
│ └── src/
├── frontend/ # React frontend (UI, Tailwind/DaisyUI)
│ └── src/


---

## 🛠️ Getting Started

### 🧩 Prerequisites

- Node.js (v18+)
- Java 21
- Maven
- Ollama (or use OpenAI with config changes)

---

### ▶️ Run Backend

```bash
cd backend
./mvnw spring-boot:run
Or with Maven:

bash
Copy
Edit
cd backend
mvn clean install
mvn spring-boot:run
ℹ️ Make sure you have Ollama running locally (or switch to OpenAI in config).

💻 Run Frontend
bash
Copy
Edit
cd frontend
npm install
npm run dev
Then open: http://localhost:5173

🔐 Environment Variables
Backend (backend/.env)
env
Copy
Edit
OLLAMA_BASE_URL=http://localhost:11434
Frontend (frontend/.env)
env
Copy
Edit
VITE_API_URL=http://localhost:8080
You can provide .env.example files in both folders for sharing without secrets.

📸 Screenshots
You can drop in screenshots or GIFs here to show the UI/UX.

📚 Credits
Spring AI

Ollama

Tailwind CSS

DaisyUI

🙋‍♂️ Author
Shivansh Agarwal

Java Developer | Full-Stack Enthusiast | AI Integration Explorer

LinkedIn • GitHub

⭐️ If you liked this project...
Give it a star ⭐️ on GitHub — it helps!

yaml
Copy
Edit

---

### 🔄 What to Replace

- Add your **LinkedIn**, **GitHub**, and optional **Live Demo** link
- Replace `.env` values based on your real usage
- Optional: Add screenshot images to boost visual appeal

---

Would you like me to generate the `.env.example` files as well?
