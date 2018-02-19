lint:
	npx eslint index.js test.js

test: lint
	node test.js

release:
	npx release
