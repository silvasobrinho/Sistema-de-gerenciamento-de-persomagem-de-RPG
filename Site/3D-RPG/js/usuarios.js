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
            let contador = 0;
            response.data.forEach(element => {
                $("#listap").append(`
                <tr>
                <td>
                <a href="edit_personagem.html"><button class="btn btn-warning float-right" type="button" onclick="guardaid(${element.id})">Editar personagem</button></a> <span class="float-left font-weight-bold">Criado em: ${element.created_at}</span><br>Personagem:  ${element.nome_personagem} - classe: ${element.classe}
                </td>
            </tr>

                `)
                contador ++;
            });
            console.log(contador)
            if(contador === 0){
                $("#listap").append(`
                <tr>
                <td>
                <span class="float-right font-weight-bold">Ainda não Criou nenhum, personagem <a href="ficha_personagem.html">Click aqui e crie seu personagem!</span> 
                </td>
            </tr>
                `)
            }else{
                $("#listap").append(`
                <tr>
                <td>
                <a href="ficha_personagem.html"><button class="site-btn btn-sm button-ficha mt-5 float-right" type="button">Ciar novo Personagem</button></a> 
                </td>
            </tr>
            `)}
        })
        .catch(function (error) {
            
           
            console.error(error)
        });
    }

    function guardaid(id){
        localStorage.setItem('rpgidtoedit',id);
        console.log("ido da ficha"+localStorage.getItem("rpgidtoedit"))
    }