"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = __importDefault(require("./core/Logger"));
const environment_1 = require("./environment");
const app_1 = __importDefault(require("./config/app"));
console.log(environment_1.port);
app_1.default
    .listen(parseInt(environment_1.port, 10), () => {
    Logger_1.default.info(`server running on port : ${environment_1.port}`);
    console.log(`server running on port : ${environment_1.port}`);
})
    .on("error", (e) => {
    Logger_1.default.error(e);
    console.log(e);
});
