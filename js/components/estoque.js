class Produto{
 
    constructor(){
        this.data = Date.now()
        this.produto = []   
        this.row = []
        this.addCol()

    }

    
    

    addCol(){
        for(let i = 0;i <= this.produto.length - 1;i++){
            this.row[i] = `
            <tr>
                <td>${this.produto[i].name}</td>
                <td>${this.produto[i].value}</td>
                <td>${this.produto[i].qtd}</td>
                <td>${this.produto[i].categoria}</td>
                <td>${this.produto[i].data}</td>
            </tr>
            `
        } 
    }
    

    estoque(){   
        return (`
                    <div class='conp-content bx'>
                        <h1>Estoque</h1>
                        <table>
                            <thead>            
                                <tr>
                                    <th>Produto</th>
                                    <th>Preço</th>
                                    <th>Quantidade</th>
                                    <th>Categoria</th>
                                    <th>Data de Cadastro</th> 
                                </tr>
                            </thead>
                            <tbody>
                            ${this.row}
                            </tbody>
                        </table>
                    </div>
                `
            )
    }
}

export default Produto = new Produto()