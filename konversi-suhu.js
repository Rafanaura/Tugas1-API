const express = require('express') //import express
const bodyParser = require('body-parser')
const app = express()              //deklarasi variabel express
const port = 8080                  //deklarasi port
 
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.send("berhassil menampilkan GET")
})

app.get('/convert/celcius/:angka', (req,res)=>{

    const celcius = req.params.angka
    const reamur = 4/5 * parseInt(celcius)
    const fahrenheit = (9/5 * parseInt(celcius)) + 32
    const kelvin = parseInt(celcius) + 10

    res.send({
        celcius : celcius,
        result : {
            reamur,
            fahrenheit,
            kelvin
        }
    })
})
app.get('/convert/fahrenheit/:angka', (req,res)=>{

    const fahrenheit = req.params.angka
    const reamur = 4/9 * (parseInt(fahrenheit)-32)
    const celcius = 5/9 * (parseInt(fahrenheit)-32)
    const kelvin = 5/9 * (parseInt(fahrenheit)-32) +273

    res.send({
        fahrenheit : fahrenheit,
        result : {
            reamur,
            celcius,
            kelvin
        }
    })
})
app.get('/convert/kelvin/:angka', (req,res)=>{

    const kelvin = req.params.angka
    const celcius = parseInt(kelvin)-273
    const fahrenheit = 9/5 * (parseInt(kelvin)-273) + 32
    const reamur = 4/5*(parseInt(kelvin)-273)

    res.send({
        kelvin : kelvin,
        result : {
            celcius,
            fahrenheit,
            reamur
        }
    })
})
app.get('/convert/reamur/:angka', (req,res)=>{

    const reamur = req.params.angka
    const celcius = 5/4 * parseInt(reamur)
    const fahrenheit = (9/4 * parseInt(reamur)) + 32
    const kelvin = (5/4 * parseInt(reamur)) + 273

    res.send({
        reamur : reamur,
        result : {
            celcius,
            fahrenheit,
            kelvin
        }
    })
})
app.listen(port, () => {            
    console.log(`Server di port ${port}`)
})
