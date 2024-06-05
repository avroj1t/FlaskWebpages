from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/todolist')
def todolist():
    return render_template('todolist.html')

@app.route('/topicgen')
def topicgen():
    return render_template('topicgen.html')

@app.route('/stopwatch')
def stopwatch():
    return render_template('stopwatch.html')

if __name__ == '__main__':
    app.run()
