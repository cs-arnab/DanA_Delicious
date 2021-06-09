const express = require("express");
const router = express.Router();
const Pizza = require("../models/pizzaModel");

// my
// router.get("/getallpizzas",async (req,res)=>{
//     try{
//         const pizzas=await Pizza.find({})
//         res.send(pizzas)
//     }catch(error){
//         return res.status(400).json({massage:error});
//     }
// })

// instructor
router.get("/getallpizzas", async (req, res) => {
  try {
    const pizzas = await Pizza.find({});
    res.send(pizzas);
  } catch (error) {
    return res.status(400).json({ massage: error });
    console.log(error);
  }
});

module.exports = router;


