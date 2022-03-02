$("#botao").text("Consultar");

function consultaCnpj() {
  $(".barraProgress").show();
  var cnpj = document.getElementById("cnpj").value;
  var url = 'https://www.receitaws.com.br/v1/cnpj/' + cnpj.replace(/[^0-9]/g, '');
  $.ajax({
    url: url,
    type: "GET",
    'dataType': 'jsonp',
    success: function (response) {
      // console.log(response);     
      $(".cnpj").show();
      $(".area").show();
      $("#abertura").html(response.abertura);
      $("#nome").html(response.nome);
      $("#logradouro").html(response.logradouro);
      $("#bairro").html(response.bairro);
      $("#municipio").html(response.municipio);
      $("#uf").html(response.uf);
      $("#cep").html(response.cep);
      $("#FormControlTextareaDados").html(JSON.stringify(response));
      // $("#data").html(JSON.stringify(response));
      $(".barraProgress").hide();

      // javascript
      // document.getElementById("logradouro").innerHTML = response.logradouro;
      // document.getElementById("bairro").innerHTML = response.bairro;
    }
  })
}

$(function () {
  $(".cnpj").hide();
  $(".area").hide();
  $(".barraProgress").hide();
})

function mensagem() {
}

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}