import express from "express";
import { Controller } from "./controller.js";

const app = express();
app.use(express.json({ limit: "10mb" }));

app.listen(3001);
console.log("\nServer running at port: http://localhost:3001/\n");

app.get("/", function (req, res) {
  res.send("Job Executed sucessfully!");
});

app.post("/vvertex", async function (req, res) {
  try {
    const prompt = "insira aqui seu prompt";
    const files = req.body.fileBase64;
    const response = await Controller(prompt, files);
    return res.send(response);
  } catch (error) {
    return res.sendStatus(403);
  }
});
