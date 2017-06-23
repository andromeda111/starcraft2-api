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
        {'data': 'id'},
        {'data': 'unit'},
        {'data': 'mineral'},
        {'data': 'vespene'},
        {'data': 'supply'},
        {'data': 'buildTime'},
        {'data': 'buildFrom'},
        {'data': 'life'},
        {'data': 'shields'},
        {'data': 'energy'},
        {'data': 'armor'}
      ]
    })
  }).catch(function(error) {
    console.log('Error: ', error);
  })
})
