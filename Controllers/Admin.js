const Expense = require("../Models/Expense");

exports.AddExpense = (req, res, next) => {
  const Description = req.body.expenseDesc;
  const Amount = req.body.expenseAmount;
  const Category = req.body.expenseCategory;
  Expense.create({
    Description,
    Amount,
    Category,
  });
  return res.json([]);
};

// exports.postAddProduct = (req, res, next) => {
//   const title = req.body.title;
//   const imageUrl = req.body.imageUrl;
//   const price = req.body.price;
//   const description = req.body.description;
//   Product.create({
//     title: title,
//     price: price,
//     imageUrl: imageUrl,
//     description: description,
//   })
//     .then(() => res.redirect("/"))
//     .catch((err) => console.log(err));
// };

exports.deleteExpense = (req, res, next) => {
  const expenseId = req.params.expenseID;
  console.log(expenseId);
  Expense.findByPk(expenseId)
    .then((expense) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
      res.header("Access-Control-Allow-Headers", "Content-Type");
      if (!expense) {
        res.json([{ Deleted: false }]);
      }
      return expense.destroy();
    })
    .then(() => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
      res.header("Access-Control-Allow-Headers", "Content-Type");
      console.log("DELETED SUCCESSFULLY");
      res.json([{ Deleted: true }]);
    })
    .catch((err) => console.log(err));
};

// exports.getEditProduct = (req, res, next) => {
//   const editMode = req.query.edit;
//   if (!editMode) {
//     return res.redirect("/");
//   }
//   const prodId = req.params.productId;
//   Product.findByPk(prodId)
//     .then((product) => {
//       if (!product) {
//         return res.redirect("/");
//       }
//       res.render("admin/edit-product", {
//         pageTitle: "Edit Product",
//         path: "/admin/edit-product",
//         editing: editMode,
//         product: product,
//       });
//     })
//     .catch((err) => console.log(err));
// };

exports.getExpenses = (req, res, next) => {
  Expense.findAll()
    .then((expense) => {
      //   res.header("Access-Control-Allow-Origin", "*");
      //   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
      //   res.header("Access-Control-Allow-Headers", "Content-Type");
      res.json(expense);
    })
    .catch((err) => console.log(err));
};
