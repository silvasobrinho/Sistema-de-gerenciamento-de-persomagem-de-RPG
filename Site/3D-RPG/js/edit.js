async function verificar (){
    console.log("entrei")
    if((localStorage.getItem("rpglog") !== 'true') || (typeof(localStorage.getItem("rpgidtoedit")) != typeof('n') )){
        window.location.href="index.html";
        
        localStorage.removeItem("rpgidtoedit")
    }
}

verificar();
ficha();
async function ficha(){
    

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
        
       
         console.error(error)
        });
    

    }



async function updatepersonagem() {

    await pegarinfos()

    
  
        let url = "http://localhost:3333/personagens/"+localStorage.getItem("rpgidtoedit");
        let meutoken = {
            headers: {
                Authorization: "Bearer "+localStorage.getItem("rpgtoken")
            }
        }
    
        axios.patch(url, dados, meutoken)
        .then(function (response) {
            if(response.status === 200){
                alert("Personagem Editado com sucesso!")
                localStorage.removeItem("rpgidtoedit")
                window.location.href="logged.html";
            }})
            .catch(function (error) {
            alert("Preencha os dados e tente novamente!")
           
                console.error(error)
            });
        } 




        async function deletepersonagem() {

                   
            
          
                let url = "http://localhost:3333/personagens/"+localStorage.getItem("rpgidtoedit");
                let meutoken = {
                    headers: {
                        Authorization: "Bearer "+localStorage.getItem("rpgtoken")
                    }
                }
            
                axios.delete(url, meutoken)
                .then(function (response) {
                    
                        console.log(response)
                        alert("Personagem excluido com sucesso!")
                        localStorage.removeItem("rpgidtoedit")
                        window.location.href="logged.html";
                    })
                    .catch(function (error) {
                    alert("Algo deu errado tente novamente!")
                   
                        console.error(error)
                    });
                } 


        var dados;
function pegarinfos(){
    return dados={
        'nome_personagem': document.getElementById("nome_personagem").value,
        'nome_jogador' : document.getElementById("nome_jogador").value,
        'raca' : document.getElementById("raca_perso").value,
        'idade' : document.getElementById("idade").value,
        'classe' : document.getElementById("classe_per").value,
        'sexo_perso' : $("#sexo_perso").find("option:selected").text(),
        'pv': document.getElementById("vida_perso").value,
        'mana': document.getElementById("mana_perso").value,
        'agi': $("#agilidade").find("option:selected").text(),
        'car': $("#carisma").find("option:selected").text(),
        'con': $("#constituicao").find("option:selected").text(),
        'dex': $("#destreza").find("option:selected").text(),
        'for': $("#forca").find("option:selected").text(),
        'int': $("#inteligencia").find("option:selected").text(),
        'anotacoes': document.getElementById("anota_perso").value,
        'pericias': document.getElementById("pericias_perso").value,
        'benignos': document.getElementById("beni_perso").value,
        'malignos': document.getElementById("mali_perso").value,
        'arma1': document.getElementById("arma1_perso").value,
        'dano1': document.getElementById("dano1_perso").value,
        'arma2': document.getElementById("arma2_perso").value,
        'dano2': document.getElementById("dano2_perso").value,
        'arma3': document.getElementById("arma3_perso").value,
        'dano3': document.getElementById("dano3_perso").value,
        'arma4': document.getElementById("arma4_perso").value,
        'dano4': document.getElementById("dano4_perso").value,
        'armadura1': document.getElementById("armadura1_perso").value,
        'protecao1': document.getElementById("protecao1_perso").value,
        'armadura2': document.getElementById("armadura2_perso").value,
        'protecao2': document.getElementById("protecao2_perso").value,
        'armadura3': document.getElementById("armadura3_perso").value,
        'protecao3': document.getElementById("protecao3_perso").value,
        'armadura4': document.getElementById("armadura4_perso").value,
        'protecao4': document.getElementById("protecao4_perso").value,
        'armadura5': document.getElementById("armadura5_perso").value,
        'protecao5': document.getElementById("protecao5_perso").value,
        'magia1': document.getElementById("mag1_perso").value,
        'custo1': document.getElementById("custo1_perso").value,
        'magia2': document.getElementById("mag2_perso").value,
        'custo2': document.getElementById("custo2_perso").value,
        'magia3': document.getElementById("mag3_perso").value,
        'custo3': document.getElementById("custo3_perso").value,
        'magia4': document.getElementById("mag4_perso").value,
        'custo4': document.getElementById("custo4_perso").value,
        'magia5': document.getElementById("mag5_perso").value,
        'custo5': document.getElementById("custo5_perso").value
        }
}












