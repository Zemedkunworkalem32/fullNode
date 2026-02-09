// 404 Not Found Middleware
export const notFound = (req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
};

// Generic Error Handler
export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Server Error', error: err.message });
};
