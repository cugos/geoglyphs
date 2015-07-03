build:
	npm install
	make icons
run:
	open http://localhost:8000/
	python -m SimpleHTTPServer
icons:
	svgo -f dist
it:
	make build
	make run