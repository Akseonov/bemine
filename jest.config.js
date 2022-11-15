module.exports = {
	preset: "ts-jest",
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: "coverage",
	coverageProvider: "v8",
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.jsx?$": "babel-jest",
		"^.+\\.(ts|tsx)$": "ts-jest"
	},
	moduleNameMapper: {
		"@/([^\\.]*)$": "<rootDir>/src/$1",
	},
};
