import Express from "express";

const app = Express();

app.use(Express.json());
app.use(cors());

app.listen(8080);