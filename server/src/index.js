import express from "express";
import cors from "cors";

import { noteRouter } from "./routes/.js";

const app = express();
app.use(cors());

app.use(express.json());

app.use('/notes', noteRouter);

app.listen(3001, () => console.log('Server listening on port 3001!'));