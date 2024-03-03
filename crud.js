let data = [
    {id : 0, name:"Nimra",email:"nimra@gmail.com"},
    {id : 1, name:"Nemo",email:"nemo@gmail.com"},

]

function readAll(){
    localStorage.setItem("object",JSON.stringify(data));
    var tabledata=document.querySelector(".data_table");
    var object = localStorage.getItem("object");
    var objectdata=JSON.parse(object);
    var elements="";
    objectdata.map(record=>{
        elements +=`
            <tr>
                <td>${record.name}</td>
                <td>${record.email}</td>
                <td>
                    <button class="btn btn-primary" onclick="{edit(${record.id})}">Edit</button>
                    <button class="btn btn-danger" onclick="{delet(${record.id})}">Delete</button>
                </td>
            </tr>
        `;
    })
    tabledata.innerHTML=elements;
}
function delet(id){
    data=data.filter(rec => rec.id !==id);
    readAll();
}
function create(){
    document.querySelector(".create_form").style.display="block";
    document.querySelector(".add_div").style.display="none";

}
function add(){
    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;
    var objname = {id:3,name:name,email:email}
    data.push(objname);

    document.querySelector(".create_form").style.display="none";
    document.querySelector(".add_div").style.display="block";
    readAll();

}

function edit(id){
    document.querySelector('.update_form').style.display="block";
    var obj = data.find(rec=>rec.id===id);
    document.querySelector('.uname').value=obj.name;
    document.querySelector('.uemail').value=obj.email;
    document.querySelector('.id').value=obj.id;

}
function update(){
    var id = parseInt(document.querySelector('.id').value);
    var name = document.querySelector('.uname').value;
    var email = document.querySelector('.uemail').value;

    var index = data.findIndex(rec=>rec.id===id);
    data[index]={id,name,email};
    document.querySelector('.update_form').style.display="none";

    readAll();

}