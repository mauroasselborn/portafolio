// Script para el formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault()
    // Aquí puedes agregar el código para procesar el formulario, por ejemplo, enviar un correo electrónico.
    // También puedes usar AJAX para enviar los datos a un servidor.
    alert('Formulario enviado')
})

$(document).ready(function () {
    // Desplazamiento suave al hacer clic en las anclas
    $('a[href^="#"]').on('click', function (event) {
        var target = $($(this).attr('href'))
        if (target.length) {
            event.preventDefault()
            $('html, body').animate(
                {
                    scrollTop: target.offset().top,
                },
                800
            )
        }
    })
})