document.getElementById("agilidade").addEventListener("input", function() {

    if (document.getElementById("agilidade").value <= 11) {
        document.getElementById("inputGroup-sizing").innerHTML = "+0"
    } else {
        if (document.getElementById("agilidade").value == 12 || document.getElementById("agilidade").value == 13) {
            document.getElementById("inputGroup-sizing").innerHTML = "+1"

        } else {
            if (document.getElementById("agilidade").value == 14 || document.getElementById("agilidade").value == 15) {
                document.getElementById("inputGroup-sizing").innerHTML = "+2"
            } else {
                if (document.getElementById("agilidade").value == 16 || document.getElementById("agilidade").value == 17) {
                    document.getElementById("inputGroup-sizing").innerHTML = "+3"
                } else {
                    if (document.getElementById("agilidade").value == 18 || document.getElementById("agilidade").value == 19) {
                        document.getElementById("inputGroup-sizing").innerHTML = "+4"
                    } else {
                        if (document.getElementById("agilidade").value == 20) {
                            document.getElementById("inputGroup-sizing").innerHTML = "+5"
                        } else {

                        }

                    }
                }

            }

        }

    }
});
document.getElementById("carisma").addEventListener("input", function() {

    if (document.getElementById("carisma").value <= 11) {
        document.getElementById("inputGroup-sizing1").innerHTML = "+0"
    } else {
        if (document.getElementById("carisma").value == 12 || document.getElementById("carisma").value == 13) {
            document.getElementById("inputGroup-sizing1").innerHTML = "+1"

        } else {
            if (document.getElementById("carisma").value == 14 || document.getElementById("carisma").value == 15) {
                document.getElementById("inputGroup-sizing1").innerHTML = "+2"
            } else {
                if (document.getElementById("carisma").value == 16 || document.getElementById("carisma").value == 17) {
                    document.getElementById("inputGroup-sizing1").innerHTML = "+3"
                } else {
                    if (document.getElementById("carisma").value == 18 || document.getElementById("carisma").value == 19) {
                        document.getElementById("inputGroup-sizing1").innerHTML = "+4"
                    } else {
                        if (document.getElementById("carisma").value == 20) {
                            document.getElementById("inputGroup-sizing1").innerHTML = "+5"
                        } else {

                        }

                    }
                }

            }

        }

    }
});
document.getElementById("constituicao").addEventListener("input", function() {

    if (document.getElementById("constituicao").value <= 11) {
        document.getElementById("inputGroup-sizing2").innerHTML = "+0"
    } else {
        if (document.getElementById("constituicao").value == 12 || document.getElementById("constituicao").value == 13) {
            document.getElementById("inputGroup-sizing2").innerHTML = "+1"

        } else {
            if (document.getElementById("constituicao").value == 14 || document.getElementById("constituicao").value == 15) {
                document.getElementById("inputGroup-sizing2").innerHTML = "+2"
            } else {
                if (document.getElementById("constituicao").value == 16 || document.getElementById("constituicao").value == 17) {
                    document.getElementById("inputGroup-sizing2").innerHTML = "+3"
                } else {
                    if (document.getElementById("constituicao").value == 18 || document.getElementById("constituicao").value == 19) {
                        document.getElementById("inputGroup-sizing2").innerHTML = "+4"
                    } else {
                        if (document.getElementById("constituicao").value == 20) {
                            document.getElementById("inputGroup-sizing2").innerHTML = "+5"
                        } else {

                        }

                    }
                }

            }

        }

    }
});
document.getElementById("destreza").addEventListener("input", function() {

    if (document.getElementById("destreza").value <= 11) {
        document.getElementById("inputGroup-sizing3").innerHTML = "+0"
    } else {
        if (document.getElementById("destreza").value == 12 || document.getElementById("destreza").value == 13) {
            document.getElementById("inputGroup-sizing3").innerHTML = "+1"

        } else {
            if (document.getElementById("destreza").value == 14 || document.getElementById("destreza").value == 15) {
                document.getElementById("inputGroup-sizing3").innerHTML = "+2"
            } else {
                if (document.getElementById("destreza").value == 16 || document.getElementById("destreza").value == 17) {
                    document.getElementById("inputGroup-sizing3").innerHTML = "+3"
                } else {
                    if (document.getElementById("destreza").value == 18 || document.getElementById("destreza").value == 19) {
                        document.getElementById("inputGroup-sizing3").innerHTML = "+4"
                    } else {
                        if (document.getElementById("destreza").value == 20) {
                            document.getElementById("inputGroup-sizing3").innerHTML = "+5"
                        } else {

                        }

                    }
                }

            }

        }

    }
});
document.getElementById("forca").addEventListener("input", function() {

    if (document.getElementById("forca").value <= 11) {
        document.getElementById("inputGroup-sizing4").innerHTML = "+0"
    } else {
        if (document.getElementById("forca").value == 12 || document.getElementById("forca").value == 13) {
            document.getElementById("inputGroup-sizing4").innerHTML = "+1"

        } else {
            if (document.getElementById("forca").value == 14 || document.getElementById("forca").value == 15) {
                document.getElementById("inputGroup-sizing4").innerHTML = "+2"
            } else {
                if (document.getElementById("forca").value == 16 || document.getElementById("forca").value == 17) {
                    document.getElementById("inputGroup-sizing4").innerHTML = "+3"
                } else {
                    if (document.getElementById("forca").value == 18 || document.getElementById("forca").value == 19) {
                        document.getElementById("inputGroup-sizing4").innerHTML = "+4"
                    } else {
                        if (document.getElementById("forca").value == 20) {
                            document.getElementById("inputGroup-sizing4").innerHTML = "+5"
                        } else {

                        }

                    }
                }

            }

        }

    }
});
document.getElementById("inteligencia").addEventListener("input", function() {

    if (document.getElementById("inteligencia").value <= 11) {
        document.getElementById("inputGroup-sizing5").innerHTML = "+0"
    } else {
        if (document.getElementById("inteligencia").value == 12 || document.getElementById("inteligencia").value == 13) {
            document.getElementById("inputGroup-sizing5").innerHTML = "+1"

        } else {
            if (document.getElementById("inteligencia").value == 14 || document.getElementById("inteligencia").value == 15) {
                document.getElementById("inputGroup-sizing5").innerHTML = "+2"
            } else {
                if (document.getElementById("inteligencia").value == 16 || document.getElementById("inteligencia").value == 17) {
                    document.getElementById("inputGroup-sizing5").innerHTML = "+3"
                } else {
                    if (document.getElementById("inteligencia").value == 18 || document.getElementById("inteligencia").value == 19) {
                        document.getElementById("inputGroup-sizing5").innerHTML = "+4"
                    } else {
                        if (document.getElementById("inteligencia").value == 20) {
                            document.getElementById("inputGroup-sizing5").innerHTML = "+5"
                        } else {

                        }

                    }
                }

            }

        }

    }
});