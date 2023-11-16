import express from "express";
import { connectDB } from "./mongo.js";
import cors from "cors";
import { hashSync, compareSync } from "bcrypt";
import { User } from "./mongo.js";
import jwt from "jsonwebtoken";
import "dotenv/config.js";
import { fetchQuestions } from "./fetchQuestions.js";
const tokenKey = process.env.TOKEN_KEY;
const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(__dirname));
connectDB();
console.log(__dirname);
app.post("/greet", async (req, res) => {
    const { token } = req.body;
    try {
        const { username } = jwt.verify(token, tokenKey);
        const user = await User.findOne({ username });
        if (user) {
            res.json({ message: "Success.", decoded: { username } });
        }
    }
    catch (err) {
        res.json({ message: "Failed." });
        console.log("Failed");
    }
});
app.post("/start", async (req, res) => {
    const { categories, quantity, difficulties } = req.body;
    try {
        const questions = await fetchQuestions(categories, quantity, difficulties);
        res.json({ questions, message: "Success" });
    }
    catch (err) {
        console.log(err);
        res.json({ message: "Failed" });
    }
});
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.json({ message: "Username or password missing." });
    }
    const user = await User.findOne({ username });
    if (user && compareSync(password, user.password)) {
        const token = jwt.sign({ username }, tokenKey, { expiresIn: "2H" });
        user.token = token;
        return res.json({ message: "Login successful.", user });
    }
    if (user && !compareSync(password, user.password)) {
        return res.json({ message: "Wrong password." });
    }
    if (username && !user) {
        return res.json({ message: "User is not registered." });
    }
});
app.post("/register", async (req, res) => {
    const { username, password } = await req.body;
    const encoded = hashSync(password, 10);
    const existingUser = await User.findOne({ username });
    console.log(req.body);
    if (username && password && !existingUser) {
        try {
            const user = await User.create({ username, password: encoded });
            const token = jwt.sign({ username }, tokenKey, { expiresIn: "2H" });
            user.token = token;
            return res.json({ message: "Account created uccessfully.", user });
        }
        catch (err) {
            res.json({ message: "Something went wrong." });
        }
    }
    if (existingUser) {
        return res.json({ message: "User already registered." });
    }
    if (!username || !password) {
        return res.json({ message: "Wrong credentials." });
    }
});
app.get("/*", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.listen(3000, () => {
    console.log("Server online");
});
