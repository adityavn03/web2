"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const zodoperation = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: "it require at least 1 charater " }),
    age: zod_1.z.number().min(1, { message: "it require the minimum of 3 charater " })
});
app.post("/user", (req, res) => {
    const { success } = zodoperation.safeParse(req.body);
    const user1 = req.body;
    console.log(user1);
    if (success) {
        res.json({
            message: "the given input have a satisfies the require input condition"
        });
    }
    else {
        res.json({ message: "provide the correct input" });
    }
});
app.listen(3000);
