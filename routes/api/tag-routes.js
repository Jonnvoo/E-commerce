const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

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

router.post('/', async (req, res) => {
  try{
    const tagAdd = await Tag.create({tag_name: req.body.tag_name})
    res.status(200).json(tagAdd)
  }catch(err){
    console.log(err)
  }
  
});

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
