const router = require('express').Router();
const { json } = require('stream/consumers');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// Gets all the categories data it also grabs products in each category.
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [Product]
    });
      res.status(200).json(categories);
  } catch (err){
    console.log(err)
  }
});
      
//findByPk method finds the single id assoicated with the category it also includes the product.
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
        include:[Product]
    })

    if (!category) {
        return res.status(400).json({message: 'Category not found!'})
     }

    res.status(200).json(category)
} catch (err) {
    console.log(err)
}
});
// Creates a new category
// model to create a new category it {"category_name": "<name>"}
router.post('/', async (req, res) => {
  try{
    const categoriesAdd = await Category.create({category_name: req.body.category_name})
    res.status(200).json(categoriesAdd)
  }catch(err){
    console.log(err)
  }
  
});
// Updates a existing category
router.put('/:id', async (req, res) => {
  try {
    const categoryChange = await Category.update(req.body, {
      where:{
        id:req.params.id
      }
    })

    if (!categoryChange) {
        return res.status(400).json({message: 'Category not found!'})
     }

    res.status(200).json(categoryChange)
} catch (err) {
    console.log(err)
}
});
//Deletes a Category by the id
router.delete('/:id', async (req, res) => {
  try {
    const categoryDelete = await Category.destroy({
      where: {
        id:req.params.id
      }
    })
    if (!categoryDelete) {
      return res.status(400).json({message: 'Category not found!'})
   }

  res.status(200).json(categoryDelete)
} catch (err) {
  console.log(err)
}
});

module.exports = router;
