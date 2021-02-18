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

var update = (accntInfoObj) =>{
  return new Promise((resolve, reject)=>{
    CheckoutDocument.findByIdAndUpdate({ _id : accntInfoObj.dbTracker}, accntInfoObj, {}, ()=>{
      console.log('hello')
      CheckoutDocument.find({})
        .then((res)=>{
          console.log(res)
          resolve(res)
        })
    })
  })
}

module.exports.save = save;
module.exports.update = update