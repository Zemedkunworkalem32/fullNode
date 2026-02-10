import express from 'express';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

const app = express();

app.use(express.json());
app.use('/users', userRoutes);

// 404 Middleware
app.use(notFound);

// Error Handling Middleware
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
