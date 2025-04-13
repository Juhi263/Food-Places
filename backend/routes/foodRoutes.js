const express = require("express");
const router = express.Router();
const Food = require("../models/food"); 

const foodData = [
  {
    name: "The Plant Story",
    location: "Pratap Nagar",
    type: "restaurant",
    cost: 700,
    cuisine: "Multicuisine",
    specialty: "Lasagna , Pizza",
    foodType: "veg",
    image: "plant.png",
    dineIn: true,
    dineOut: true,
    takeaway: true,
  },
  {
    name: "White Earth",
    location: "PWD Colony",
    type: "restaurant",
    cost: 600,
    cuisine: "Multicuisine",
    specialty: "Pizza,Malai Kofta",
    foodType: "veg and non-veg",
    image: "white.png",
    dineIn: false,
    dineOut: true,
    takeaway: true,
  },
  {
    name: "Café Frespresso and 360 wood fire pizzeria",
    location: "Circuit House Rd",
    type: "cafe",
    cost: 300,
    cuisine: "Fast Food",
    specialty: "Coffee , Pizza",
    foodType: "veg",
    image: "frespresso.png",
    dineIn: true,
    dineOut: false,
    takeaway: true,
  },
  {
    name: "Janta Sweet Home",
    location: "Nai Sarak",
    type: "local",
    cost: 100,
    cuisine: "Snacks",
    specialty: "Mawa Kachori",
    foodType: "veg",
    image: "janta.png",
    dineIn: true,
    dineOut: false,
    takeaway: true,
  },
  {
    name: "Indique",
    location: "Clock Tower",
    type: "restaurant",
    cost: 600,
    cuisine: "Mughlai",
    specialty: "Biryani",
    foodType: "non-veg",
    image: "indique.png",
    dineIn: true,
    dineOut: true,
    takeaway: true,
  },
  {
    name: "Shaandar Restaurant",
    location: "Jalori Gate",
    type: "restaurant",
    cost: 350,
    cuisine: "Rajasthani",
    specialty: "Gulab Jamun Sabji",
    foodType: "veg",
    image: "shaandar.png",
    dineIn: true,
    dineOut: false,
    takeaway: true,
  },
  {
    name: "Gypsy Restaurant",
    location: "Sardarpura",
    type: "restaurant",
    cost: 450,
    cuisine: "Thali",
    specialty: "Rajasthani Thali",
    foodType: "veg",
    image: "gypsy.png",
    dineIn: true,
    dineOut: false,
    takeaway: true,
  },
  {
    name: "On The Rocks",
    location: "Ajit Bhawan",
    type: "restaurant",
    cost: 700,
    cuisine: "Continental",
    specialty: "Grilled Chicken",
    foodType: "non-veg",
    image: "otr.png",
    dineIn: true,
    dineOut: true,
    takeaway: true,
  },
  {
    name: "The Laughing B Café",
    location: "Panch Batti",
    type: "cafe",
    cost: 300,
    cuisine: "Italian",
    specialty: "Pasta Alfredo",
    foodType: "veg",
    image: "laughingb.jpg",
    dineIn: true,
    dineOut: false,
    takeaway: true,
  },
  {
    name: "Chaturbhuj Rameshchand",
    location: "Inside Jalori Gate",
    type: "local",
    cost: 80,
    cuisine: "Snacks",
    specialty: "Gulab Jamun",
    foodType: "veg",
    image: "chaturbhuj.jpg",
    dineIn: false,
    dineOut: true,
    takeaway: true,
  },
  {
    name: "Highway Delight",
    location: "Pal Bypass Road",
    type: "dhaba",
    cost: 200,
    cuisine: "North Indian",
    specialty: "Tandoori Roti & Mix Veg",
    foodType: "veg",
    image: "highway.jpg",
    dineIn: true,
    dineOut: true,
    takeaway: true,
  },
  {
    name: "Stepwell Café",
    location: "Toorji Ka Jhalra",
    type: "cafe",
    cost: 320,
    cuisine: "Continental",
    specialty: "Avocado Toast",
    foodType: "veg",
    image: "stepwell.jpg",
    dineIn: true,
    dineOut: true,
    takeaway: true,
  },
  {
    name: "Pokar Sweet Home",
    location: "Sardarpura",
    type: "local",
    cost: 90,
    cuisine: "Snacks",
    specialty: "Pyaaz Kachori",
    foodType: "veg",
    image: "pokar.jpg",
    dineIn: false,
    dineOut: true,
    takeaway: true,
  },
  {
    name: "Maharaja bhog kitchen",
    location: "Paota",
    type: "restaurant",
    cost: 200,
    cuisine: "Indian",
    specialty: "Thali",
    foodType: "veg",
    image: "maharaja.jpg",
    dineIn: true,
    dineOut: false,
    takeaway: true,
  },
  {
    name: "Sankalp Restaurant",
    location: "Residency Rd",
    type: "restaurant",
    cost: 380,
    cuisine: "South Indian",
    specialty: "Rava Dosa",
    foodType: "veg",
    image: "sankalp.jpg",
    dineIn: true,
    dineOut: false,
    takeaway: true,
  },
  {
    name: "Shri Mishrilal Hotel",
    location: "Clock Tower",
    type: "restaurant",
    cost: 200,
    cuisine: "Snacks",
    specialty: "Makhaniya Lassi",
    foodType: "veg",
    image: "mishrilal.jpg",
    dineIn: true,
    dineOut: false,
    takeaway: true,
  },
  {
    name: "Choudhary Namkeen",
    location: "Sardarpura",
    type: "local",
    cost: 200,
    cuisine: "Snacks",
    specialty: "Mirchi Bada",
    foodType: "veg",
    image: "choudhary.jpg",
    dineIn: false,
    dineOut: false,
    takeaway: true,
  },
  {
    name: "Jhankar Choti Haveli",
    location: "Makarana Mohalla",
    type: "restaurant",
    cost: 400,
    cuisine: "Multicuisine",
    specialty: "Rajasthani Thali",
    foodType: "veg",
    image: "jhankar.jpg",
    dineIn: true,
    dineOut: true,
    takeaway: false,
  },
  {
    name: "Indigo Restaurant",
    location: "Gulab Sagar",
    type: "restaurant",
    cost: 400,
    cuisine: "North Indian",
    specialty: "Laal Mas",
    foodType: "veg and non-veg",
    image: "indigo.jpg",
    dineIn: true,
    dineOut: true,
    takeaway: false,
  },
  {
    name: "The Curry's",
    location: "Makarana Mohalla",
    type: "restaurant",
    cost: 400,
    cuisine: "North Indian",
    specialty: "Laal Mas",
    foodType: "veg and non-veg",
    image: "curry.jpg",
    dineIn: true,
    dineOut: true,
    takeaway: false,
  },
];

// API to populate food data
router.post("/populate", async (req, res) => {
  try {
    let added = 0;
    for (const food of foodData) {
      const exists = await Food.findOne(food); // Avoid duplicates
      if (!exists) {
        await Food.create(food);
        added++;
      }
    }

    if (added === 0) {
      return res.status(400).json({ message: "All food entries already exist." });
    }

    res.status(201).json({ message: `${added} food places added successfully!` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API to filter food places
router.get("/foods", async (req, res) => {
  try {
    let query = {};

    if (req.query.type) query.type = req.query.type;
    if (req.query.maxCost) query.cost = { $lte: Number(req.query.maxCost) };
    if (req.query.vegetarian) query.vegetarian = req.query.vegetarian;
    if (req.query.dineIn) query.dineIn = req.query.dineIn === "true";
    if (req.query.takeaway) query.takeaway = req.query.takeaway === "true";

    const foods = await Food.find(query);
    res.json(foods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
