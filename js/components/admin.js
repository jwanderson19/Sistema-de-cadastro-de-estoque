export default ()=>{
    
    var admin = [
        {
            name:'Wanderson',
            id:1,
            date: new Date()
        },
        {
            name:'José',
            id:2,
            date: new Date()
        }
    ]
const temp = []

for(let i = 0;i <= admin.length - 1;i++){
    temp[i] = `
    <tr>
        <td>${admin[i].id}</td>
        <td>${admin[i].name}</td>
        <td>${admin[i].date}</td>
    </tr>
    `
}
    return (`
    <div class='conp-content'>
        <h1>Bem Vindo ${admin[0].name}</h1>
        <table>
            <thead>            
                <tr>
                    <th>id</th>
                    <th>Nome</th>
                    <th>Data de Registro</th>
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
