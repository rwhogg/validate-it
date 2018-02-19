lint:
	npx eslint index.js test.js validators/*.js

test: lint
	node test.js

release:
	npx release-it
