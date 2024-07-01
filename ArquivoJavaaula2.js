function verificar(){

    let campoNascimento = document.getElementById("anoNascimento");
    let conclusao = document.getElementById("resultado")
    let data = new Date();
    let anoAtual = data.getFullYear();
    let idade = anoAtual - Number(campoNascimento.value);
    let sexo = document.getElementsByName("tipoSexo");
    let pele = document.getElementsByName("corPele");
    let img = document.createElement("img");
    img.setAttribute("id", "foto");
    
    if(campoNascimento.value.length == 0 || campoNascimento.value > anoAtual){
        alert("Erro, analise os campos e digite novamente")

        
    } else {
      
        let genero = " ";
            if(sexo[0].checked){genero = "Masculino"}
            else if (sexo[1].checked){genero = "Feminino"}

        let corPele = " ";
            if(pele[0].checked){corPele = "Branca"}
            else if (pele[1].checked){corPele = "Parda ou Negra"}

        // homem branco
        if(genero == "Masculino" && idade >= 0 && idade <= 2 && corPele == "Branca")
            { img.setAttribute("src", "bebe.jpg")}

        else if(genero == "Masculino" && idade > 2 && idade <= 13 && corPele == "Branca")
            { img.setAttribute("src", "menino.jpg")}

        else if(genero == "Masculino" && idade > 13 && idade <= 18 && corPele == "Branca")
            { img.setAttribute("src", "homemJovem.jpg")}

        else if(genero == "Masculino" && idade > 18 && idade <= 50 && corPele == "Branca")
            { img.setAttribute("src", "homemAdulto.jpg")}
           
        else if(genero == "Masculino" && idade > 50 && corPele == "Branca")
            { img.setAttribute("src", "homemIdoso.jpg")}
        

        // homem pardo ou negro
        if(genero == "Masculino" && idade >= 0 && idade <= 2 && corPele == "Parda ou Negra")
            { img.setAttribute("src", "bebeNegro.jpg")}

        else if(genero == "Masculino" && idade > 2 && idade <= 13 && corPele == "Parda ou Negra")
            { img.setAttribute("src", "meninoNegro.jpg")}

        else if(genero == "Masculino" && idade > 13 && idade <= 18 && corPele == "Parda ou Negra")
            { img.setAttribute("src", "homemJovemNegro.jpg")}

        else if(genero == "Masculino" && idade > 18 && idade <= 50 && corPele == "Parda ou Negra")
            { img.setAttribute("src", "homemAdultoNegro.jpg")}
           
        else if(genero == "Masculino" && idade > 50 && corPele == "Parda ou Negra")
            { img.setAttribute("src", "homemIdosoNegro.jpg")}


        // mulher branca 
        if(genero == "Feminino" && idade >= 0 && idade <= 2 && corPele == "Branca")
            { img.setAttribute("src", "bebe.jpg")}

        else if(genero == "Feminino" && idade > 2 && idade <= 13 && corPele == "Branca")
            { img.setAttribute("src", "menina.png")}

        else if(genero == "Feminino" && idade > 13 && idade <= 18 && corPele == "Branca")
            { img.setAttribute("src", "mulherJovem.jpg")}

        else if(genero == "Feminino" && idade > 18 && idade <= 50 && corPele == "Branca")
            { img.setAttribute("src", "mulherAdulta.jpg")}
           
        else if(genero == "Feminino" && idade > 50 && corPele == "Branca")
            { img.setAttribute("src", "mulherIdosa.jpg")}


        // mulher parda ou negra
        if(genero == "Feminino" && idade >= 0 && idade <= 2 && corPele == "Parda ou Negra")
            { img.setAttribute("src", "bebeNegra.jpg")}

        else if(genero == "Feminino" && idade > 2 && idade <= 13 && corPele == "Parda ou Negra")
            { img.setAttribute("src", "meninaNegra.jpg")}

        else if(genero == "Feminino" && idade > 13 && idade <= 18 && corPele == "Parda ou Negra")
            { img.setAttribute("src", "mulherJovemNegra.png")}

        else if(genero == "Feminino" && idade > 18 && idade <= 50 && corPele == "Parda ou Negra")
            { img.setAttribute("src", "mulherAdultaNegra.jpg")}
           
        else if(genero == "Feminino" && idade > 50 && corPele == "Parda ou Negra")
            { img.setAttribute("src", "mulherIdosaNegra.jpg")}

            conclusao.style.alignItems = "center";
            conclusao.innerHTML = `Detectamos uma pessoa do o sexo ${genero} com ${idade} anos e de pele  cor ${corPele}`; 

            conclusao.appendChild(img);
        
    //console.log(campoNascimento.value)
    }
} 


