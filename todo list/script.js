
let todoAp = JSON.parse(localStorage.getItem('todoList')) || [];

document.querySelector('form').addEventListener('submit', todoApp);



window.addEventListener('load' , () => {
    displayTable(todoAp);
})

function todoApp(e){
    e.preventDefault();
    let taskName = document.getElementById('task').value;
    let priority = document.getElementById('priority').value;

    let todoList = {
        Name : taskName,
        Priority : priority
    }
    todoAp.push(todoList);
    localStorage.setItem('todoList' , JSON.stringify(todoAp));
    

    displayTable(todoAp);
}

function displayTable(todoAp){
    document.querySelector('tbody').innerHTML = '';
    todoAp.forEach(function (ele, index){
     let row = document.createElement('tr');

     let td1 = document.createElement('td');
     td1.innerText = ele.Name;

     let td2 = document.createElement('td');
     td2.innerText = ele.Priority;

     let td3 = document.createElement('td');
     td3.innerText = "Delete";
     row.append(td1, td2, td3);
        let tbody= document.querySelector('tbody');
        tbody.append(row);


     td3.addEventListener('click' , () => {
        deleteRow(ele, index);
        displayTable(todoAp)
        
     })

     document.getElementById('task').value = '';
     document.getElementById('priority').value =''
    })


}

function deleteRow(ele, index){
    todoAp.splice(index, 1);
    localStorage.setItem('todoList',JSON.stringify(todoAp));

}
