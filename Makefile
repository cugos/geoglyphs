build:
	npm install
	svgo -f dist
run:
	open http://localhost:8000/
	python -m SimpleHTTPServer