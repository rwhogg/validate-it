lint:
	npx eslint validate-it.js test.js validators/*.js

test: lint
	node test.js

docs: validate-it.js validators
	rm -rf docs
	npx jsdox validate-it.js validators/*.js --output docs folder

release:
	npx release-it

.PHONY: lint test release
