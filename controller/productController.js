class ProductController {

    constructor(name,qnt,value){
        this.product = new Product(name,qnt,value)
       //this.showProduct()
    }

    addProduct(){

        document.getElementById('formulario').addEventListener('submit', (event) =>{
    
           // event.preventDefault()
            
             this.product.productName = document.getElementById('inpt-produto').value;
             this.product.productValue = document.getElementById('inpt-valor').value;
             this.product.productQnt = document.getElementById('inpt-quantidade').value;
            
            console.log (this.product.productName)

            if(this.product.productName == ''){
                alert('DiGITE O NOME DO PRODUTO');
                return false;
            }
           
            let produto = {
                nome: this.product.productName,
                valor: this.product.productValue,
                quantidade: this.product.productQnt
                
            }
            
            if(localStorage.getItem('dados') == null){
                let produtos = [];
                produtos.push(produto);
                localStorage.setItem('dados', JSON.stringify(produtos))
            }else{
                
                let produtos = JSON.parse(localStorage.getItem('dados'));
                produtos.push(produto);
                localStorage.setItem('dados',JSON.stringify(produtos));
            }

           
        })
        
    }

    showProduct(){

        var dados = JSON.parse( localStorage.getItem('dados'));
        var tabela = document.getElementById('tabela');
       
        for(let i = 0; i < dados.length;i++){
           
            

            let nome = dados[i].nome;
            let valor = dados[i].valor;
            let quantidade = dados[i].quantidade;
            
            var tbody=document.createElement('tbody');
            
            //criando linhas das tabelas dinamicamente
            let td = document.createElement('td');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            //criando botao dinamicamente
            let btnExcluir = document.createElement('button');
            
            //css do botão
            btnExcluir.style.width = '100px';
            btnExcluir.style.height = '50px';
            btnExcluir.innerHTML = 'Excluir';
            btnExcluir.className = 'btn btn-danger';
    
            btnExcluir.onclick = () =>{
                
                dados.splice(i,1);
                localStorage.setItem('dados', JSON.stringify(dados));
                window.location.reload()
            
            }
    
            td.innerHTML = nome;
            td1.innerHTML = valor;
            td2.innerHTML = quantidade;
            td3.appendChild(btnExcluir);
            
            //adicionando linhas ao corpo da tabela
            tbody.appendChild(td);
            tbody.appendChild(td1);
            tbody.appendChild(td2);
            tbody.appendChild(td3);
            
            //adicionando o corpo da tabela na tabela
            tabela.appendChild(tbody);
        }
    }

}