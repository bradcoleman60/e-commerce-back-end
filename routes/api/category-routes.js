const router = require("express").Router();
const { where } = require("sequelize");
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  const allCategory = await Category.findAll({
    //Includes the Product table in output
    include: [{ model: Product }],
  });
  return res.json(allCategory);

});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  const specificCategory = await Category.findByPk(req.params.id, {
     //Includes the Product table in output
    include: [{ model: Product }],
  });
  return res.json(specificCategory);

});

router.post("/", (req, res) => {
  const { category_name } = req.body;
  // create a new category

  Category.create({
    category_name,
  })
    .then((newCategory) => {
      res.json(newCategory);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/:id", (req, res) => {
  const { category_name } = req.body;
  // update a category by its `id` value
  Category.update(
    {
      category_name,
    },
    {
      where: { id: req.params.id },
    }
  )
    .then((updatedCategory) => {
      res.json(updatedCategory);
    })
    .catch((err) => res.json(err));
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: { id: req.params.id },
  })
    .then((deleteCategory) => {
      res.json(deleteCategory);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
