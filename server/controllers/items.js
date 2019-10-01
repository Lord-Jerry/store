const Item = require('../models/items');

class category {

  /**
   * creates new  items
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   * @return {json}
   */
  static async createCategory (req, res, next) {
    const {name, category, price, discount, quantity, seller, images, views, num_sold} =  req.body;
    const existingItem = await Item.findOne({ name });

    if (existingItem) {
      const err = new Error();
      err.message = 'Item already exists';
      err.statusCode = 400;
      return next(err);
    }

    const data = new Item({
      name, category, price, discount, quantity, seller, images, views, num_sold
    });
    const result = await data.save();

    if (!result) {
      const err = new Error();
      err.message = 'error occured';
      err.statusCode = 500;
      return next(err);
    }

    return res.status(201).json({
      messaage: 'Item added successfully',
      statusCode: 201,
    });
  }

  /**
   * gets all available items
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   * @return {json}
   */
  static async getItems(req, res, next) {
    const allItems = await Items.find();

    if(allItems){
      res.status(200).json({
        message: 'All Categories',
        statusCode: 200,
        result: findCategory,
      });
    }

    res.status(404).json({
      message: 'No items found',
      statusCode: 404,
    });

  }
}



module.exports = category;
