/*

MAQUETA
  identificar la documentación común a todas las categorías
    CNR

  poner bajo el mismo título y simplificar los input de documentación similares o que se refieren a lo mismo
    ej. CNR
    ej. SVO y pago.

INTERACTIVIDAD
  identificar los inputs que debrían quedar visibles para la categoría actualmente seleccionada.
    definir si los values en el formData quedan vacíos (si son required) o se le asigna un valor por defecto en el script.
  Si no se seleccionó ninguna categoría ni relación de empleador/empleado no mostrar el resto.
  Disable el button de submit si no están los campos required completos. / Enable cuando sí.
*/

$(document).ready(function()
{
  
  /* resaltado de radio de categoriaProveedor */
  $('#categoriaProveedor').change(function()
  {
    resaltarRadio(radio_categoria1, opciones_categoria);
  });

  /* resaltado de radio de relacionTipo */
  $('#relacionTipo').change(function()
  {
    resaltarRadio(radio_relacion1, opciones_relacion);
  });

  /* resaltado de radio de usoMaquinaria */
  $('#usoMaquinaria').change(function()
  {
    resaltarRadio(radio_maquinaria1, opciones_maquinaria);
  });

  /* resaltado del fieldset al estar sobre el */
  resaltarFieldset();

  /* mostrar file inputs segun categoria, relacion y maquinaria */
  mostrarFileInputs()
});

/* variables */
const radio_categoria1 = jQuery('input[name="categoriaProveedor"][value="1"]', '#categoriaProveedor');
const radio_categoria2 = jQuery('input[name="categoriaProveedor"][value="2"]', '#categoriaProveedor');
const opciones_categoria = "categoriaProveedor";
const radio_relacion1 = jQuery('input[name="relacionTipo"][value="1"]', '#relacionTipo');
const radio_relacion2 = jQuery('input[name="relacionTipo"][value="2"]', '#relacionTipo');
const opciones_relacion = "relacionTipo";
const radio_maquinaria1 = jQuery('input[name="usoMaquinaria"][value="1"]', '#usoMaquinaria');
const radio_maquinaria2 = jQuery('input[name="usoMaquinaria"][value="2"]', '#usoMaquinaria');
const opciones_maquinaria = "usoMaquinaria";

/* funcion resaltar radio seleccionado */
function resaltarRadio(radio, opciones) 
{
  if ( radio.is(':checked') )
  {
    jQuery($('#' + opciones + '_uno_label')).css('background-color', 'rgb(36, 81, 167)');
    jQuery($('#' + opciones + '_uno_label')).css('color', 'white');
    jQuery($('#' + opciones + '_dos_label')).css('background-color', 'white');
    jQuery($('#' + opciones + '_dos_label')).css('color', 'black');
  } 
  else 
  {
    jQuery($('#' + opciones + '_uno_label')).css('background-color', 'white');
    jQuery($('#' + opciones + '_uno_label')).css('color', 'black');
    jQuery($('#' + opciones + '_dos_label')).css('background-color', 'rgb(36, 81, 167)');
    jQuery($('#' + opciones + '_dos_label')).css('color', 'white');
  }
}

/* funcion resaltar fieldset al pasar sobre el */
function resaltarFieldset() 
{
  $('fieldset').mouseenter(function(){
    $(this).css("box-shadow", "-2px -2px 10px rgba(255, 255, 255, 0.8), 2px 2px 10px rgba(30, 31, 36, 0.6)");
  });
  $('fieldset').mouseleave(function(){
    $(this).css("box-shadow", "-4px -4px 10px rgba(255, 255, 255, 0.8), 4px 4px 10px rgba(30, 31, 36, 0.6)");
  });
}

/* funcion para habilitar el cuadro de texto cuando se elige 'otros' en el tipo de servicio */
function habilitarTextInput(val)
{
  const element=document.getElementById('otro');
  if(val == 'Seleccione el tipo de servicio'||val=='otro')
    element.style.display='block';
  else  
    element.style.display='none';
}

/* funcion ocultar las secciones input file según la categoría, relación y uso de elevadores */

let fieldsetDocumentacion = document.getElementById('fieldset_documentacion');
let seccionDocumentacionGeneral = document.getElementById('section_documentacion_general');

/*
####################################
en documentacion general hay un input que aparece si es monotributista 
#######################################
*/

let seccionCNR = document.getElementById('section_cnr');
let seccionAFIP = document.getElementById('section_afip');
let seccionCategoriaUno = document.getElementById('documentacion_categoria_uno');
let seccionRelacionDependencia = document.getElementById('section_relacion_dependencia');
let seccionRelacionAutonomo = document.getElementById('section_relacion_autonomo');
let seccionCategoriaDos = document.getElementById('documentacion_categoria_dos');
let seccionMaquinaria = document.getElementById('section_maquinaria');
let seccionListadoPersonal = document.getElementById('section_listado_personal');

fieldsetDocumentacion.style.display= 'none';
seccionDocumentacionGeneral.style.display= 'none';
/* categoria */
seccionCategoriaUno.style.display= 'none';
seccionCategoriaDos.style.display= 'none';
/* relacion */
seccionRelacionDependencia.style.display= 'none';
seccionRelacionAutonomo.style.display= 'none';
/* maquinaria */
seccionMaquinaria.style.display= 'none';

