const btnAsync = document.getElementById('btnAsync');

btnAsync.addEventListener('click', () => {

    setTimeout(() => {
        console.log("Aqui voy");
    }, 2000);

})

// Uso de Fetch
function peticionFetch() {
    //Enviamos a buscar los datos a la API
    // Para ejecutar el .catch hay que cambiar la URL a algo que no funcione, como eliminar la o de ditto
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(
        (response) => {
            //Manejamos la respuesta objeto de tipo Response
            //console.log(response);
            return response.json()
        }
    )
    .then(data => {
        //manipulamos la informacion que me trae esta respuesta
        console.log(data);
    })
    .catch((error) => {
        //El hermano nos da las malas noticias
        console.error('Obtuvimos error, somos buenos', error);
    })
}
//Llamamos la funcion
peticionFetch();

async function peticionAwait(){
    try {
        let response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
        let data = await response.json();
        console.log(response);
    } catch (error) {
        console.error('Error al obtener', error);
    }
}

peticionAwait();