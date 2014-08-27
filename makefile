all:
	rake assets:precompile
	git add . -A
	git commit -m "testing123"
	git push heroku master