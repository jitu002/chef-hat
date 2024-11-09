
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
require('dotenv').config();

const apiurl=process.env.API_URL;

const port = 3000;
const app = express();

const url = apiurl
console.log("MongoDB URI:", apiurl);

app.use(cors());
app.use(express.json());

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB Connected successfully");

        const db = mongoose.connection;
        console.log("Connected to database:", db.name);
    })
    .catch((error) => console.log("error", error));

const itemSchema = new mongoose.Schema({
    id: Number,
    image: String,
    content: String,
    price: Number
}, { 
    collection: 'items',
    strict: false 
});

const Item = mongoose.model("Item", itemSchema);

app.get("/items", async (req, res) => {
    try {
        console.log("Fetching data from backend.items collection");
        const items = await Item.find().lean();
        res.json(items);
    }
    catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Error fetching items" });
    }
});

const weekOptionSchema = new mongoose.Schema({
    "id": Number,
    "image": String,
    "heading": String,
    "content": String 
}, {
    collection: "weekoptions",
    strict: false    
});

const WeekOption = mongoose.model("WeekOption", weekOptionSchema);

app.get("/weekoptions", async (req, res) => {
    try {
       
        const weekoption = await WeekOption.find().lean();

        res.json(weekoption);
    }
    catch (error) {
       
        console.error("Error:", error);
        res.status(500).json({ error: "Error fetching week options" });
    }
});

const accordionSchema=new mongoose.Schema({
    "question":String,
    "answer":String
},{
    collection:"accordions",
    strict:false
})

const Accordion=mongoose.model("Accordion",accordionSchema)

app.get("/accordions",async(req,res)=>{
    try{
        const accordion=await Accordion.find().lean()
        res.json(accordion)    
    }
    catch{
        res.status(500).json({error:"Errot fetching accordions"})
    }
})


const wineSchema=new mongoose.Schema({
    "id":Number,
    "image":String,
    "heading":String,
    "content":String,
    "price":String
},{collection:"wine",strict:false})

const Wine=mongoose.model("Wine",wineSchema);

app.get("/wine",async(req,res)=>{
    try{
        const wine=await Wine.find().lean()
        res.json(wine)
    }
    catch(error){
        res.status(500).json({error:"Error fetching accordions"})
    }
})


const userSchema=new mongoose.Schema({
    "name":String,
    "username":String,
    "email":String,
    "password":String,
    "id":Number
},{collection:"user",strict:false})

const User=mongoose.model("User",userSchema)
app.post('/users', async (req, res) => {
    try {
      const { name,username,email,password } = req.body;
  
      
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ error: 'Username already exists.' });
      }
  
      
      const hashedPassword = await bcrypt.hash(password, 10);
  
      
      const newUser = new User({ name,username,email, password: hashedPassword });
  
      
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});