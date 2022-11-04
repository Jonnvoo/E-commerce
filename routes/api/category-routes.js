const router = require('express').Router();
const { json } = require('stream/consumers');
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
