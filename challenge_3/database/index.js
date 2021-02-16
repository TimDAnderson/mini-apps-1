const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/checkout', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//need to make a schema
const checkoutDocumentSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  address: String,
  line2: String,
  city: String,
  state: String,
  zip: Number,
  phone: Number,
  ccNumber: Number,
  expirData: String,
  cvv: Number,
  billingZip: Number
})

//need to have a model defined from that
const CheckoutDocument = mongoose.model('CheckoutDocument', checkoutDocumentSchema)

var save = (accntInfoObj) => {
  console.log('in the save function')
  console.log(accntInfoObj)
  console.log(accntInfoObj.name)
  let newCheckoutDocument = new CheckoutDocument({
    name: accntInfoObj.name,
    email: accntInfoObj.email,
    password: accntInfoObj.password,
    address: accntInfoObj.address,
    line2: accntInfoObj.line2,
    city: accntInfoObj.city,
    state: accntInfoObj.state,
    zip: accntInfoObj.zip,
    phone: accntInfoObj.phone,
    ccNumber: accntInfoObj.ccNumber,
    expirData: accntInfoObj.expirData,
    cvv: accntInfoObj.cvv,
    billingZip: accntInfoObj.billingZip
  })


  //create a document out of it

  //do a find to check for duplicates

  //if no duplicates then save to db


  return new Promise((resolve, reject)=>{
    newCheckoutDocument.save((err, newCheckoutDocument)=>{
      if (err) {
        reject(err);
      }
      CheckoutDocument.find({})
        .then((res)=>{
          console.log(res)
          resolve(res)
        })
    })

  })
}

// save()

module.exports.save = save;