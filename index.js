import Express from "express";
import userRotes from "./routes/users.js";
import cors from "cors";

const app = Express();

app.use(Express.json());
app.use(cors());

app.use("/users", userRotes);

app.listen(8080);