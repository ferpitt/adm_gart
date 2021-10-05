function addListItem() {

    $.ajax({
      url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('ListaTest')/items",
      method: 'POST',
      headers: {
          'Accept': 'application/json;odata=verbose',
          'X-RequestDigest': $("#__REQUESTDIGEST").val(),
          'x-requestforceauthentication': true,
    },
      data: JSON.stringify({
          __metadata: {
              type: "SP.Data.ListaTestListItem"
    },
      //List all columns in the list below. 
      Title: $("#nombre").val(),
      Nombre: $("#nombre").val()
    }),
      success: function(data){
         
    },
      error: function(error){
         console.error(JSON.stringify(error))
    }
  })
  
  } 