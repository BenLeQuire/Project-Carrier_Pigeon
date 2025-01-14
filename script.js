function send_to_server(){
    //console.log("this worked!!!")
    var name = document.getElementById("name").value;
    var message = document.getElementById("send").value;
    const texarea = document.getElementById("messages").value;
    texarea.value += (name+" "+"--->"+" "+message);
    console.log(name);
    console.log("\n" + message);
}