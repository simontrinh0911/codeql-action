"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const languages_1 = require("./languages");
const logging_1 = require("./logging");
const testing_utils_1 = require("./testing-utils");
(0, testing_utils_1.setupTests)(ava_1.default);
(0, ava_1.default)("parseLanguage", async (t) => {
    // Exact matches
    t.deepEqual((0, languages_1.parseLanguage)("csharp"), languages_1.Language.csharp);
    t.deepEqual((0, languages_1.parseLanguage)("cpp"), languages_1.Language.cpp);
    t.deepEqual((0, languages_1.parseLanguage)("go"), languages_1.Language.go);
    t.deepEqual((0, languages_1.parseLanguage)("java"), languages_1.Language.java);
    t.deepEqual((0, languages_1.parseLanguage)("javascript"), languages_1.Language.javascript);
    t.deepEqual((0, languages_1.parseLanguage)("python"), languages_1.Language.python);
    // Aliases
    t.deepEqual((0, languages_1.parseLanguage)("c"), languages_1.Language.cpp);
    t.deepEqual((0, languages_1.parseLanguage)("c++"), languages_1.Language.cpp);
    t.deepEqual((0, languages_1.parseLanguage)("c#"), languages_1.Language.csharp);
    t.deepEqual((0, languages_1.parseLanguage)("typescript"), languages_1.Language.javascript);
    // Not matches
    t.deepEqual((0, languages_1.parseLanguage)("foo"), undefined);
    t.deepEqual((0, languages_1.parseLanguage)(" "), undefined);
    t.deepEqual((0, languages_1.parseLanguage)(""), undefined);
});
(0, ava_1.default)("isTracedLanguage", async (t) => {
    const logger = (0, logging_1.getRunnerLogger)(true);
    t.true((0, languages_1.isTracedLanguage)(languages_1.Language.cpp, logger));
    t.true((0, languages_1.isTracedLanguage)(languages_1.Language.java, logger));
    t.true((0, languages_1.isTracedLanguage)(languages_1.Language.csharp, logger));
    t.false((0, languages_1.isTracedLanguage)(languages_1.Language.go, logger));
    t.false((0, languages_1.isTracedLanguage)(languages_1.Language.javascript, logger));
    t.false((0, languages_1.isTracedLanguage)(languages_1.Language.python, logger));
});
(0, ava_1.default)("isScannedLanguage", async (t) => {
    const logger = (0, logging_1.getRunnerLogger)(true);
    t.false((0, languages_1.isScannedLanguage)(languages_1.Language.cpp, logger));
    t.false((0, languages_1.isScannedLanguage)(languages_1.Language.java, logger));
    t.false((0, languages_1.isScannedLanguage)(languages_1.Language.csharp, logger));
    t.true((0, languages_1.isScannedLanguage)(languages_1.Language.go, logger));
    t.true((0, languages_1.isScannedLanguage)(languages_1.Language.javascript, logger));
    t.true((0, languages_1.isScannedLanguage)(languages_1.Language.python, logger));
});
//# sourceMappingURL=languages.test.js.map