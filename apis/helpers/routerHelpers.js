const Joi = require('@hapi/joi')

// TODO: Đầu vào là điều kiện muốn vali và tên của schema muốn vali
// Tác dụng phải chạy xong hàm vali thì mới được chạy qua hàm controller
// TODO: Hàm validate giá trị được truyền vào từ param
const validateParam = (schema, name) => {
  return (req, res, next) => {
    // Trong đó param là giá trị được truyền lên từ post man
    const validatorResult = schema.validate({param: req.params[name]})
    // Nếu trong khi validate xẩy ra lỗi thì sẽ xuất hiện error trong biến giá trị
    if (validatorResult.error) {
      return res.status(400).json(validatorResult.error)
    } else {
      // Check nếu không có trường req.value thì tạo mới một req.value là một object
      if (!req.value) req.value = {}
      // check nếu không có trường req.value. params thì tạo mới một req.valur là một object
      // để chứa  các trường mà mình muốn lưu lại sau khi check validate
      if (!req.value.params) req.value.params = {}
      // Lưu giá trị sau khi check validate lưu vào trong value params
      req.value.params[name] = req.params[name]
      next();
    }
  }
}
// TODO: Hàm validate giá trị được truyền vào từ body
const validateBody = (schema) => {
  return (req, res, next) => {
    const validateResult = schema.validate(req.body)
    if (validateResult.error) {
      return res.status(400).json(validateResult.error)
    } else {
      if (!req.value) req.value = {}
      if (!req.value.body) req.value.body = {}
      // Lưu giá trị sau khi check vào biến value.body
      req.value.body = validateResult.value
      next()
    }
  }
}
const schemas = {
  idSchema: Joi.object({
      param: Joi.string().required()
    }),
  // // TODO: check một body có nhiều điều kiện
  // userSchema: Joi.object({
  //   userName: Joi.string().required().min(2),
  //   lastname: Joi.string().required().min(2)
  // })
  authLoginInSchema: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6),
  }),
  authRegisterSchema: Joi.object({
    firstName: Joi.string().required().min(2),
    lastName: Joi.string().required().min(2),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6),
  })
}

module.exports = {
  validateParam,
  validateBody,
  schemas,
}
