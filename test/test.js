var testsContext = require.context(".", true, /\.test.jsx/);
testsContext.keys().forEach(testsContext);
