all:
	rake assets:precompile
	git add .
	git commit -m "testing123"
	git push heroku master