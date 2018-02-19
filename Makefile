lint:
	npx eslint validate-it.js test.js validators/*.js

test: lint
	node test.js

validate-it.1: validate-it.1.ronn
	ronn -m validate-it.1.ronn > validate-it.1

docs: validate-it.js validators validate-it.1
	rm -rf docs
	npx jsdox validate-it.js validators/*.js --output docs folder

release:
	npx np

.PHONY: lint test release
