const express = require('express') //import express
const bodyParser = require('body-parser')
const app = express()              //deklarasi variabel express
const port = 8080                  //deklarasi port
 
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.send("berhasil menampilkan GET")
})

app.post('/convert/bmi', (req,res) => {
    let t = req.body.tinggi
    let b = req.body.berat

    let height = parseFloat(t)
    let weight = parseFloat(b)
    
    let bmi = weight / (height * height)
    let status

    if(bmi < 18.5){
        status = "Kekurangan Berat Badan"
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status ="Berat Badan Normal"
    }else if(bmi >= 25.0 && bmi <= 29.9) {
        status = "Kelebihan Berat Badan"
    }else if(bmi > 30.0){
        status= "Obesitas"
    }
    
    res.send({
        
        tinggi : height,
        berat : weight,
        bmi : bmi,
        status : status
    })
})
app.listen(port, () => {            
    console.log(`Server di port ${port}`)
})