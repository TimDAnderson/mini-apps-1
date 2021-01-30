console.log('hello');
var csvDownloadData = '';
var csvDownloadName = 'default';
var filter = null;
var displayChildren = true;


//function to post to server
var fileSubmit = (file, successCb, failCb = null) => {
  $.ajax({
    url: "http://localhost:3000/",
    type: 'POST',
    // dataType: 'json',
    data: file,
    success: successCb,
    error: failCb
  })
}


//file reader function //I would use this after refactoring
var fileReader = () => {

}

//downloader function
var download = (filename, text) => {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////Event Handlres//////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
$('#fileUploadMethod').on('submit', function (e) {
  e.preventDefault();
  let fileuploaded = $('#fileUploadMethod')['0']['0'].files[0]
  csvDownloadName = fileuploaded.name

  var reader = new FileReader();

  reader.readAsText(fileuploaded);

  reader.onload = function() {
    let data = reader.result
    $("#fname").text(data);
    let obj = JSON.parse(data)
    console.log(obj)
    let sendObj = {
      jsonData: obj,
      filterOptions: {
        display: displayChildren,
        filter: filter
      }
    }
    // console.log(sendObj)
    // console.log('logging filter string')
    // var filterString = $("#filter").value
    // console.log(filterString);
    //add stuff to obj before sending it

    fileSubmit(sendObj, (data) => {
      console.log('in the success callback')
      console.log(data);
      csvDownloadData = data;
      $("#textArea").text(data);

    });
  };
})

$('#copyMethod').on('submit', function (e) {
  e.preventDefault();
  console.log('copy paste form clicked on')
  var jsoonData = $('#copyMethod')['0']['0'].text
  console.log(jsoonData);
  let obj = JSON.parse(jsoonData)
  fileSubmit(obj, (data) => {
    console.log('in the success callback')
      console.log(data);
      csvDownloadData = data
      $("#textArea").text(data);
  })
})

$('#downloadButton').click(function (e) {
  console.log('download button clicked')
  let filename = `${csvDownloadName}.csv`
  download(filename, csvDownloadData)
})