const filterObject = (data, fields) =>
  Object.keys(data)
    .filter((key) => fields.includes(key))
    .reduce((obj, key) => {
      obj[key] = data[key];
      return obj;
    }, {});

const testBodyMiddleware = (req, res, next) => {
  console.log(req.body);
  res.end();
};
module.exports = { filterObject, testBodyMiddleware };
