const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  const allTags = await  Tag.findAll(
    {
      include:[{ model: Product}]
    }
  );
  return res.json(allTags)

  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  const specificTag = await  Tag.findByPk(req.params.id,
    {
      include:[{ model: Product}]
    }
  );
  return res.json(specificTag)
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  // create a new tag
  const {tag_name} = req.body
  // create a new category

  Tag.create({
    tag_name
  }).then((newTag) => {
    res.json(newTag);
  })
  .catch((err) => {
    res.json(err);
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  const {tag_name} = req.body
  Tag.update({
    tag_name} , {
      where: {id: req.params.id}
    })
    .then((updatedTag) => {
      res.json(updatedTag)
    })
    .catch((err) => res.json(err))
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy(
    {
    where: {id: req.params.id}
  })
  .then((deleteTag) =>{
    res.json(deleteTag)
  })
  .catch((err) => res.json(err))
});

module.exports = router;
