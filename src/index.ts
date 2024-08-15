import express from "express";
import router from "./routes";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/", router);
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
