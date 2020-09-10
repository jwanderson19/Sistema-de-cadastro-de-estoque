export default ()=>{
     let data = new Date()
    var produto = [
        {
            name:'Arroz',
            id:1,
            date: data.toLocaleString(),
            qtd: 5,
            valor:232,
            categoria: 'Alimentos'
        },
        {
            name:'Coca-cola',
            id:2,
            date:data.toLocaleString(),
            qtd: 44,
            valor:5,
            categoria:'limpeza'
        }
    ]
const temp = []

for(let i = 0;i <= produto.length - 1;i++){
    temp[i] = `
    <tr>
        <td>${produto[i].id}</td>
        <td>${produto[i].name}</td>
        <td>${produto[i].valor}</td>
        <td>${produto[i].qtd}</td>
        <td>${produto[i].categoria}</td>
        <td>${produto[i].date}</td>
    </tr>
    `
}
    return (`
    <div class='conp-content'>
        <h1>Estoque</h1>
        <table>
            <thead>            
                <tr>
                    <th>id</th>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Categoria</th>
                    <th>Data de Cadastro</th> 
                </tr>
            </thead>
            <tbody>
            ${temp}
            </tbody>
        </table>
    </div>
        `
        )
}