window.onload = function(){
    if(localStorage.getItem("rpglog") !== 'true'){
        window.location.href="index.html";
    }
}
pegaasfichas();
document.getElementById('nomeaventureiro').innerHTML +=' '+localStorage.getItem("rpgusername")+'  ';


function geradado(dado){
    let url = "http://localhost:3333/dado/d";


    axios.get(url+dado)
    .then(function (response) {
        console.log(response)
        $(`#d${dado}`).empty();
        $(`#d${dado}`).append("⠀"+response.data+"⠀")
    })
    .catch(function (error) {
        
       
        console.error(error)
    });
}


function pegaasfichas(){
    

        let url = "http://localhost:3333/personagens/"+localStorage.getItem("rpgid");
        let meutoken = {
            headers: {
                Authorization: "Bearer "+localStorage.getItem("rpgtoken")
            }
        }
    
        axios.get(url, meutoken)
        .then(function (response) {
            console.log(response)
            response.data.forEach(element => {
                $("#listap").append(`
                <tr>
                <td>
                   <span class="float-right font-weight-bold">Criado em: ${element.created_at}</span> ${element.nome_personagem} - classe: ${element.classe} 
                </td>
            </tr>

                `)
            });
            
        })
        .catch(function (error) {
            
           
            console.error(error)
        });
    }
