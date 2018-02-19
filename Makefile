lint:
	npx eslint index.js test.js

test: lint
	node test.js

release: test
	np
	git changelog
