const express = require('express')
const fileUpload = require('express-fileupload');
var path = require('path')
const app = express()
var _ = require('underscore');
var fs = require('fs');

//html template, idk where to put it for now
var compiled = _.template(`
  <!DOCTYPE html>
  <html>
    <body>
      <h1>This is from the server</h1>
      <p>text</p>
      <div>This is HTML from the server</div>


    <div>
      <form action="http://localhost:3000/transformData" method="POST" target="_parent">
        <label for="fname">JSON TEXT HERE</label><br>
        <input type="text" id="fname" name="fname" value="Paste JSON in here"><br>
        <input type="submit" value="submit">
      </form>
    </div>



    <br>
    <br>

    <form action="http://localhost:3000/fileUpload" method="post" enctype="multipart/form-data">
    Select JSON File to upload:
    <input type="file" name="fileToUpload" id="fileToUpload">
    <input type="submit" value="Upload file" name="submit">
    </form>

    <br>
    <br>



      <textarea name="text1" cols="80" rows="10"><%= csvData %></textarea>


    </body>
    <script></script>
  </html>
  `);



//json converter.  Takes in object and returns csv string
var jsonConverter = (jsonObj) => {
  returnString = '';
  // console.log(jsonObj);
  //recursive helper definition
  var recursiveHelper = (node) => {
    // declare temp string
    //pull information out of node
    let tempstring = `${node.firstName},${node.lastName},${node.county},${node.city},${node.role},${node.sales}\n`;
    returnString = returnString.concat('', tempstring);
    //for children nodes
    //pass child into recursive helper
    for (var i = 0; i < node.children.length; i++) {
      recursiveHelper(node.children[i]);
    }
  }
  //pass node into recursive helper
  recursiveHelper(jsonObj)
  return returnString;
}


// app.use(express.static(__dirname));
app.use(express.static('./client'))

// app.use(express.urlencoded({
//   extended: true
// }))

// app.use(fileUpload({
//   useTempFiles : true,
//   tempFileDir : '/tmp/'
// }));

app.use(fileUpload());

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/transformData', function (req, res) {
  console.log('transformData POST request received')
  // console.log(req.body.fname)
  var obj = JSON.parse(req.body.fname);
  var csvString = jsonConverter(obj);
  // console.log('logging csv text')
  // console.log(csvString)


  //responding with template and csvData
    //I need to put the data into the template
  res.send(compiled({csvData: csvString}))
})

app.post('/fileUpload', function (req, res) {
  console.log('got a file upload instead of copy/paste')
  console.log('logging __dirname')
  console.log(__dirname);

  console.log(req.files.fileToUpload)


  let jsonFile = req.files.fileToUpload
  let uploadpath = __dirname + '/' + jsonFile.name;

  jsonFile.mv(uploadpath, (err) => {
    if (err) {
      return res.status(500).send(err)
    }
    fs.readFile(uploadpath, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      }

      console.log(data);
      console.log(typeof data)

      var obj = JSON.parse(data);
      console.log(obj);

      let csvString = jsonConverter(obj);
      res.send(compiled({csvData: csvString}))

    })
  })



})

app.listen(3000)

