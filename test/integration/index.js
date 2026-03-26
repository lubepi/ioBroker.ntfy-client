const path = require("node:path");
const { tests } = require("@iobroker/testing");

// Run integration tests - aass are provided with a mocked adapter
tests.integration(path.join(__dirname, "..", ".."));
