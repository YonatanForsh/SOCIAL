"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userService_1 = __importDefault(require("../services/userService"));
const router = express_1.default.Router();
router.post("/register", async (req, res) => {
    try {
        const resolt = await userService_1.default.createNewUser(req.body);
        console.log(resolt);
        if (resolt) {
            res.status(200).json({
                err: false,
                Message: "User Create!!",
                data: undefined
            });
        }
        else {
            throw new Error("Can't save new User");
        }
    }
    catch (err) {
        res.status(400).json({
            err: true,
            Message: "Some Error"
        });
    }
});
router.post("/follow", async (req, res) => {
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
router.get("/search", async (req, res) => {
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
router.get("/profile", async (req, res) => {
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
router.get("/followers", async (req, res) => {
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
router.get("/following", async (req, res) => {
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
