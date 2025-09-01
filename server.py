from telephone import app_called
from flask import Flask, render_template, request
from flask_socketio import SocketIO
import cryptography

app = Flask(__name__)
app.config['SECRET_KEY'] = 'General_Kenobi'
socketio = SocketIO(app)


@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')
@app.route('/callApp', methods=['POST'])
def callApp():
    # Get the JSON data sent by fetch()
    msg_data = request.get_json()
    msg_data = str(msg_data)
    return msg_data

if __name__ == '__main__':
    socketio.run(app, ssl_context = 'adhoc')