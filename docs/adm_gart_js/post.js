const formPrueba = document.getElementById("formPrueba");

formPrueba.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const formData = new FormData(formPrueba);
    debugger;
})

/*  $(document).ready(function(){
    $("#submit_btn").click(function(){

      let formData = new FormData();

      formData.append("title", $("#nombre").val());
      formData.append("email", $("#email").val());
      formData.append("nombreProveedor", $("#nombreProveedor").val());
      formData.append("cuitProveedor", $("#cuitProveedor").val());
      formData.append("categoriaProveedor", $("#categoriaProveedor").val());
      formData.append("nombreReferente", $("#nombreReferente").val());
      formData.append("emailReferente", $("#emailReferente").val());
      formData.append("locatarios", $("#locatarios").val());
      formData.append("fecha_inicio_tareas", $("#fecha_inicio_tareas").val());
      formData.append("fecha_fin_tareas", $("#fecha_fin_tareas").val());
      formData.append("fecha_visita", $("#fecha_visita").val());
      formData.append("comentario", $("#comentario").val());
      formData.append("esMonotributista", $("#esMonotributista").val());
      
      let ART_file = $("#ART").get(0).files.item(0);
      formData.append("ART", ART_file, "ART_" + $("#nombreProveedor").val());

      console.log(formData);
    });
});  */


/*   let formData = { 

     todos estos son los campos del formulario 
      title:                  $("#nombre").val(),
      email:                  $("#email").val(),
      nombreProveedor:        $("#nombreProveedor").val(),
      cuitProveedor:          $("#cuitProveedor").val(),
      categoriaProveedor:     $("#categoriaProveedor").val(),
      nombreReferente:        $("#nombreReferente").val(),
      emailReferente:         $("#emailReferente").val(),
      locatarios:             $("#locatarios").val(),
      fecha_inicio_tareas:    $("#fecha_inicio_tareas").val(),
      fecha_fin_tareas:       $("#fecha_fin_tareas").val(),
      fecha_visita:           $("#fecha_visita").val(),
      comentario:             $("#comentario").val(),
      esMonotributista:       $("#esMonotributista").val(),
       acá empiezan los uploads de archivos 
      ART:                    $("#ART").val(),
      comprobantePago:        $("#comprobantePago").val(),
      fecha_emision_ART:      $("#fecha_emision_ART").val(),
      CNREdificio:            $("#CNREdificio").val(),
      CNRRaghsa:              $("#CNRRaghsa").val(),
      CNRAssetco:             $("#CNRAssetco").val(),
      CNRadic_uno:            $("#CNRadic_uno").val(),
      CNRadic_dos:            $("#CNRadic_dos").val(),
      nomina:                 $("#nomina").val(),
      lista_personal:         $("#lista_personal").val()

  }; */

            //enviar formData al flow de PA
/*           $.ajax({
          contentType: 'application/json',
          type: "POST",
              url: "https://prod-06.westus.logic.azure.com:443/workflows/5611cc15ba02491eb506c34ce678478c/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=o_4ZHd3wLoJ-sm4b1PNnpol5uJkq9WFdCs1UVZle0I0",
              data: JSON.stringify(formData),
          success: function(){
            $("postResult").val("Success");
          },
          error: function(){
            $("postResult").val("Failed");
          }
                 
        }); */