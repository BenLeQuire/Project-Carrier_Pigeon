from telephone import app_called
from flask import Flask, render_template, request
from flask_socketio import SocketIO
from flask_sqlalchemy import SQLAlchemy
import cryptography
import json
from dotenv import load_dotenv
import os

app = Flask(__name__)

db_url = os.getenv("DB_URL")

app.config['SECRET_KEY'] = 'General_Kenobi'
socketio = SocketIO(app)


@app.route('/')
@app.route('/index')
def index():
    return render_template('base.html')
@app.route('/callApp', methods=['POST'])
def callApp():
    # Get the JSON data sent by fetch()
    msg_data = request.get_json()
    #msg_data = json.loads(msg_data)
    name = msg_data.get('name', 'Name not provided')
    msg = msg_data.get('msg', 'No message was sent')
    return f'the sender was {name} and the message was {msg}'
    #return str(msg_data)

if __name__ == '__main__':
    #db = SQLAlchemy(app)
    socketio.run(app, ssl_context = 'adhoc')