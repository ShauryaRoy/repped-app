const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
const cors = require('cors');
app.use(cors());

// MongoDB Connection
const mongoURI = 'mongodb+srv://shauryaroy2004:kesSt76JBPEZ3D0H@cluster0.qe24xtj.mongodb.net/';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('Error connecting to MongoDB:', err));

// Define Product Schema and Model

const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    img: [String],
    asin: String,
    price: Number,
    mrp: Number,
    rating: Number,
    ratingTotal: Number,
    discount: Number,
    seller: String,
    purl: String
});

const Product = mongoose.model('Product', productSchema);


app.get("/products", async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const startIndex = (page - 1) * limit;

        const products = await Product.find().skip(startIndex).limit(limit);

        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
