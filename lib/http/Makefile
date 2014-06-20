REPORTER = spec
TESTS = server/test/*.js
test:
	@NODE_ENVIRONMENT=test ./node_modules/.bin/mocha --reporter $(REPORTER) $(TESTS)

test-w:
	@NODE_ENVIRONMENT=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--growl \
		--watch \
		$(TESTS)


.PHONY: test test-w
