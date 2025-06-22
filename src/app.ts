import express from "express";
import connectDB from "./database";
import postsRoutes from "./api/posts/posts.routes";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import notFound from "./middlewares/notFound.middleware";
import errorHandler from "./middlewares/errorHandler.middleware";

const app = express();
const PORT = 8000;

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/media", express.static(path.join(__dirname, "../media")));

app.use("/posts", postsRoutes);

app.use(notFound);
app.use(errorHandler);

connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
