window.onload = function(){
    if(localStorage.getItem("rpglog") !== 'true'){
        window.location.href="index.html";
        window.alert("Vce precisa estar logado para poder criar suas fichas!")
    }
}

window.onload = function(){
    

    let url = "http://localhost:3333/personagens/um/"+localStorage.getItem("rpgidtoedit");
    let meutoken = {
        headers: {
            Authorization: "Bearer "+localStorage.getItem("rpgtoken")
        }
    }
    
    axios.get(url, meutoken)
    .then(function (response) {
       console.log(response.data)
        $("#nome_personagem").val(response.data.nome_personagem)
        $("#nome_jogador").val(response.data.nome_jogador)
        $("#raca_perso").val(response.data.raca)
        $("#idade").val(response.data.idade)
        $("#classe_per").val(response.data.classe)
        $("#sexo_perso").val(response.data.sexo)
        $("#vida_perso").val(response.data.pv)
        $("#mana_perso").val(response.data.mana)
        $("#agilidade").val(response.data.agi)
        $("#carisma").val(response.data.car)
        $("#constituicao").val(response.data.con)
        $("#destreza").val(response.data.dex)
        $("#forca").val(response.data.for)
        $("#inteligencia").val(response.data.int)
        $("#anota_perso").val(response.data.anotacoes)
        $("#pericias_perso").val(response.data.pericias)
        $("#beni_perso").val(response.data.benignos)
        $("#mali_perso").val(response.data.malignos)
        $("#arma1_perso").val(response.data.arma1)
        $("#dano1_perso").val(response.data.dano1)
        $("#arma2_perso").val(response.data.arma2)
        $("#dano2_perso").val(response.data.dano2)
        $("#arma3_perso").val(response.data.arma3)
        $("#dano3_perso").val(response.data.dano3)
        $("#arma4_perso").val(response.data.arma4)
        $("#dano4_perso").val(response.data.dano4)
        $("#armadura1_perso").val(response.data.armadura1)
        $("#protecao1_perso").val(response.data.protecao1)
        $("#armadura2_perso").val(response.data.armadura2)
        $("#protecao2_perso").val(response.data.protecao2)
        $("#armadura3_perso").val(response.data.armadura3)
        $("#protecao3_perso").val(response.data.protecao3)
        $("#armadura4_perso").val(response.data.armadura4)
        $("#protecao4_perso").val(response.data.protecao4)
        $("#armadura5_perso").val(response.data.armadura5)
        $("#protecao5_perso").val(response.data.protecao5)
        $("#mag1_perso").val(response.data.magia1)
        $("#custo1_perso").val(response.data.custo1)
        $("#mag2_perso").val(response.data.magia2)
        $("#custo2_perso").val(response.data.custo2)
        $("#mag3_perso").val(response.data.magia3)
        $("#custo3_perso").val(response.data.custo3)
        $("mag4_perso").val(response.data.magia4)
        $("#custo4_perso").val(response.data.custo4)
        $("#mag5_perso").val(response.data.magia5)
        $("#custo5_perso").val(response.data.custo5)
        










     })
      .catch(function (error) {
        console.log("aaaa")
       
         console.error(error)
        });
    

    }