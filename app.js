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
  const docRef_control = firestore.doc("robot1/control");
  const outputHeader = document.querySelector("#NumberOfDroneOutput");//불러오기
  const outputHeader2 = document.querySelector("#timedate"); //불러오기
  const inputTextField = document.querySelector("#Num_of_drone"); //첫번째빈칸 불러오기

  const saveButton = document.querySelector("#saveButton") //저장버튼
  const loadButton = document.querySelector("#loadButton") //불러오기버튼

  const UPButton = document.querySelector("#UPButton")     //UP 업버튼
  const DOWNButton = document.querySelector("#DOWNButton") //DOWN 다운 버튼 tilt
  const inputTiltValue = document.querySelector("#tiltview")    //tilt
  const outputTiltValue = document.querySelector("#tiltview")

  const LEFTButton = document.querySelector("#LEFTButton")  //LEFT 왼쪽버튼
  const RIGHTButton = document.querySelector("#RIGHTButton")//RIGHT 오른쪽 버튼
  const inputPanValue = document.querySelector("#panview")      //pan
  const outputPanValue = document.querySelector("#panview")

//저장버튼 누르면 
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
//불러오기버튼 누르면
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
//업버튼 누르면 
UPButton.addEventListener("click", function() {
    const state_tilt = inputTiltValue.value;
    const state_pan = inputPanValue.value;
    console.log("I am going to save" + state_tilt +"and" + state_pan + "to Firestore")
    docRef_control.set({
        up_down: state_tilt,
        left_right: state_pan
    }).then(function(){
        console.log("change state of tilt!");
    }).catch(function(error){
        console.log("Got an error of tilt:", error);
    });
});
//다운버튼 누르면 
DOWNButton.addEventListener("click", function() {
    const state_tilt = inputTiltValue.value;
    const state_pan = inputPanValue.value;
    console.log("I am going to save" + state_tilt +"and" + state_pan + "to Firestore")
    docRef_control.set({
        up_down: state_tilt,
        left_right: state_pan
    }).then(function(){
        console.log("change state of tilt!");
    }).catch(function(error){
        console.log("Got an error of tilt:", error);
    });
});
//왼쪽버튼 누르면 
LEFTButton.addEventListener("click", function() {
    const state_tilt = inputTiltValue.value;
    const state_pan = inputPanValue.value;
    console.log("I am going to save" + state_tilt +"and" + state_pan + "to Firestore")
    docRef_control.set({
        up_down: state_tilt,
        left_right: state_pan
    }).then(function(){
        console.log("change state of pan!");
    }).catch(function(error){
        console.log("Got an error of pan:", error);
    });
});
//오른쪽버튼 누르면 
RIGHTButton.addEventListener("click", function() {
    const state_tilt = inputTiltValue.value;
    const state_pan = inputPanValue.value;
    console.log("I am going to save" + state_tilt +"and" + state_pan + "to Firestore")
    docRef_control.set({
        up_down: state_tilt,
        left_right: state_pan
    }).then(function(){
        console.log("change state of pan!");
    }).catch(function(error){
        console.log("Got an error of pan:", error);
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