import admin from './components/admin.js'
import estoque from './components/estoque.js'
import addEstoque from './components/addEstoque.js'
import clients from './components/client.js'
import addClient from './components/addClient.js'
import clientInfo from './components/clientInfo.js'

(function selectMenuList(){
    const menuEl = document.querySelectorAll('.side-bar-menu > li')
    for(let i = 0; i <= menuEl.length -1; i++){
        menuEl[i].addEventListener('click',event =>{
            console.log(i)
            showComponent(i)    
        })
    }
})();


function showComponent(index){

    switch (index) {
        case 0:
            document.getElementById('page-content').innerHTML =  admin()             
            break;
        case 1:
            document.getElementById('page-content').innerHTML = estoque()
        break;
        case 2:
            document.getElementById('page-content').innerHTML = addEstoque()
        break;

        case 3:
            document.getElementById('page-content').innerHTML = clients()
        break;

        case 4:
            document.getElementById('page-content').innerHTML = addClient()
        break;
        case 5:
            document.getElementById('page-content').innerHTML = clientInfo()
        break;
        
    }
   
}