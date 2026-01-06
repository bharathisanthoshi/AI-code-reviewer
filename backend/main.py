from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from models import CodeReviewRequest
from llm_review import review_code

app = FastAPI(title="AI Code Reviewer")
origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # or ["*"] for any origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return "AI Code Reviewer is running 🚀"

@app.post("/ai/get-review")
async def get_review(payload: CodeReviewRequest):
    if not payload.code.strip():
        raise HTTPException(status_code=400, detail="Code prompt is required")

    response = review_code(payload.code)
    return {"review": response}
