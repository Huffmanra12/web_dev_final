export function validate(schema, property = "body") {
  return async (req, res, next) => {
    try {
      const validated = await schema.parseAsync(req[property]);
      req.validated = validated; // <- controllers read this
      next();
    } catch (err) {
      console.error("Validation failed for:", req[property]);
      console.error("Issues:", err?.issues || err?.errors || err?.message);
      // ZodError has .issues; fall back to generic message otherwise
      const issues = err?.issues ??
        err?.errors ?? [{ message: err?.message || "Invalid request" }];
      return res.status(400).json({
        message: "Validation error",
        errors: issues.map((i) => ({
          path: Array.isArray(i.path) ? i.path.join(".") : i.path ?? "",
          message: i.message || String(i),
        })),
      });
    }
  };
}
