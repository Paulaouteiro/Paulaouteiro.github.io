
const arrayGatos = [
    {
        imagem: "<img src= imagens/DONA.png>",
        titulo: "Dona",
        descricao1: "Raça: SRD",
        descricao2: "Idade: 1 ano",
        descricao3: "Gênero: Fêmea",
        descricao4: "Porte: Pequeno",
        descricao5: "Castrado:SIM",
        descricao6: "Temperamento: Arisca",
        linkAdotar: "<a href='entre.html'style='text-decoration: none'> Quero adotar</a>"

    },
    {
        imagem: "<img src= imagens/SOL.png>",
        titulo: "Sol",
        descricao1: "Raça: SRD",
        descricao2: "Idade: 10 ano",
        descricao3: "Gênero: Fêmea",
        descricao4: "Porte: Pequeno",
        descricao5: "Castrado: SIM",
        descricao6: "Temperamento: Docil",
        linkAdotar: "<a href='entre.html'style='text-decoration: none'> Quero adotar</a>"

    },
    {
        imagem: "<img src= imagens/DAMIANA.png>",
        titulo: "Damiana",
        descricao1: "Raça: SRD",
        descricao2: "Idade: 2 anos",
        descricao3: "Gênero: Fêmea",
        descricao4: "Porte: Pequeno",
        descricao5: "Castrado: SIM",
        descricao6: "Temperamento: Arisca",
        linkAdotar: "<a href='entre.html'style='text-decoration: none'> Quero adotar</a>"

    },
    {
        imagem: "<img src= imagens/ELVIRA.png>",
        titulo: "Elvira",
        descricao1: "Raça: SRD",
        descricao2: "Idade: 1 ano e meio",
        descricao3: "Gênero: Fêmea",
        descricao4: "Porte: Pequeno",
        descricao5: "Castrado: SIM",
        descricao6: "Temperamento: Arisca",
        linkAdotar: "<a href='entre.html'style='text-decoration: none'> Quero adotar</a>"

    },
 
    {
        imagem: "<img src= imagens/LORENA.png>",
        titulo: "Lorena",
        descricao1: "Raça: SRD",
        descricao2: "Idade: 3 anos",
        descricao3: "Gênero: Fêmea",
        descricao4: "Porte: Pequeno",
        descricao5: "Castrado: SIM",
        descricao6: "Temperamento: Arisca",
        linkAdotar: "<a href='entre.html'style='text-decoration: none'> Quero adotar</a>"

    },
 
    {
        imagem: "<img src= imagens/PITAYA.png>",
        titulo: "Pitaya",
        descricao1: "Raça: SRD",
        descricao2: "Idade: 5 anos",
        descricao3: "Gênero: Fêmea",
        descricao4: "Porte: Pequeno",
        descricao5: "Castrado: SIM",
        descricao6: "Temperamento: Arisca",
        linkAdotar: "<a href='entre.html'style='text-decoration: none'> Quero adotar</a>"

    },


    {
        imagem: "<img src= imagens/REMI.png>",
        titulo: "Remi",
        descricao1: "Raça: SRD",
        descricao2: "Idade: 5 anos",
        descricao3: "Gênero: Fêmea",
        descricao4: "Porte: Pequeno",
        descricao5: "Castrado: SIM",
        descricao6: "Temperamento: Arisca",
        linkAdotar: "<a href='entre.html'style='text-decoration: none'> Quero adotar</a>"

    },

    {
        imagem: "<img src= imagens/DINDORA.png>",
        titulo: "Dindora",
        descricao1: "Raça: SRD",
        descricao2: "Idade: 1 ano",
        descricao3: "Gênero: Fêmea",
        descricao4: "Porte: Pequeno",
        descricao5: "Castrado: SIM",
        descricao6: "Temperamento: Arisca",
        linkAdotar: "<a href='entre.html'style='text-decoration: none'> Quero adotar</a>"

    }
]

for (let i = 0; i < arrayGatos.length; i++) {
    const divGatos = document.createElement('div')    

    divGatos.classList.add('gatos-card')

    if (arrayGatos[i].imagem) {
        const img = document.createElement('img');
        img.src = arrayGatos[i].imagem;
        divGatos.appendChild(img);

    
divGatos.innerHTML = `

<div class="gatosAdotar">${arrayGatos[i].imagem}</div>
<h2>${arrayGatos[i].titulo}</h2>
<ul>  
<li> ${arrayGatos[i].descricao1}</li>
<li> ${arrayGatos[i].descricao2}</li>
<li> ${arrayGatos[i].descricao3}</li>
<li> ${arrayGatos[i].descricao4}</li>
<li> ${arrayGatos[i].descricao5}</li>
<li> ${arrayGatos[i].descricao6}</li>
</ul>
<div class ="linkAdotar"
<p> ${arrayGatos[i].linkAdotar}</p>
</div>`

const main = document.querySelector('main')
main.appendChild(divGatos)
}
}