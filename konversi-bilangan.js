const express = require('express') //import express
const bodyParser = require('body-parser')
const app = express()              //deklarasi variabel express
const port = 8000                  //deklarasi port
 
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.send("berhasil menampilkan GET")
})

app.get('/convert/biner/:angka', (req,res)=>{

    let angka = req.params.angka
    let desimal = parseInt(angka, 2);

    res.send({
        biner : angka,
        result : {
            desimal : desimal,
            octal : desimal.toString(8),
            hexadecimal : desimal.toString(16)
        }
    })
})
app.get('/convert/desimal/:angka', (req,res)=>{

    let bilangan = req.params.angka
    let desimal = parseInt(bilangan);

    res.send({
        desimal : desimal,
        result : {
            biner : desimal.toString(2),
            octal : desimal.toString(8),
            hexadecimal : desimal.toString(16)
        }
    })
})
app.get('/convert/hexadecimal/:angka', (req,res)=>{

    let angka = req.params.angka
    let hexadecimal = parseInt(angka, 16);

    res.send({
        hexadecimal : angka,
        result : {
            desimal : hexadecimal,
            biner : hexadecimal.toString(2),
            octal : hexadecimal.toString(8)
        }
    })
})
app.get('/convert/octal/:angka', (req,res)=>{

    let angka = req.params.angka
    let octal = parseInt(angka, 8);

    res.send({
        octal : angka,
        result : {
            desimal : octal,
            biner : octl.toString(2),
            hexadecimal : desimal.toString(16)
        }
    })
})
app.listen(port, () => {            
    console.log(`Server di port ${port}`)
})
