# 🚀 CareerPilot AI – AI-Powered Job Preparation Platform

CareerPilot AI is a full-stack Generative AI-powered job preparation platform designed to help candidates prepare for technical interviews, optimize their resumes, and identify skill gaps based on specific job descriptions.

The platform uses AI to analyze uploaded resumes, compare candidate skills with job requirements, generate personalized interview questions, evaluate interview answers, and create ATS-friendly resumes.

## ✨ Key Features

### 🔐 1. Authentication & Authorization
- User registration and login.
- JWT-based authentication.
- Secure password hashing using bcrypt.
- Protected routes and user-specific data access.

### 📄 2. Resume Management
- Upload resumes in PDF format.
- Extract resume content automatically.
- Store and manage uploaded resumes.
- View and delete previously uploaded resumes.

### 🎯 3. AI-Powered Job Description Analysis
- Enter or paste a job description.
- Extract required technical and soft skills.
- Compare resume skills with job requirements.
- Identify missing and matching skills.
- Generate a job compatibility score.
- Provide personalized skill improvement suggestions.

### 🤖 4. AI Interview Preparation
- Generate technical interview questions.
- Generate HR interview questions.
- Create role-specific interview questions.
- Generate sample answers.
- Customize questions according to experience and difficulty level.

### 📝 5. ATS Resume Optimization
- Analyze resume content.
- Identify missing job-related keywords.
- Improve professional summaries.
- Optimize resume bullet points.
- Generate ATS-friendly resume versions.
- Download optimized resumes as PDF.

### 🎤 6. AI Mock Interview
- Conduct interactive mock interviews.
- Answer questions one by one.
- Evaluate candidate responses using AI.
- Generate performance scores.
- Receive feedback and improvement suggestions.

### 📊 7. User Dashboard
- Manage uploaded resumes.
- View job analysis reports.
- Track interview performance.
- Access previous interview sessions.
- Monitor preparation progress.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| Tailwind CSS | UI styling |
| Node.js | Backend runtime |
| Express.js | REST API development |
| MongoDB | Database |
| Mongoose | Database modeling |
| JWT | Authentication |
| bcrypt | Password hashing |
| Gemini AI API | AI-powered features |
| Multer | Resume file uploads |
| PDF Parser | Resume text extraction |
| Puppeteer | PDF generation |
| Postman | API testing |
| Git & GitHub | Version control |

---

## 🏗️ Project Architecture

```text
CareerPilot AI
│
├── Client (React.js)
│   ├── Authentication
│   ├── User Dashboard
│   ├── Resume Management
│   ├── Job Analysis
│   ├── Interview Preparation
│   ├── Mock Interview
│   └── Resume Builder
│
├── Server (Node.js + Express)
│   ├── Authentication APIs
│   ├── Resume APIs
│   ├── Job Analysis APIs
│   ├── AI Integration
│   ├── Interview APIs
│   └── PDF Generation
│
└── Database (MongoDB)
    ├── Users
    ├── Resumes
    ├── Job Descriptions
    ├── Skill Analyses
    ├── Interview Questions
    └── Interview Sessions
```

---

## 📁 Project Folder Structure

```text
careerpilot-ai/
│
├── client/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       ├── services/
│       ├── context/
│       ├── hooks/
│       ├── layouts/
│       ├── App.jsx
│       └── main.jsx
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── uploads/
│   ├── app.js
│   └── server.js
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

```bash
cd careerpilot-ai
```

### 2. Install Frontend Dependencies

```bash
cd client
npm install
```

### 3. Install Backend Dependencies

```bash
cd ../server
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the server directory.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

CLIENT_URL=http://localhost:5173
```

Never commit your `.env` file or expose API keys in your GitHub repository.

### 5. Run the Backend

From the server directory:

```bash
npm run dev
```

### 6. Run the Frontend

Open another terminal:

```bash
cd client
npm run dev
```

Open the application in your browser:

```text
http://localhost:5173
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get current user |
| POST | `/api/resume/upload` | Upload resume |
| GET | `/api/resume` | Get user resumes |
| DELETE | `/api/resume/:id` | Delete resume |
| POST | `/api/jobs/analyze` | Analyze job description |
| POST | `/api/ai/questions` | Generate interview questions |
| POST | `/api/ai/answers/evaluate` | Evaluate interview answers |
| POST | `/api/resume/optimize` | Optimize resume |
| POST | `/api/resume/generate-pdf` | Generate PDF resume |
| POST | `/api/interview/start` | Start mock interview |
| POST | `/api/interview/answer` | Submit interview answer |
| GET | `/api/interview/history` | Get interview history |

---

## 🔄 Application Workflow

1. User registers or logs into CareerPilot AI.
2. User uploads their resume in PDF format.
3. The backend extracts the resume content.
4. User enters a target job description.
5. Gemini AI analyzes the resume against the job requirements.
6. The application identifies matching skills and skill gaps.
7. AI generates personalized interview questions.
8. User participates in mock interviews and receives feedback.
9. The resume optimizer generates an improved ATS-friendly version.
10. User downloads the optimized resume as a PDF.

---

## 🔮 Future Enhancements

- Voice-based AI mock interviews.
- Real-time interview assistance.
- LinkedIn profile analysis.
- Multiple resume templates.
- Personalized learning roadmaps.
- Job recommendation system.
- Interview progress analytics.
- Multi-language interview support.

---

## 🎯 Project Objective

The main objective of CareerPilot AI is to simplify the job preparation process by combining resume analysis, skill gap detection, interview preparation, and Generative AI into one platform.

It aims to provide candidates with personalized insights and practical preparation tools to improve their job readiness.

---

## 👨‍💻 Author

**Pawan Thakre**

- GitHub: [Add your GitHub profile]
- LinkedIn: [Add your LinkedIn profile]

---

⭐ If you find this project useful, consider giving it a star!

**Note:** This project is developed for educational and portfolio purposes. AI-generated recommendations and ATS scores are estimates and should not be treated as guarantees of job selection.
