<script>

async function buscar(){

const termo = document.getElementById("busca").value.toLowerCase().trim();

if(!termo){
alert("Digite um Service Tag ou Ativo");
return;
}

const url = "https://script.google.com/macros/s/AKfycbzHcCACP6ZThFc9x6LHqpUY6U-wNT0IIiqFuGsFlDQUGeFvWnGnpqanLdmlC56rF8s/exec";

try{

const response = await fetch(url);

const data = await response.json();

let html = "";

data.forEach(item => {

const servicetag = (item.servicetag || "").toString().toLowerCase();
const ativo = (item.ativo || "").toString().toLowerCase();

if(servicetag.includes(termo) || ativo.includes(termo)){

html += `
<div class="resultado">

<b>Departamento:</b> ${item.departamento || ""}<br><br>

<b>Equipamento:</b> ${item.equipamento || ""}<br><br>

<b>Ativo:</b> ${item.ativo || ""}<br><br>

<b>Service Tag:</b> ${item.servicetag || ""}<br><br>

<b>Usuário:</b> ${item.usuario || ""}<br><br>

<b>Data:</b> ${item.data || ""}

</div>
`;

}

});

if(html === ""){
html = "<p>Nenhum equipamento encontrado.</p>";
}

document.getElementById("resultado").innerHTML = html;

}catch(error){

document.getElementById("resultado").innerHTML = "Erro ao consultar dados.";

}

}

</script>