function mostrarFileInputs()
{
  $('#fieldset_datos_de_proveedor').change(function()
  {
    let nombreDeQuienCarga = $('#nombre').val();
    let nombreProveedor = $('#nombreProveedor').val();

    let seleccionCategoria = $('input[name="categoriaProveedor"]:checked');
    let seleccionRelacion = $('input[name="relacionTipo"]:checked');
    let seleccionMaquinaria = $('input[name="usoMaquinaria"]:checked');

    $('#variable_nombreDeQuienCarga').text(nombreDeQuienCarga);
    $('#variable_nombreProveedor').text(nombreProveedor);

    if ( 
      seleccionCategoria.is(':checked')
      && 
      seleccionRelacion.is(':checked')
      &&
      seleccionMaquinaria.is(':checked')
       )
    {
      let combinacion = [seleccionCategoria.val(), seleccionRelacion.val(), seleccionMaquinaria.val()];
      combinacion = parseInt(combinacion[0] + combinacion[1] + combinacion[2]);

      combinacion === 111 ? combinacion = "primera" : combinacion;
      combinacion === 112 ? combinacion = "segunda" : combinacion;
      combinacion === 121 ? combinacion = "tercera" : combinacion;
      combinacion === 211 ? combinacion = "cuarta" : combinacion;
      combinacion === 122 ? combinacion = "quinta" : combinacion;
      combinacion === 221 ? combinacion = "sexta" : combinacion;
      combinacion === 212 ? combinacion = "septima" : combinacion;
      combinacion === 222 ? combinacion = "octava" : combinacion;

      switch (true) 
      {
        case combinacion === "primera":
          console.log("1");
          fieldsetDocumentacion.style.display= 'block';
          seccionDocumentacionGeneral.style.display= 'block';
          /* categoria */
          seccionCategoriaUno.style.display= 'block';
          seccionCategoriaDos.style.display= 'none';
          /* relacion */
          seccionRelacionDependencia.style.display= 'block';
          seccionRelacionAutonomo.style.display= 'none';
          /* maquinaria */
          seccionMaquinaria.style.display= 'block';
          break;
        case combinacion === "segunda":
          console.log("2");
          fieldsetDocumentacion.style.display= 'block';
          seccionDocumentacionGeneral.style.display= 'block';
          /* categoria */
          seccionCategoriaUno.style.display= 'block';
          seccionCategoriaDos.style.display= 'none';
          /* relacion */
          seccionRelacionDependencia.style.display= 'block';
          seccionRelacionAutonomo.style.display= 'none';
          /* maquinaria */
          seccionMaquinaria.style.display= 'none';
          break;
        case combinacion === "tercera":
          console.log("3");
          fieldsetDocumentacion.style.display= 'block';
          seccionDocumentacionGeneral.style.display= 'block';
          /* categoria */
          seccionCategoriaUno.style.display= 'block';
          seccionCategoriaDos.style.display= 'none';
          /* relacion */
          seccionRelacionDependencia.style.display= 'none';
          seccionRelacionAutonomo.style.display= 'block';
          /* maquinaria */
          seccionMaquinaria.style.display= 'block';
          break;
        case combinacion === "cuarta":
          console.log("4");
          fieldsetDocumentacion.style.display= 'block';
          seccionDocumentacionGeneral.style.display= 'block';
          /* categoria */
          seccionCategoriaUno.style.display= 'none';
          seccionCategoriaDos.style.display= 'block';
          /* relacion */
          seccionRelacionDependencia.style.display= 'block';
          seccionRelacionAutonomo.style.display= 'none';
          /* maquinaria */
          seccionMaquinaria.style.display= 'block';
          break;
        case combinacion === "quinta":
          console.log("5");
          fieldsetDocumentacion.style.display= 'block';
          seccionDocumentacionGeneral.style.display= 'block';
          /* categoria */
          seccionCategoriaUno.style.display= 'block';
          seccionCategoriaDos.style.display= 'none';
          /* relacion */
          seccionRelacionDependencia.style.display= 'none';
          seccionRelacionAutonomo.style.display= 'block';
          /* maquinaria */
          seccionMaquinaria.style.display= 'none';
        break;
        case combinacion === "sexta":
          console.log("6");
          fieldsetDocumentacion.style.display= 'block';
          seccionDocumentacionGeneral.style.display= 'block';
          /* categoria */
          seccionCategoriaUno.style.display= 'none';
          seccionCategoriaDos.style.display= 'block';
          /* relacion */
          seccionRelacionDependencia.style.display= 'none';
          seccionRelacionAutonomo.style.display= 'block';
          /* maquinaria */
          seccionMaquinaria.style.display= 'block';
          break;
        case combinacion === "septima":
          console.log("7");
          fieldsetDocumentacion.style.display= 'block';
          seccionDocumentacionGeneral.style.display= 'block';
          /* categoria */
          seccionCategoriaUno.style.display= 'none';
          seccionCategoriaDos.style.display= 'block';
          /* relacion */
          seccionRelacionDependencia.style.display= 'block';
          seccionRelacionAutonomo.style.display= 'none';
          /* maquinaria */
          seccionMaquinaria.style.display= 'none';
          break;
        case combinacion === "octava":
          console.log("8");
          fieldsetDocumentacion.style.display= 'block';
          seccionDocumentacionGeneral.style.display= 'block';
          /* categoria */
          seccionCategoriaUno.style.display= 'none';
          seccionCategoriaDos.style.display= 'block';
          /* relacion */
          seccionRelacionDependencia.style.display= 'none';
          seccionRelacionAutonomo.style.display= 'block';
          /* maquinaria */
          seccionMaquinaria.style.display= 'none';
          break;
        default:
          break;
      }
    }
  })
}

