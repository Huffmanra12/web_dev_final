// 404 handler for unknown routes
export function notFound(req, res, next) {
  res.status(404).json({
    message: `Not Found - ${req.originalUrl}`,
  });
}

// Global error handler for any thrown error
export function errorHandler(err, req, res, next) {
  console.error("Error:", err);

  const status = err.status || 500;
  const message = err.message || "Internal Server Error";

  // Handle validation errors
  if (err.errors || err.issues) {
    return res.status(400).json({
      message: "Validation error",
      errors: err.errors || err.issues,
    });
  }

  res.status(status).json({
    message,
    stack: err.stack,
    error: err,
  });
}
