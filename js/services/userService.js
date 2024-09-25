"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
const fileDataLayer_1 = require("../config/fileDataLayer");
class UserService {
    static async createNewUser(newUser) {
        const { userName, password, email, birthday, avatar } = newUser;
        const user = new user_1.default(userName, password, email, birthday, avatar);
        let users = await (0, fileDataLayer_1.getFileData)("users");
        if (!users)
            users = [];
        users.push(user);
        return await (0, fileDataLayer_1.saveFileData)("users", users);
    }
}
exports.default = UserService;
