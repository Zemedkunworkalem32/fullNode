import express from "express";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();

app.use(express.json());

// routes
app.use("/todos", todoRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// error handler
app.use((err, req, res, next) => {
  res.status(500).json({ message: "Internal server error" });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
