"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Logger_1 = __importDefault(require("../core/Logger"));
const cors_1 = __importDefault(require("cors"));
const environment_1 = require("../environment");
require("../database");
const ApiError_1 = require("../core/ApiError");
const routes_1 = __importDefault(require("../routes"));
process.on("uncaughtException", (e) => {
    Logger_1.default.error(e);
});
const app = express_1.default();
app.use(express_1.default.json({ limit: "12mb" }));
app.use(express_1.default.urlencoded({ extended: true, parameterLimit: 5000, limit: "12mb" }));
app.use(cors_1.default());
app.use("/", routes_1.default);
//catch error 404
app.use((req, res, next) => next(new ApiError_1.NotFoundError()));
//middleware Error Handler
app.use((err, req, res, next) => {
    if (err instanceof ApiError_1.ApiError) {
        ApiError_1.ApiError.handle(err, res);
    }
    else {
        if (environment_1.environment === "development") {
            Logger_1.default.error(err);
            return res.status(500).send(err.message);
        }
        ApiError_1.ApiError.handle(new ApiError_1.InternalError(), res);
    }
});
exports.default = app;
