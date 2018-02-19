lint:
	npx eslint validate-it.js test.js validators/*.js

test: lint
	node test.js

man.1: man.1.ronn
	ronn -m man.1.ronn > man.1

docs: validate-it.js validators man.1
	rm -rf docs
	npx jsdox validate-it.js validators/*.js --output docs folder

release:
	npx release-it

.PHONY: lint test release
