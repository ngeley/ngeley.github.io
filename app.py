from flask import Flask # Import Flask package
from flask import render_template # Import render_template function
app = Flask(__name__) # Construct Flask object named 'app'

'''
@app.route() defines the URLs that route to the index() function.
The URLs will be appended to the end of the base URL.
Links within HTML files should use the defined routes (for example '/index') as
the values for href attributes.
URLs that will call the index() function if running app.py on localhost:
	http://localhost:5000/
	http://localhost:5000/index
'''
@app.route('/') # URL for function (default for home page)
@app.route('/index.html') # Secondary URL for function
def index():
	return render_template('index.html') # located in templates/
	
@app.route('/about.html')
def about():
	return render_template('about.html')

@app.route('/Episode.html')
def episodes():
	return render_template('Episode.html')

@app.route('/Series.html')
def series():
	return render_template('Series.html')

@app.route('/Platform.html')
def platforms():
	return render_template('Platform.html')
	
@app.route('/episodeentity.html/<name>/')
def episodeentity(name):
	return render_template('episodeentity.html', name) 

@app.route('/seriesentity.html/<name>/')
def seriesentity(name):
	return render_template('seriesentity.html', name) 

@app.route('/networkentity.html/<name>/')
def networkentity(name):
	return render_template('networkentity.html', name) 
	
if __name__ == '__main__':
        app.run('107.170.7.26','80') # Run application
