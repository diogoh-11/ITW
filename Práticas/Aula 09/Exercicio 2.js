$(document).ready(function () {
    $("#FichaInscricao").submit(function (event) {
        var retVal = true;

        /* Nome */
        var nome = $("#Nome").val().trim();
        if (nome.length < 10 || nome.length > 100) {
            retVal = false;
            $("#NomeError").removeClass("d-none");
        } else {
            $("#NomeError").addClass("d-none");
        }

        /* Morada */
        var morada = $("#Morada").val().trim();
        if (morada.length < 20 || morada.length > 200) {
            retVal = false;
            $("#MoradaError").removeClass("d-none");
        } else {
            $("#MoradaError").addClass("d-none");
        }

        /* Email */
        var email = $("#Email").val().trim();
        if (email.length < 10 || email.length > 100 || email.indexOf('@') > email.lastIndexOf('.')) {
            retVal = false;
            $("#EmailError").removeClass("d-none");
        } else {
            $("#EmailError").addClass("d-none");
        }

        /* Local */
        var local = $("input[name='local']:checked");
        if (local.length < 2) {
            retVal = false;
            $("#LocalError").removeClass("d-none");
        } else {
            $("#LocalError").addClass("d-none");
        }

        return retVal;
    });

    var lst = [];
    $('input[name="local"]').change(function () {
        lst = $('input[name="local"]:checked').map(function () {
            return parseFloat($(this).val());
        }).get();

        if (lst.length >= 2) {
            var maxPrice = Math.max(...lst);
            $('#preco').val(maxPrice);
        } else {
            $('#preco').val('');
        }
    });

    $('#limpar').click(function () {
        $('#NomeError').addClass("d-none");
        $('#MoradaError').addClass("d-none");
        $("#EmailError").addClass("d-none");
        $("#LocalError").addClass('d-none');
    });
});
