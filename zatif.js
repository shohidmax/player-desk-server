const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const bodyParser = require('body-parser');
// const { createCanvas, loadImage } = require('canvas');
require('dotenv').config();

const { MongoClient, ServerApiVersion, ObjectId, ISODate } = require('mongodb');
const { error } = require('console');
const app = express();
const port = process.env.PORT || 3005;


const http = require('http').createServer(app);
const io = require('socket.io')(http);
app.use(express.static('public'));
//----------------------avatar api resorce -----------

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
// -----------------avatar api close ----------

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://atifsupermart202199:FGzi4j6kRnYTIyP9@cluster0.bfulggv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function node() {
 try {
  
  
 } catch (error) {
  
 }
 
  
}
node();
async function run() {
  try {
    await client.connect();
    console.log('db connected');
    const productCollection = client.db('atifdatamax').collection('product');
    const productsCollection = client.db('atifdatamax').collection('products');
    const products_2Collection = client.db('atifdatamax').collection('product_2');
    const brandCollection = client.db('atifdatamax').collection('brand');
    const supplierCollection = client.db('atifdatamax').collection('supplier');
    const groupCollection = client.db('atifdatamax').collection('group');
    const ssrCollection = client.db('atifdatamax').collection('ssr');
    const shopCollection = client.db('atifdatamax').collection('shop');
    const SaleCollection = client.db('atifdatamax').collection('sale');
    const HoldCollection = client.db('atifdatamax').collection('hold');
    const proddCollection = client.db('atifdatamax').collection('prodd');
    const wholesaleCollection = client.db('atifdatamax').collection('wholesale');
      // account temporary code for atif super mart
      const accountsCollection = client.db('atifdatamax').collection('accounts');
      const bankCollection = client.db('atifdatamax').collection('bank');
      const noteCollection = client.db('atifdatamax').collection('note');
      const costCollection = client.db('atifdatamax').collection('Cost');
      const dueCollection = client.db('atifdatamax').collection('Due');
      const addMoneyCollection = client.db('atifdatamax').collection('addMoney');
      const todaysaleCollection = client.db('atifdatamax').collection('todaysale');
      const todayrestCollection = client.db('atifdatamax').collection('restamound');
      const nestcortCollection = client.db('atifdatamax').collection('nestcort');
      const lotary = client.db('atifdatamax').collection('lotary');
      const deletedStored = client.db('atifdatamax').collection('delet'); 


       // Delete all data from the MongoDB collection
    app.get('/api/delete', async (req, res) => {
      const result = await bankCollection.deleteMany({});
      const result2 = await noteCollection.deleteMany({});
      const result3 = await costCollection.deleteMany({});
      const result4 = await dueCollection.deleteMany({});
      const result5 = await addMoneyCollection.deleteMany({});
      const result6 = await todaysaleCollection.deleteMany({});
      const result7 = await todayrestCollection.deleteMany({});
      const result8 = await nestcortCollection.deleteMany({});
      res.send(result);
    });
    app.get('/api/v3/finalsubmit', async(req, res) =>{
    const date = new Date();
      res.send( date)
    })
    app.post('/api/v3/finalsubmit', async (req, res) => {
      const accounts = req.body;
      const result = await accountsCollection.insertOne(accounts);
      res.send(result)
    }); 
    //     product display
    // ----------------------------------------------------------------
    app.get('/api/qqq',   async(req, res) =>{
     const id = req.params.id;
     const  date = new Date();
     console.log(date);
     res.send('bacfdfd', date)
    }) 
    //-------------------avatar making api -----------------------------
    // Sample route for image upload and 3D avatar conversion
app.post('/api/convertTo3DAvatar', upload.single('image'), async (req, res) => {
  try {
    // Get uploaded image data
    const imageData = req.file.buffer; 
    // Process the image (replace this with your 3D conversion logic)
    const avatarImage = await processImage(imageData); 
    // Send the 3D avatar image as a response
    res.set('Content-Type', 'image/png');
    res.send(avatarImage);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error processing image');
  }
});

// Function to process the image (replace this with your 3D conversion logic)
async function processImage(imageData) {
  const canvas = createCanvas(200, 200);
  const ctx = canvas.getContext('2d');

  // Load the image onto the canvas
  const img = await loadImage(imageData);
  ctx.drawImage(img, 0, 0, 200, 200);

  // Add your 3D conversion logic here

  // For simplicity, this example just returns the processed image as a Buffer
  return canvas.toBuffer('image/png');
}


    // ----------------- avtar api making close -------------------------



    app.get('/api/accounts/:id',   async(req, res) =>{
     const id = req.params.id;
     const query = {_id: ObjectId(id)};
     const booking = await accountsCollection.findOne(query);
     res.send(booking);
    })
    
    app.get('/api/accounts', async (req, res) => {
      const query = {};
      const cursor = accountsCollection.find(query);
      const accounts = await cursor.toArray();
      res.send(accounts);
    });
    app.get('/api/wholesale', async (req, res) => {
      const query = {};
      const cursor = wholesaleCollection.find(query);
      const accounts = await cursor.toArray();
      res.send(accounts);
    });
    app.get('/api/lotary', async (req, res) => {
      const query = {};
      const cursor = lotary.find(query);
      const Lotary = await cursor.toArray();
      res.send(Lotary);
    });
    app.get('/api/bank', async (req, res) => {
      const query = {};
      const cursor = bankCollection.find(query);
      const bank = await cursor.toArray();
      res.send(bank);
    });
    app.get('/api/note', async (req, res) => {
      const query = {};
      const cursor = noteCollection.find(query);
      const note = await cursor.toArray();
      res.send(note);
    });
    app.get('/api/cost', async (req, res) => {
      const query = {};
      const cursor = costCollection.find(query);
      const cost = await cursor.toArray();
      res.send(cost);
    });
    app.get('/api/due', async (req, res) => {
      const query = {};
      const cursor = dueCollection.find(query);
      const due = await cursor.toArray();
      res.send(due);
    });
    app.get('/api/addmoney', async (req, res) => {
      const query = {};
      const cursor = addMoneyCollection.find(query);
      const due = await cursor.toArray();
      res.send(due);
    });
    app.get('/api/todaysale', async (req, res) => {
      const query = {};
      const cursor = todaysaleCollection.find(query);
      const todaysale = await cursor.toArray();
      res.send(todaysale);
    });
    app.get('/api/todayrestamound', async (req, res) => {
      const query = {};
      const cursor = todayrestCollection.find(query);
      const todayrest = await cursor.toArray();
      res.send(todayrest);
    });
    app.get('/api/nextcort', async (req, res) => {
      const query = {};
      const cursor = nestcortCollection.find(query);
      const nextcort = await cursor.toArray();
      res.send(nextcort);
    });


     // all post item
     app.post('/api/lotary', async (req, res) => {
      const nextcort = req.body;
      const result = await lotary.insertOne(nextcort);
      res.send(result)
    });
     app.post('/api/parchesreceve', async (req, res) => {
      const nextcort = req.body;
      
      res.send(nextcort)
    });
     app.post('/api/nextcort', async (req, res) => {
      const nextcort = req.body;
      const result = await nestcortCollection.insertOne(nextcort);
      res.send(result)
    });
     app.post('/api/todaysale', async (req, res) => {
      const todaysale = req.body;
      const result = await todaysaleCollection.insertOne(todaysale);
      res.send(result)
    });
     app.post('/api/todayrestamound', async (req, res) => {
      const todayrest = req.body;
      const result = await todayrestCollection.insertOne(todayrest);
      res.send(result)
    });
     app.post('/api/accounts', async (req, res) => {
      const accounts = req.body;
      const result = await accountsCollection.insertOne(accounts);
      res.send(result)
    });
    app.post('/api/bank', async (req, res) => {
      const bank = req.body;
      const result = await bankCollection.insertOne(bank);
      res.send(result) 
    });
    app.post('/api/note', async (req, res) => {
      const note = req.body;
      const result = await noteCollection.insertOne(note);
      res.send(result)
    });
    app.post('/api/cost', async (req, res) => {
      const cost = req.body;
      const result = await costCollection.insertOne(cost);
      res.send(result)
    });
    app.post('/api/due', async (req, res) => {
      const due = req.body;
      const result = await dueCollection.insertOne(due);
      res.send(result)
    });
    app.post('/api/addmoney', async (req, res) => {
      const due = req.body;
      const result = await addMoneyCollection.insertOne(due);
      res.send(result)
    });
    app.get('/api/accountsreportbydate', async (req, res) => {
      const { sdate, edate } = req.query;
      console.log(sdate , edate); 
      const query = {};
      const cursor = accountsCollection.find(query);
      const Accounts = await cursor.toArray();
      const startdate = new Date(sdate);
      const enddate = new Date(edate);
      const filterdate = Accounts.filter(a => {
        const date = new Date(a.Hisab_Date);
        return (date >= startdate && date <= enddate);
      }); 
      res.send(filterdate);
    });
    app.get('/api/sale-v1-date', async (req, res) => {
      const { sdate, edate } = req.query;
      console.log(sdate , edate); 
      const query = {};
      const cursor = SaleCollection.find(query);
      const salelist = await cursor.toArray();
      const startdate = new Date(sdate);
      const enddate = new Date(edate);
      const filterdate = salelist.filter(a => {
        const date = new Date(a.Sale_Date);
        return (date >= startdate && date <= enddate);
      }); 
      res.send(filterdate);
    });
 
    // delete one 
    app.delete('/api/lotary/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await lotary.deleteOne(query);
      res.send(result);
    })
    app.delete('/api/nextcort/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await nestcortCollection.deleteOne(query);
      res.send(result);
    })
    app.delete('/api/addmoney/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await addMoneyCollection.deleteOne(query);
      res.send(result);
    })
    app.delete('/api/bank/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await bankCollection.deleteOne(query);
      res.send(result);
    })
    app.delete('/api/cost/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await costCollection.deleteOne(query);
      res.send(result); 

    })
    app.delete('/api/saled/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await SaleCollection.deleteOne(query);
      res.send(result); 

    })
    app.delete('/api/accounts/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      console.log(query);
      const quary_d_data = await accountsCollection.findOne(query)
      const stresata = await deletedStored.insertOne(quary_d_data);

      const result = await accountsCollection.deleteOne(query);
      res.send(result); 

    })
    app.delete('/api/note/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await noteCollection.deleteOne(query);
      res.send(result); 

    })
    app.delete('/api/due/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await dueCollection.deleteOne(query);
      res.send(result); 

    })
    app.delete('/api/todaysale/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await todaysaleCollection.deleteOne(query);
      res.send(result); 

    })
    app.delete('/api/todayrestamound/:id', async (req, res) => { 
      const id = req.params.id;
      console.log(id);
      const query = { _id: ObjectId(id) };
      const result = await todayrestCollection.deleteOne(query);
      res.send(result); 

    })
    // Delete all data from the MongoDB collection
    app.get('/api/delete', async (req, res) => {
        const result = await dueCollection.deleteMany({});
        res.send(result);
    });
    //-----------------------------------------------------------------

    app.get('/api/product', async (req, res) => {
      const query = {};
      const cursor = productCollection.find(query);
      const product = await cursor.toArray();
      res.send(product);
    });
    app.get('/api/products', async (req, res) => {
      const query = {};
      const cursor = productsCollection.find(query);
      const produ = await cursor.toArray();
      res.send(produ);
    });
    app.get('/api/products/v2', async (req, res) => {
      const query = {};
      const cursor = products_2Collection.find(query);
      const produ = await cursor.toArray();
      res.send(produ);
    });
    //-----------------------------------------------------------------------------------
    const products = [
      { id: 1, name: 'Product 1', price: 20.99 },
      { id: 2, name: 'Product 2', price: 15.49 },
      { id: 3, name: 'Product 3', price: 25.00 },
      { id: 4, name: 'Product 3', price: 25.00 },
      { id: 5, name: 'Product 3', price: 25.00 },
      { id: 6, name: 'Product 3', price: 25.00 },
      { id: 7, name: 'Product 3', price: 25.00 },
      { id: 8, name: 'Product 3', price: 25.00 },
      { id: 9, name: 'Product 3', price: 25.00 },
      { id: 10, name: 'Product 3', price: 25.00 },
      { id: 11, name: 'Product 3', price: 25.00 },
      { id: 12, name: 'Product 3', price: 25.00 },
      { id: 13, name: 'Product 3', price: 25.00 },
      { id: 14, name: 'Product 3', price: 25.00 },
      { id: 15, name: 'Product 3', price: 25.00 },
      { id: 16, name: 'Product 3', price: 25.00 },
      { id: 17, name: 'Product 3', price: 25.00 },
      { id: 18, name: 'Product 3', price: 25.00 },
      { id: 19, name: 'Product 3', price: 25.00 },
      { id: 20, name: 'Product 3', price: 25.00 },
      { id: 21, name: 'Product 3', price: 25.00 },
      { id: 22, name: 'Product 3', price: 25.00 },
      { id: 23, name: 'Product 3', price: 25.00 },
      { id: 24, name: 'Product 3', price: 25.00 },
      { id: 25, name: 'Product 3', price: 25.00 },
      { id: 26, name: 'Product 3', price: 25.00 },
     
    ];
    app.post('/api/products/v2/limit', async (req, res) => { 
      const cursor = await products_2Collection.find({}).toArray(); 
      const firstdata = req.body.firstdata || 0;
      const lastdata = req.body.lastdata || 20;
      const first10Products = cursor.slice(firstdata, lastdata); 
      res.send(first10Products);
    });

    //-----------------------------------------------------------------------------------

    app.get('/api/group', async (req, res) => {
     
      const cursor = await groupCollection.find({}).toArray(); 
      res.send(cursor);
    });
    app.get('/api/brand', async (req, res) => {
      const query = {};
      const cursor = brandCollection.find(query);
      const product = await cursor.toArray();
      res.send(product);
    });
    app.get('/api/supplier', async (req, res) => {
      const query = {};
      const cursor = supplierCollection.find(query);
      const product = await cursor.toArray();
      res.send(product);
    });
    app.get('/api/ssr', async (req, res) => {
      const query = {};
      const cursor = ssrCollection.find(query);
      const ssr = await cursor.toArray();
      res.send(ssr);
    });
    app.get('/api/shop', async (req, res) => {
      const query = {};
      const cursor = shopCollection.find(query);
      const shop = await cursor.toArray();
      res.send(shop);
    });
    app.get('/api/sale', async (req, res) => {
      const query = {};
      const cursor = SaleCollection.find(query);
      const shop = await cursor.toArray();
      res.send(shop);
    });
    app.get('/api/hold', async (req, res) => {
      const query = {};
      const cursor = HoldCollection.find(query);
      const hold = await cursor.toArray();
      res.send(hold);
    });
    app.get('/api/prod', async (req, res) => {
      const query = {};
      const cursor = proddCollection.find(query);
      const hold = await cursor.toArray();
      res.send(hold);
    });
    app.get('/api/invoicenumber', async (req, res) => { 
      // const array1 = [5,7,9, 11];
      // console.log(array1[array1.length -1]);
      const query = {};
      const cursor = SaleCollection.find(query);
      const sale = await cursor.toArray();
      res.send(sale);
    });

    // get damage speacific product by barcode
    app.get('/api/damage-stock-update/:id', async (req, res) => {
      const id = req.params.id;
      const querys = {};
      const cursor = productsCollection.find(querys);
      const produ = await cursor.toArray();
      const getSerarchProduct = produ.find((p) => p.BarCode == id);
      res.send(getSerarchProduct);
    })
    app.get('/api/hold/:id', async (req, res) => {
      const id = req.params.id;
      const querys = {};
      const cursor = HoldCollection.find(querys);
      const produ = await cursor.toArray();
      const getSerarchProduct = produ.find((p) => p.Hold_ID == id); 
      res.send(getSerarchProduct);
      const query = { _id: ObjectId(getSerarchProduct._id) };
      const result = await HoldCollection.deleteOne(query);
      res.send('hold deleted')
    }) 

    //  filter datat between tow date 
    app.get('/api/datefilter', async (req, res) => {
      const { sdate, edate } = req.query;
      console.log(sdate , edate);
      // const query = {};
      // const cursor = SaleCollection.find(query);
      // const shop = await cursor.toArray(cursor);
      const query = {};
      const cursor = SaleCollection.find(query);
      const shop = await cursor.toArray(); 
      const startdate = new Date(sdate);
      const enddate = new Date(edate);
      const filterdate = shop.filter(a => {
        const date = new Date(a.date);
        return (date >= startdate && date <= enddate);
      }); 
      res.send(filterdate);
    });
 

    // get with speacific product stock
    app.get('/api/products/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const booking = await productsCollection.findOne(query);
      res.send(booking);
    })

    app.put('/handleAddToDamage/:id', async (req, res) => {
      const id = req.params.id;
      const updatedStock = req.body;
      const filter = { _id: ObjectId(id) };
      const options = { upsert: true };
      const updatedDoc = {
        $set: {
          Damage_Quntity: updatedStock.reStock
        }
      };
      const result = await productsCollection.updateOne(filter, updatedDoc, options);
      res.send(result);
    });


