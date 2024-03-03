<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="crud.css">
    <script src="crud.js"></script>
</head>
<body onload="readAll()">
    <div class="container-fluid">

        <div class="col-lg-6 mx-auto bg-light my-5">
            <form  class="create_form">
                <input type="text" class="name" placeholder="Enter Name">
                <input type="email" class="email" placeholder="Enter Email">
                <button type="button" onclick="add()">create</button>
            </form>
            <form class="update_form">
                <input type="text" hidden class="id">
                <input type="text" class="uname">
                <input type="email" class="uemail">
                <button type="button" onclick="update()">update</button>
            </form>
            <div class="add_div">
                <button onclick="create()">Add +</button>
            </div>
            <table class="table">
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </thead>
                <tbody class="data_table">

                </tbody>
            </table>
        </div>
    </div>
    
</body>
</html>
