from flask import Flask, render_template
from flask_socketio import SocketIO
import cryptography

app = Flask(__name__, template_folder='frontend/templates')
app.config['SECRET_KEY'] = 'General_Kenobi'
socketio = SocketIO(app)


@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    socketio.run(app, ssl_context = 'adhoc')