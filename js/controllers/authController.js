"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post("/login", async (req, res) => {
    try {
        res.status(200).json({
            err: false,
            Message: "Some Error",
            data: undefined
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            Message: "Some Error"
        });
    }
});
router.post("/logout", async (req, res) => {
    try {
        res.status(200).json({
            err: false,
            Message: "Some Error",
            data: undefined
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            Message: "Some Error"
        });
    }
});
exports.default = router;
