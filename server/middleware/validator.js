class validator {

  /**
   * check if request body contains required parameters
   * @param {...String} params - required parameters 
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function 
   * @returns {json} 
  */
  static checkBodyContains(...params) {
    return (req, res, next) => {
      console.log(req.body);
      for(let p of params) {
        // removes white space from input string, to make string a valid request body key
        // so input string can be displayed as an error message if needed
        // e.g 'first name' ==> firstname
        // req.body[firstname]
        // e.g Error 'first name is required' 
        const temp = p.replace(' ','');
        
        if(req.body[temp] === undefined) {
          const err = new Error();
          err.message = `${p} is required`;
          err.statusCode = 401;
          return next(err);
        }

        return next();

      }
    }
  }

  /**
   * check if input fields are not empty
   * @param {...string} params - required fields
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware
   * @returns {json}
   */
  static checkBodyNotEmpty(...params) {
    return (req, res, next) => {
      for(let p of params) {
        // removes white space from input string, to make string a valid request body key
        // so input string can be displayed as an error message if needed
        // e.g 'first name' ==> firstname
        // req.body[firstname]
        // e.g Error 'first name is cannot be empty' 
        const temp = p.replace(' ','');

        if(req.body[p] == (null || '' || ' ')) {
          const err = new Error();
          err.message = `${p} cannot be empty`;
          err.statusCode = 401;
          return next(err);
        } 

        return next();
      }
    }
  }


}module.exports = validator;