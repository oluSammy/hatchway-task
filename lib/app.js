"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const errorController_1 = __importDefault(require("./controllers/errorController"));
const index_1 = __importDefault(require("./routes/index"));
const users_1 = __importDefault(require("./routes/users"));
const AppError_1 = __importDefault(require("./utils/AppError"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use('/', index_1.default);
app.use('/users', users_1.default);
// catch 404 and forward to error handler
// handles all request url that do not exits on the server
app.all("*", (req, res, next) => {
    next(new AppError_1.default(`can't find ${req.url} on this server`, 404));
});
// handles all global error
app.use(errorController_1.default);
exports.default = app;
