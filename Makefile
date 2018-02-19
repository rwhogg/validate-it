lint:
	npx eslint index.js test.js

test: lint
	node test.js

release: test
	git changelog
