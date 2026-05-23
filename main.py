from fastapi import FastAPI

app = FastAPI(title="SmartComp AI")

@app.get("/")
def home():
    return {"status": "running", "app": "SmartComp AI"}
