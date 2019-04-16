`api/v1/register`
Request Type: POST
  required body keys

  body: {
      firstname,
      lastname,
      email,
      username,
      gender,
      password,
      pssword2,
  }

  expected response :
  json({
      message: 'user account created successfully',
      statusCode: 201
  })

`api/v1/login`
Request Type: POST
  required body keys

  body: {
      email,
      password,
  }

  expected response:
  json({
      message: 'logged in',
      statusCode: 200,
      token,
      result
  })
  where: `token` equal string to validate user

  `result`: equal user details that may be need on the front end 

`Tip`: store token in localStorage 

`api/v1/product/all`
Request Type: GET
  required headers for logged users
  headers: {
      token
  }
  TODO: find a better approach to fetching product for home page
  expected response: 
  
  json({
      message: 'fetched products',
      statusCode: 200,
      result: [{}]
  })
  `TIP`: object in `result` would return `product name` `category` `price` `discount`

  so sort product to thier categories

  `api/v1/categories/all`
  Type: GET
  fetch all avaliable category.

  required headers for logged users
  headers: {
      token
  }

  expected response: 
  
  json({
      message: 'fetched categories',
      statusCode: 200,
      result: [{}]
  })

  `api/v1/:category/all`
  Type: GET
  fetch all avaliable product category.
  
  required headers for logged users
  headers: {
      token
  }

  expected response: 
  
  json({
      message: 'fetched products in category',
      statusCode: 200,
      result: [{}]
  })