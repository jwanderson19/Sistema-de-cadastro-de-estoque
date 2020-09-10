export default ()=>{
    return(`
        <div class='conp-content'>
            <h1>Digite os dados do produto</h1>
            <div class='conp-content-form'>
                <form type='submit'>
                    <label for='prod-name'>Nome </label>
                    <input type='text' id='prod-name' placeholder='Nome Do Produto'>
                    <label for='prod-val'>Valor</label>
                    <input type='number' id='prod-val' placeholder='valor'>
                    <label for='prod-qtd'>Quantidade </label>
                    <input type='number' id='prod-qtd' placeholder='Quantidade'>
                    <label for='prod-name'>Categoria </label>
                    <select id='prod-type'>
                        <option>Alimentação</option>
                        <option>Bebidas</option>
                        <option>Limpeza</option>
                        <option>Gerais</option>
                    </select>
                    <input type="submit" id='prod-btn-save' value="Cadastrar">
                </form>
            </div>
        </div>    
    `)
}