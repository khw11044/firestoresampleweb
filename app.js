// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCwv1H_4608k_iQN6-HHVI2wxrTvxMjvKc",
    authDomain: "firestore-1add2.firebaseapp.com",
    databaseURL: "https://firestore-1add2.firebaseio.com",
    projectId: "firestore-1add2",
    storageBucket: "firestore-1add2.appspot.com",
    messagingSenderId: "410516002311",
    appId: "1:410516002311:web:0c1e7cc41724dca1db3ca2",
    measurementId: "G-S7ZZZRVQX7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();
  
  //const docRef = firestore.collection("robot1").doc("sky")
  const docRef = firestore.doc("robot1/sky");
  const outputHeader = document.querySelector("#NumberOfDroneOutput");
  const outputHeader2 = document.querySelector("#timedate");
  const inputTextField = document.querySelector("#Num_of_drone");
  const saveButton = document.querySelector("#saveButton")
  const loadButton = document.querySelector("#loadButton")

  saveButton.addEventListener("click", function() {
      const textToSave = inputTextField.value;
      console.log("I am going to save" + textToSave + "to Firestore")
      docRef.set({
        Num_of_drone: textToSave
      }).then(function(){
          console.log("Number saved!");
      }).catch(function(error){
          console.log("Got an error:", error);
      });
  });

  loadButton.addEventListener("click", function(){
      docRef.get().then(function (doc) {
          if (doc && doc.exists) {
              const myData = doc.data();
              outputHeader.innerText = "Number of Drone: " + myData.Num_of_drone;
          }
      }).catch(function (error) {
          console.log("Got an error: ", error);
      });
  });

  getRealtimeUpdates = function() {
      docRef.onSnapshot(function (doc) {
        if (doc && doc.exists) {
            const myData = doc.data();
            outputHeader.innerText = "Number of Drone: " + myData.Num_of_drone;
            outputHeader2.innerText = "Date: " + myData.date;
        }
      });
  }

  getRealtimeUpdates();