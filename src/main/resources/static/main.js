import { loadPacotes } from "./stub.js";

function onLoadPacotes() {
    const placeholder = document.getElementById("placeholder");
    placeholder.innerHTML = "<p>Loading</p>"
    loadPacotes((data) => {
        placeholder.innerHTML=`<h6>${data.length} pacotes carregados</h6>`;
        placeholder.innerHTML += "<div id='grid-id' class='grid-container' />";
        const gridId = document.getElementById("grid-id");
        for(var i = 0; i < data.length; i++){

            let _cidade = data[i]['localidade']['descricao'];
            let _desc = data[i]['descricao'];
            let _preco = data[i]['valor'];
            let _itemHotel = data[i]['items'].find(item => item.nomeHotel !== undefined);
            let _hotel = _itemHotel['nomeHotel'];

            gridId.innerHTML += `<div class='grid-item'>
                                   <h3>Hotel: ${_hotel}</h3>
                                   <p><em><strong>Descrição: </strong>${_desc}</em></p>
                                   <p>📍 <strong>Cidade: </strong>${_cidade}</p>
                                   <p>💵 <strong>Valor: </strong>R\$ ${_preco}</p>
                                  </div>`;
        }
    })
}


export { onLoadPacotes };