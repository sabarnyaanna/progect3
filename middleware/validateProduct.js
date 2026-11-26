export const validateProduct = (req, res, next) => {
  const title = req.body.title || req.body.name;
  const { price } = req.body;

  if (!title || typeof title !== "string" || title.trim().length < 2) {
    return res
      .status(400)
      .json({ message: "Invalid flower title. Minimum 2 characters required." });
  }

  if (price === undefined || typeof price !== "number" || price < 0) {
    return res.status(400).json({ message: "Invalid price." });
  }

  next();
};