console.log('hello');
var csvDownloadData = '';
var csvDownloadName = 'default';


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


//file reader
var fileReader = () => {

}

//downloader

var download = (filename, text) => {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}


//Event Handlres
$('#fileUploadMethod').on('submit', function (e) {
  e.preventDefault();
  console.log('file upload clicked on')
  console.log($('#fileUploadMethod'))
  console.log($('#fileUploadMethod')['0'])
  console.log($('#fileUploadMethod')['0']['0'].files[0]);
  let fileuploaded = $('#fileUploadMethod')['0']['0'].files[0]
  console.log(fileuploaded.name);
  csvDownloadName = fileuploaded.name

  var reader = new FileReader();

  reader.readAsText(fileuploaded);

  reader.onload = function() {
    let data = reader.result
    console.log(data)
    console.log(typeof data)
    $("#fname").text(data);
    let obj = JSON.parse(data)
    fileSubmit(obj, (data) => {
      console.log('in the success callback')
      console.log(data);
      csvDownloadData = data;
      $("#textArea").text(data);

    });
  };



  // fileSubmit(formdata);
})

$('#copyMethod').on('submit', function (e) {
  e.preventDefault();
  console.log('copy paste form clicked on')
  var jsoonData = $('#copyMethod')['0']['0'].value
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