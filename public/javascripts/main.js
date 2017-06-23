$(document).ready(function() {
  $.ajax({
    url: '/data',
    method: 'GET',
    dataType: 'json'
  }).then(function(data) {
    console.log('stuff');
    console.log(data);
    $('#datatable').dataTable({
      data: data,
      columns: [
        {'data': 'name'}
      ]
    })
  }).catch(function(error) {
    console.log('Error: ', error);
  })
})
