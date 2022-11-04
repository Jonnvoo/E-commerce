const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// Gets all the Tags
// It also includes the products associated with the Tags.
router.get('/', async (req, res) => {
  try {
    const tagsAll = await Tag.findAll({
      include: [Product]
    });
      res.status(200).json(tagsAll);
  } catch (err){
    console.log(err)
  }
});
// Gets a single tag by the id also includes the product.
router.get('/:id', async (req, res) => {
  try {
    const tagId = await Tag.findByPk(req.params.id, {
        include:[Product]
    })

    if (!tagId) {
        return res.status(400).json({message: 'Tag not found!'})
     }

    res.status(200).json(tagId)
} catch (err) {
    console.log(err)
}
});
// Creates a new id
// Should look like this when creating {"tag_name"= "<name of tag>"}
router.post('/', async (req, res) => {
  try{
    const tagAdd = await Tag.create({tag_name: req.body.tag_name})
    res.status(200).json(tagAdd)
  }catch(err){
    console.log(err)
  }
  
});
//Updates a single existing id in the data.
// The model to update is the same as creating.
router.put('/:id', async (req, res) => {
  try {
    const tagChange = await Tag.update(req.body, {
      where:{
        id:req.params.id
      }
    })

    if (!tagChange) {
        return res.status(400).json({message: 'Tag not found!'})
     }

    res.status(200).json(tagChange)
} catch (err) {
    console.log(err)
}
});

//Deletes a tag by the id
router.delete('/:id', async (req, res) => {
  try {
    const tagDelete = await Tag.destroy({
      where: {
        id:req.params.id
      }
    })
    if (!tagDelete) {
      return res.status(400).json({message: 'Tag not found!'})
   }

  res.status(200).json(tagDelete)
} catch (err) {
  console.log(err)
}
});

module.exports = router;