//,,,,,,,,,,,,saju vai due drop,,,,,,,,,,,,,,,,,, 01648211024

 

    // ----------- Final  sales Data ------
    app.put('/finalsale', async (req, res) => {
      // const id = req.params.id; 
      const updatedStock = req.body;
      const arry = updatedStock.Sale_Data; 
      const query = {};
      const cursor = SaleCollection.find(query);
      const sale = await cursor.toArray();  
      const sdate = await new Date(updatedStock.Sale_Date);
      const edate = await new Date(updatedStock.Sale_Date);
      const filterdate = await sale.filter(a => {
        const date = new Date(a.date);
        return (date >= sdate && date <= edate);
      });
      console.log(filterdate, '/////////////////-----------------------');
 
      let invoice_list = [];
      console.log(invoice_list, sale.length,  'sale data ---------');
      //------------------------------------
      if (sale.length == 0 ) {  
        console.log('-----------------------------log if  ----------------');

        for await (const pro of arry) {
          const ID = pro._id;
          // console.log(pro._id, pro.StockQty - pro.orderq, pro);
          const update = pro.StockQty - pro.orderq;
          const filter = { _id: ObjectId(ID) };
          const options = { upsert: true };
          const updatedDoc = {
            $set: {
              StockQty: update
            }
          };
          const result = await productsCollection.updateOne(filter, updatedDoc, options);
          console.log(result);
        }
        // ---------------------------------------------- for  update  --------------
        const result = await SaleCollection.insertOne(updatedStock);
   
      } 
      else{
        console.log('-----------------------------else   ----------------');
        
        for await (const inv of sale){
          invoice_list=[...invoice_list, inv.Sale_Invoice.slice(-5)]
           console.log(inv.Sale_Invoice.slice(-5));
        }
        const new_inv_num = (Math.max(...invoice_list) + 1).toString();
        const chng = updatedStock.Sale_Invoice.slice(-5)
        updatedStock.Sale_Invoice = updatedStock.Sale_Invoice.replace(chng, new_inv_num)

        for await (const pro of arry) {
          const ID = pro._id;
          // console.log(pro._id, pro.StockQty - pro.orderq, pro);
          const update = pro.StockQty - pro.orderq;
          const filter = { _id: ObjectId(ID) };
          const options = { upsert: true };
          const updatedDoc = {
            $set: {
              StockQty: update
            }
          };
          const result = await productsCollection.updateOne(filter, updatedDoc, options);
          console.log(result);
        }
        const results = await SaleCollection.insertOne(updatedStock);

        // ---------------------------------------------- for  update  --------------
        // const result = await SaleCollection.insertOne(updatedStock);
  
      }
      
        
      //------------------------------------

      
      // ---------------------------- update close ---------------------------------- 
      res.send({ 'data': 'succesfully data updated',updatedStock  });
    })
 
    // add brand 
    app.post('/api/brand', async (req, res) => {
      const newBrand = req.body; 
      const result = await brandCollection.insertOne(newBrand);
      res.send(result)
    });

    app.post('/api/sale', async (req, res) => {
      const newSale = req.body; 
      const result = await SaleCollection.insertOne(newSale);
      res.send(result)
    });

    // add supplier 
    app.post('/api/supplier', async (req, res) => {
      const newSSR = req.body; 
      const result = await supplierCollection.insertOne(newSSR);
      res.send(result)
    });

    // add ssr 
    app.post('/api/ssr', async (req, res) => {
      const newSSR = req.body; 
      const result = await ssrCollection.insertOne(newSSR);
      res.send(result)
    });
    app.post('/api/wholesale', async (req, res) => {
      const newSSR = req.body; 
      const result = await wholesaleCollection.insertOne(newSSR);
      res.send(result)
    });

    // add ssr 
    app.post('/api/shop', async (req, res) => {
      const newshop = req.body; 
      const result = await shopCollection.insertOne(newshop);
      res.send(result)
    });

    // add ssr 
    app.post('/api/holddata', async (req, res) => {
      const Holddata = req.body; 
      const result = await HoldCollection.insertOne(Holddata);
      res.send(result)
    });

  
    app.get('/api/search/:target', async (req, res) => {
      let q = req.params; 
      let result = await productsCollection.find({
        "$or": [

          {
            Group: { $regex: req.params.target }
          },
          {
            Product: { $regex: req.params.target }
          },
          {
            Brand: { $regex: req.params.target }
          },
          {
            Style: { $regex: req.params.target }
          },
          {
            BarCode: { $regex: req.params.target }
          },
        ]
      });
      let rest = await result.toArray();
      // console.log(rest);
      res.send(rest);
    });


    app.get('/api/shoppurchase', async (req, res) => {
      const { supp, barcode } = req.query;
      // console.log({ supp, barcode });
      let result = await productsCollection.find({
        "$or": [
          {
            Supplier_Name: { $regex: supp }
          }
        ]
      });
      let rest = await result.toArray();
      const final = await rest.find(r => r.BarCode.toString() === barcode.toString());
      if (final) {
        res.send(final);
      } else {
        res.send({ data: 'data not found' });
      }
    });
    // deleting item
    app.delete('/api/brand/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await brandCollection.deleteOne(query);
      res.send(result);
    })
  }
  finally {

  }

}
run().catch(console.dir);




app.get("/", (req, res) => {
  res.send(`<h1 style="text-align: center;
      color: red;"> Server is Running at <span style="color: Blue;">${port}</span></h1>`);
});

app.listen(port, () => {
  console.log("Atif super  mart server running at  : ", port);
});


 

//  function previous_year_artist(req, res, next) {
//         var dateTimeTofilter = moment().subtract(1, 'year');
//         var filter = {
//             "date_added": {
//                 $gte: new Date(dateTimeTofilter._d)
//             }
//         };
//         db.collection.find(
//             filter
//         ).toArray(function(err, result) {
//             if (err) return next(err);
//             res.send(result);
//         });

//     }