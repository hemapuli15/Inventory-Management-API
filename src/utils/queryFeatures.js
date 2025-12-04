export const buildQuery = (model, req, extraFilter = {}) => {
  const { search, page = 1, limit = 10, ...filters } = req.query;

  let queryObj = { ...extraFilter };

  if (search) {
    queryObj.$or = [{ name: { $regex: search, $options: "i" } }];
  }

  // merge filters (like category, status etc)
  Object.assign(queryObj, filters);

  const skip = (Number(page) - 1) * Number(limit);

  const query = model.find(queryObj).skip(skip).limit(Number(limit));

  return { query, page: Number(page), limit: Number(limit), filter: queryObj };
};
