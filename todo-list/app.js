import express from "express";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();
app.use(express.json());

// Routes
app.use("/todo", todoRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found"
  });
});

// Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
