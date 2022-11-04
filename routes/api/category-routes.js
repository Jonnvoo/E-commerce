const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

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
router.post('/', async (req, res) => {
  try{
    const categoriesAdd = await Category.create({category_name: req.body.category_name})
    res.status(200).json(categoriesAdd)
  }catch(err){
    console.log(err)
  }
  
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
