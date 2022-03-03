const Product = require("./productSchema");

exports.addProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    res.status(201).json({
      status: 201,
      message: "added successfully",
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: `Something wen't wrong + ${error}`,
    });
  }
};

exports.getProducts = async (req, res) => {
  try {
    Product.find({}, function (err, products) {
      if (!err) {
        var productArray = [];

        products &&
          products.forEach(function (product) {
            productArray.push(product);
          });

        res.send(productArray);
      } else {
        res.send([]);
      }
    });
  } catch (error) {
    console.log("unexpected error", error);
  }
};
