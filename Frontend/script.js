import 
function sendLAN() {
    //console.log("this worked!!!")
    let name = document.getElementById("name").value;
    let message = document.getElementById("send").value;
    let chat = document.getElementById("messages");
    if (message.length < 1 && name.length < 1) {
        alert("please type a name and a message");
    } else if (name.length < 1) {
        alert("please type a name");
    } else if (message.length < 1) {
        alert("please type a message");
    } else {
        chat.value += name + " " + "--->" + " " + message + "\n";
        document.getElementById("send").value = "";
        chat.scrollTop = chat.scrollHeight;
    }

    let msg_data = {
        name: name,
        message: message,
    }

    //console.log(msg_data);

    let Json_data = JSON.stringify(msg_data);

    console.log(Json_data);



    // TODO | upload json data to json file

}

function