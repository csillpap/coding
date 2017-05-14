from flask import Flask
from flask import render_template

app = Flask(__name__)

ages = {
    'bob': '43',
    'alice': '29'
}


@app.route('/users/<user>')
def users(user):
    age = ages.get(user)
    return render_template('user.html', user=user, age=age)


@app.route('/')
def hello_world():
  return 'Hello World!'


if __name__ == '__main__':
    app.run(debug=True)
