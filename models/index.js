// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');



// Categories have many Products AND Products belongsTo Category

Category.hasMany(Product, {
  foreignKey:'category_id',
  onDelete: 'CASCADE'
})

Product.belongsTo(Category,{
  foreignKey: 'category_id'
})


// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag,{
  through: 'product_tag'
})


// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, { 
  through: 'product_tag'

});

/////////////////// THE FOLLOWING GETS MY PRODUCT TAGS ///////////////////

// Product.hasMany(ProductTag, {
//   foreignKey: 'product_id'
// })

// ProductTag.belongsTo(Product,{
//   foreignKey: 'id'
// })

// ProductTag.hasMany(Tag,{
//   foreignKey: 'id'
// })

// Tag.belongsTo(ProductTag,{
//   foreignKey: 'tag_id'
// })


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
