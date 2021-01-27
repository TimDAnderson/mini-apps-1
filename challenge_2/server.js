const express = require('express')
var path = require('path')
const app = express()
var _ = require('underscore');

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



app.use(express.static('./client'))
app.use(express.urlencoded({
  extended: true
}))

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/transformData', function (req, res) {
  console.log('transformData POST request received')
  console.log(req.body.fname)
  var obj = JSON.parse(req.body.fname);
  //I have the json object, now what
  //declare some type of csv variable

  //firstName,lastName,county,city,role,sales

  //recursively search through json obj and add nodes to csv
    //build temp array with info
      //join together into string, seperated by comma
        //csv will be that 'string + \n'
          //maybe reply with that, maybe put into file


  //build one function that takes in 1 obj and returns csv string
  var csvString = jsonConverter(obj);
  console.log('logging csv text')
  console.log(csvString)


  //responding with template and csvData
    //I need to put the data into the template
  res.send(compiled({csvData: csvString}))
})

app.listen(3000)

