function send_to_server(){
    //console.log("this worked!!!")
    var name = document.getElementById("name").value;
    var message = document.getElementById("send").value;
    var chat = document.getElementById("messages");
    console.log(chat)
    chat.value += name +" "+"--->"+" "+ message + "\n";

}