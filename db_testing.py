import os
from flask import Flask, render_template, request
import dotenv
from flask_socketio import SocketIO
from flask_sqlalchemy import SQLAlchemy

db_url = os.getenv("DB_URL")

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URL'] = db_url
db = SQLAlchemy(app)

@app.route('/')
def home():
    return "connected to database"

if __name__ == "__main__":
    app.run(debug=True)