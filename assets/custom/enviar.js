$(document).ready(function () {
    $("#formulario").bind("submit",function(){
        // Capturamnos el boton de envío
        var btnEnviar = $("#btnEnviar");        
        $.ajax({
            type: $(this).attr("method"),
            url: $(this).attr("action"),
            data:$(this).serialize(),
            beforeSend: function(){
                /*
                * Esta función se ejecuta durante el envió de la petición al
                * servidor.
                * */
                // btnEnviar.text("Enviando"); Para button 
                btnEnviar.prop('value', 'Enviando'); // Para input de tipo button
                btnEnviar.attr("disabled","disabled");
            },
            complete:function(data){
                /*
                * Se ejecuta al termino de la petición
                * */
               btnEnviar.prop('value', 'Enviar');
                btnEnviar.removeAttr("disabled");
            },
            success: function(data){
                /*
                * Se ejecuta cuando termina la petición y esta ha sido
                * correcta
                * */
               btnEnviar.prop('value', 'Enviar');
               document.getElementById("enviado").removeAttribute("hidden");
               document.getElementById("formulario").reset();
                //$(".respuesta").html(data);
            },
            error: function(data){
                /*
                * Se ejecuta si la peticón ha sido erronea
                * */
               btnEnviar.prop('value', 'Enviar');
               document.getElementById("enviado").removeAttribute("hidden");
               document.getElementById("formulario").reset();
                
            }
        });
        // Nos permite cancelar el envio del formulario
        return false;
    });
});