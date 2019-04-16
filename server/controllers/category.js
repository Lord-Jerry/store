const Category = require('../models/category');

class category {

  /**
   * creates new category for items
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   * @return {json}
   */
  static async createCategory (req, res, next) {
    const { name } = req.body;
    const findCategory = await Category.findOne({
      name,
    });

    if (findCategory) {
      const err = new Error();
      err.message = 'Category already exists';
      err.statusCode = 400;
      return next(err);
    }

    const data = new Category({
      name,
    });
    const result = await data.save();

    if (!result) {
      const err = new Error();
      err.message = 'error occured';
      err.statusCode = 500;
      return next(err);
    }

    return res.status(201).json({
      messaage: 'Category created successfully',
      statusCode: 201,
    });
  }

  /**
   * gets all available category
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   * @return {json}
   */
  static async getCategories(req, res, next) {
    const findCategory = await Category.find();

    res.status(200).json({
      message: 'fetch all categories',
      statusCode: 200,
      result: findCategory,
    });
  }
}

module.exports = category;

