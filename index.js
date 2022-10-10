const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
//middlewares
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@clusterdev.kbtv5zf.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

//Use JWT middleware

function verifyJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({ message: "Unauthorized User" });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {
    if (err) {
      return res.status(403).send({ message: "Forbidden 403" });
    }
    req.decoded = decoded;
    next();
  });
}

async function run() {
  try {
    await client.connect();
    console.log("connected MONGODB");
    const productCollection = client
      .db("pharmeasy_store")
      .collection("products");
    const productCollectionTest = client.db("testDB").collection("test");
    const userCollection = client.db("pharmeasy_store").collection("users");
    const orderCollection = client.db("pharmeasy_store").collection("orders");
    // all products
    app.get("/product", async (req, res) => {
      const query = {};
      const cursor = productCollection.find(query);
      const products = await cursor.toArray();
      res.send(products);
    });

    app.get("/product/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const product = await productCollection.findOne(query);
      res.send(product);
    });

    // category sort

    app.get("/product", async (req, res) => {
      const category = req.query.category;
      const cursor = productCollection.find({ category: category });
      const products = await cursor.toArray();
      res.send(products);
    });

    app.get("/product/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const product = await productCollection.findOne(query);
      res.send(product);
    });

    //single product entry update
    app.put("/product/:id", async (req, res) => {
      const product = req.body;
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: product,
      };
      const result = await productCollection.updateOne(
        query,
        updateDoc,
        options
      );

      res.send(result);
    });

    //Delete Products Admin
    app.delete("/product/:id", async (req, res) => {
      const id = req.params.id;

      const filter = { _id: ObjectId(id) };
      const result = await productCollection.deleteOne(filter);
      res.json(result);
    });

    //get all users
    app.get("/user", verifyJWT, async (req, res) => {
      const users = await userCollection.find({}).toArray();
      res.send(users);
    });

    //new user entry update
    app.put("/user/:email", async (req, res) => {
      const user = req.body;
      const email = req.params.email;
      const filter = { email: email };
      const options = { upsert: true };
      const updateDoc = {
        $set: user,
      };
      const result = await userCollection.updateOne(filter, updateDoc, options);
      const token = jwt.sign(
        { email: email },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "8h" }
      );
      res.send({ result, token });
    });

    //admin role entry update
    app.put("/user/admin/:email", verifyJWT, async (req, res) => {
      const email = req.params.email;
      const requestSender = req.decoded.email;
      const userAccount = await userCollection.findOne({
        email: requestSender,
      });
      if (userAccount.role === "admin") {
        const filter = { email: email };
        const updateDoc = {
          $set: { role: "admin" },
        };
        const result = await userCollection.updateOne(filter, updateDoc);

        res.send(result);
      } else {
        res.status(403).send({ message: "Forbidden 403" });
      }
    });
    //admin role remove update
    app.delete("/user/admin/:email", verifyJWT, async (req, res) => {
      const email = req.params.email;
      const requestSender = req.decoded.email;
      const userAccount = await userCollection.findOne({
        email: requestSender,
      });
      if (userAccount.role === "admin") {
        const filter = { email: email };
        const updateDoc = {
          $unset: { role: "admin" },
        };
        const result = await userCollection.updateOne(filter, updateDoc);

        res.send(result);
      } else {
        res.status(403).send({ message: "Forbidden 403" });
      }
    });

    //get admins
    app.get("/admin/:email", verifyJWT, async (req, res) => {
      const email = req.params.email;
      const user = await userCollection.findOne({ email: email });
      const isAdmin = user.role === "admin";
      res.send({ admin: isAdmin });
    });
    //get admins (super)
    app.get("/admin/super/:email", verifyJWT, async (req, res) => {
      const email = req.params.email;
      const user = await userCollection.findOne({ email: email });
      const isAdmin = user.admin === "super_admin";
      res.send({ superadmin: isAdmin });
    });

    //admin role entry update (super)
    app.put("/user/admin/super/:email", verifyJWT, async (req, res) => {
      const email = req.params.email;
      const requestSender = req.decoded.email;
      const userAccount = await userCollection.findOne({
        email: requestSender,
      });
      if (userAccount.role === "super_admin") {
        const filter = { email: email };
        const updateDoc = {
          $set: { role: "super_admin" },
        };
        const result = await userCollection.updateOne(filter, updateDoc);

        res.send(result);
      } else {
        res.status(403).send({ message: "Forbidden 403" });
      }
    });

    //all order collection
    app.post("/order", async (req, res) => {
      const order = req.body;
      const result = await orderCollection.insertOne(order);
      res.json({ success: true, order: result });
    });

    //get user specific orders
    app.get("/order", verifyJWT, async (req, res) => {
      const customer = req.query.email;
      const decodedEmail = req.decoded.email;
      if (customer === decodedEmail) {
        const query = { email: customer };
        const orders = await orderCollection.find(query).toArray();
        res.send(orders);
      } else {
        return res.status(403).send({ message: "Forbidden 403" });
      }
    });

    // admin add products

    app.post("/product", async (req, res) => {
      const products = req.body;
      const result = await productCollection.insertOne(products);
      res.send({ success: true, product: result });
    });
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("medicine store server");
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
