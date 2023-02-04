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
  through: 'ProductTag',
  foreignKey: 'id'
})

// ProductTag.belongsTo(Product,{
//   foreignKey: 'product_id'
// })



// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, { 
  through: 'ProductTag',
  foreignKey: 'prod_id'

});

// ProductTag.belongsTo(Tag, {
//   foreignKey: 'id'
// })

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
