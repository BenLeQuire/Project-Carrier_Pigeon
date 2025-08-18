from flask import Flask, render_template

app = Flask(__name__)

user_name = "ben"

@app.route('/hello/<name>')
def hello(name):
    return render_template('hello.html', user_name=name)

if __name__ == '__main__':
    app.run(debug=True)