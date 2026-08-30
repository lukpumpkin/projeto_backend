const api_site = "https://jsonplaceholder.typicode.com/posts";
console.log("MEU ARQUIVO JS FOI EXECUTADO");

const btnBusca = document.getElementById("buscar_carregar");
const btncarregar = document.getElementById("btnCarregar");


// fetch(api_site)
//         .then(resposta =>  resposta.json())
//         .then(dados => {
    //         console.log(dados);
    //         });
    
    
    const carregar = async () => { 
        console.log("ENTREI NA FUNÇÂO");
        const response = await fetch(api_site);
        
        const resposta = await response.json();

        for(let i = 0; i<resposta.length;i++){
            document.getElementById("resultado").innerHTML += `
            <div class="card">
            <span>postagem: => ${resposta[i].id}</span>
            <h2>title => ${resposta[i].title}</h2>
            <p>body => ${resposta[i].body}</p>
            <p>userId => ${resposta[i].userId}</p>
            </div>
            `;
        }
    }
    
    btnBusca.addEventListener("click", async function () {
        const num = document.getElementById("numero").value;
        const url = api_site + "/" + num;
        const response = await fetch(url);
        const resposta = await response.json();
        document.getElementById("resultado").innerHTML += `
        <div class="card">
            <span>postagem: => ${resposta.id}</span>
            <h2>title => ${resposta.title}</h2>
            <p>body => ${resposta.body}</p>
            <p>userId => ${resposta.userId}</p>
            </div>
        `;

        
    } );
    btncarregar.addEventListener("click", function () {
})