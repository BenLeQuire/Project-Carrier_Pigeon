function sendLAN(){
    //console.log("this worked!!!")
    let name = document.getElementById("name").value;
    let message = document.getElementById("send").value;
    let chat = document.getElementById("messages");
    if (message.length < 1 && name.length <1)
    {
        alert("please type a name and a message");
    }
    else if (name.length < 1)
    {
        alert("please type a name");
    }
    else if (message.length < 1)
    {
        alert("please type a message");
    }
    else{
        chat.value += name +" "+"--->"+" "+ message + "\n";
        document.getElementById("send").value = "";
        chat.scrollTop = chat.scrollHeight;
    }





}