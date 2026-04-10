import firebase_admin
from firebase_admin import credentials, firestore
from fastapi import FastAPI

cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

app = FastAPI()

@app.get("/")
def root():
    return {"message": "SAE Aero API"}
