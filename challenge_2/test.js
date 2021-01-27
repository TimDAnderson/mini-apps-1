

var initObj = {
    "firstName": "Joshie",
    "lastName": "Wyattson",
    "county": "San Mateo",
    "city": "San Mateo",
    "role": "Broker",
    "sales": 1000000,
    "children": [
    {
      "firstName": "Beth Jr.",
      "lastName": "Johnson",
      "county": "San Mateo",
      "city": "Pacifica",
      "role": "Manager",
      "sales": 2900000,
      "children": [
        {
          "firstName": "Smitty",
          "lastName": "Won",
          "county": "San Mateo",
          "city": "Redwood City",
          "role": "Sales Person",
          "sales": 4800000,
          "children": []
        },
        {
          "firstName": "Allen",
          "lastName": "Price",
          "county": "San Mateo",
          "city": "Burlingame",
          "role": "Sales Person",
          "sales": 2500000,
          "children": []
        }
      ]
    },
    {
      "firstName": "Beth",
      "lastName": "Johnson",
      "county": "San Francisco",
      "city": "San Francisco",
      "role": "Broker/Sales Person",
      "sales": 7500000,
      "children": []
    }
  ]
}

// console.log(initObj)

//firstName,lastName,county,city,role,sales

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

console.log(jsonConverter(initObj));