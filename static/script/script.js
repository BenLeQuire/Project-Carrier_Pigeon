function callApp() {
    //console.log("this worked!!!")
    let name = document.getElementById("name").value;
    let message = document.getElementById("send").value;
    let chat = document.getElementById("messages");
    if (message.length < 1 && name.length < 1) {
        alert("please type a name and a message");
        return
    } else if (name.length < 1) {
        alert("please type a name");
        return
    } else if (message.length < 1) {
        alert("please type a message");
        return
    } else {
        chat.value += name + " " + "--->" + " " + message + "\n";
        document.getElementById("send").value = "";
        chat.scrollTop = chat.scrollHeight;
    

        fetch('/callApp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name:name,
                msg:message,
            })
            
        })
        .then(response => response.text())
        .then(data => {
            console.log(data)
            alert(data)
        })
    
    
    }




}