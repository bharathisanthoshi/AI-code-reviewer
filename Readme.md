# 🤖 AI Code Reviewer & Bug Detector

An **AI-powered Code Reviewer** that analyzes source code, detects bugs, security issues, code smells, and provides improvement suggestions using Large Language Models (LLMs). The project supports multiple programming languages and offers a clean API with an optional frontend.

---

## 🚀 Features

* 🔍 Automated code review using LLMs
* 🐞 Bug detection and logical issue identification
* 🔐 Security vulnerability suggestions
* 🧹 Code quality & best-practice recommendations
* 🌐 REST API built with **FastAPI**
* 🧠 Pluggable LLM support (OpenAI / open-source models)
* 💻 Multi-language support (Python, Java, JavaScript – extensible)
* 📄 JSON-based structured review output

---

## 🏗️ Tech Stack

**Backend**

* Python 3.10+
* FastAPI
* Pydantic
* LangChain / LLM SDKs

**Frontend (Optional)**

* React + Vite
* Tailwind CSS

**AI Models**

* Open-source LLMs (e.g., LLaMA, Mistral) or OpenAI-compatible APIs

---

## 📂 Project Structure

```
ai-code-reviewer/
│
├── backend/
│   ├── main.py          # FastAPI entry point
│   ├── models.py        # Request/Response schemas
│   ├── llm_reviewer.py  # LLM logic for code analysis
│   └── requirements.txt
│
├── frontend/             # React UI 
│
├── README.md
└── .env.example
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/ai-code-reviewer.git
cd ai-code-reviewer/backend
```

### 2️⃣ Create Virtual Environment

```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
```

### 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

### 4️⃣ Configure Environment Variables

Create a `.env` file:

```env
LLM_API_KEY=your_api_key_here
```

---

## ▶️ Run the Application

```bash
uvicorn main:app --reload
```

API will be available at:

```
http://localhost:8000
```

Swagger Docs:

```
http://localhost:8000/docs
```

---

## 📥 API Usage

### Endpoint: `/review`

**Request Body**

```json
{
  "language": "python",
  "code": "def add(a,b): return a+b"
}
```

**Response**

```json
{
  "issues": [
    {
      "type": "Best Practice",
      "description": "Add type hints for better readability"
    }
  ],
  "overall_score": 8.5
}
```

---

## 🧪 Supported Languages

* ✅ Python
* ✅ Java
* ✅ JavaScript
* ➕ Easy to extend for more languages

---

## 📌 Use Cases

* Resume-ready AI project
* Pre-commit code analysis tool
* Learning assistant for beginners
* Internal code quality checker
* Interview demo project

---

## 📈 Future Enhancements

* GitHub PR integration
* Static analysis + AI hybrid approach
* Line-by-line inline comments
* Authentication & user history
* Model fine-tuning for specific languages

---




