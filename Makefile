lint:
	npx eslint validate-it.js index.js test.js validators/*.js

test: lint
	node test.js

man/validate-it.1: man/validate-it.1.ronn
	ronn -m man/validate-it.1.ronn > man/validate-it.1

docs: validate-it.js index.js validators man/validate-it.1
	rm -rf docs
	npx jsdox validate-it.js index.js validators/*.js --output docs folder

release:
	npx np

.PHONY: lint test release
