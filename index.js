import express from "express";

const app = express();
const port = 5500;

let arr = [
    {
      "id": 2,
      "description": "Sweet and savory sauces relishes spreads and seasonings",
      "name": "Condiments"
    },
    {
      "id": 1,
      "description": "Soft drinks coffees teas beers and ales",
      "name": "Beverages"
    },
    {
      "id": 3,
      "description": "Desserts candies and sweet breads",
      "name": "Confections"
    },
    {
      "id": 4,
      "description": "Cheeses",
      "name": "Dairy Products"
    },
    {
      "id": 5,
      "description": "Breads crackers pasta and cereal",
      "name": "Grains/Cereals"
    },
    {
      "id": 6,
      "description": "Prepared meats",
      "name": "Meat/Poultry"
    },
    {
      "id": 7,
      "description": "Dried fruit and bean curd",
      "name": "Produce"
    },
    {
      "id": 8,
      "description": "Seaweed and fish",
      "name": "Seafood"
    }
  ]

app.get("/", (req, res) => {
    res.send(arr)
})

app.get("/:id", (req, res) => {
    const {id} = req.params
    arr = arr.find((x) => x.id === +id)
    res.send(arr)
})

// app.delete("/delete/:id", (req, res) => {
//     const { id } = req.params;
//     const index = arr.findIndex((item) => item.id === +id);
//     if (index !== -1) {
//       const deletedItem = arr.splice(index, 1); 
//       res.send(deletedItem); 
//     } else {
//       res.status(404).send("Item not found");
//     }
//   });

app.delete("/:id", (req, res) => {
    const { id } = req.params
    arr = arr.filter((x) => x.id !== +id)
    res.send(arr)
})


app.listen(port, (err) => {
    if(!err) {
        console.log(`Server running on port ${port}`);
    }
})