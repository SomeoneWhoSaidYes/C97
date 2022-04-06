var firebaseConfig = {
      apiKey: "AIzaSyCu_b73HpM-T63cdQBCi7SfSLW_j-vk_yk",
      authDomain: "mykwitter-73eda.firebaseapp.com",
      databaseURL: "https://mykwitter-73eda-default-rtdb.firebaseio.com",
      projectId: "mykwitter-73eda",
      storageBucket: "mykwitter-73eda.appspot.com",
      messagingSenderId: "792960093830",
      appId: "1:792960093830:web:6db067aec4e4b682588b07"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirecToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });


      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
function redirecToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}
function logout() { localStorage.removeItem("user_name");
 localStorage.removeItem("room_name"); 
 window.location = "kwitter.html"; }