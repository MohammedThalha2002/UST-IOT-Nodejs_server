import express from 'express';
import cors from 'cors'
const app = express()
app.use(cors())
const port = 3000
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from 'firebase/database'



const firebaseConfig = {
    apiKey: "AIzaSyBX4URTd6k8vnzSxNwHhjhZBe1uOBavScw",
    authDomain: "virtual-clinic---ust.firebaseapp.com",
    databaseURL: "https://virtual-clinic---ust-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "virtual-clinic---ust",
    storageBucket: "virtual-clinic---ust.appspot.com",
    messagingSenderId: "483066638033",
    appId: "1:483066638033:web:6b5b32577182d3a4f3dff0",
    measurementId: "G-TKJYM4ZB3W"
};
// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const db = getDatabase();
const bpRef = ref(db, 'bp')
const bmiRef = ref(db, 'bmi')
const vitalRef = ref(db, 'vital')
const diabeticRef = ref(db, 'Diabetic and Renal')

let values = []
onValue(bpRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data)
    values.push(data);
})
onValue(bmiRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data)
    values.push(data);
})
onValue(vitalRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data)
    values.push(data);
})
onValue(diabeticRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data)
    values.push(data);
})


app.get('/', (req, res) => {
    res.send(values)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})








