from flask import Flask, render_template

app = Flask(__name__)

user_name = "ben"

@app.route('/')
def hello():
    return render_template (
        "message.html",
          
    )

if __name__ == '__main__':
    app.run()