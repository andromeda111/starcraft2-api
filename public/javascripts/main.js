$(document).ready(function() {
  $.ajax({
    url: '/data',
    method: 'GET',
    dataType: 'json'
  }).then(function(data) {
    console.log(data)
  }).catch(function(error) {
    console.log('Error: ', error);
  })
  $.ajax({
    url: '/data/protoss/units',
    method: 'GET',
    dataType: 'json'
  }).then(function(data) {
    $('#dt-protoss-units').dataTable({
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

  $.ajax({
    url: '/data/terran/units',
    method: 'GET',
    dataType: 'json'
  }).then(function(data) {
    $('#dt-terran-units').dataTable({
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
        {'data': 'energy'},
        {'data': 'armor'}
      ]
    })
  }).catch(function(error) {
    console.log('Error: ', error);
  })

  $.ajax({
    url: '/data/zerg/units',
    method: 'GET',
    dataType: 'json'
  }).then(function(data) {
    $('#dt-zerg-units').dataTable({
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
        {'data': 'energy'},
        {'data': 'armor'}
      ]
    })
  }).catch(function(error) {
    console.log('Error: ', error);
  })
})
