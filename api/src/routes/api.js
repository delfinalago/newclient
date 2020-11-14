var request = require("request");


const server = require('express').Router();
const { parsedBody} = require('body-parser');
const fetch = require('node-fetch');



// Trae todo de mercado libre, segun la q 

// server.get("/search/:q", (req, res) => {

// const q = req.params.q
// const url =  'https://api.mercadolibre.com/sites/MLA/search?q=' + q;
// console.log("que hay ?", q);
//     fetch(url)
//     .then(res => res.json())
//     .then(json => {
//         // console.log(json);
//         res.send(json);
//     })
//     .catch(err => console.log(err))
    

// })



server.get("/search/:q", (req, res) =>{
    const q = req.params.q
    request('https://api.mercadolibre.com/sites/MLA/search?q=' + q, 
    function (error , response, body){
        if (!error && response.statusCode == 200){
        var bodyObject = JSON.parse(body);
        console.log("Que es este bodyObjects?" , bodyObject)
        console.log("site_id =" , bodyObject.site_id)
        console.log("Result =", bodyObject.results.length)
        // Reccorer BodyObject y elegir lo que me sirve y armar un nuevo string (cambiar de objeto a sting)
        let ArrayFinal = []
        for (let i = 0; i < bodyObject.results.length; i++) {
         var NuevoProducto = {

         id : bodyObject.results[i].id,
         title: bodyObject.results[i].title,
         price: bodyObject.results[i].price,
         currency_id: bodyObject.results[i].currency_id,
         condition: bodyObject.results[i].condition,
         thumbnail: bodyObject.results[i].thumbnail,
         available_quantity: bodyObject.results[i].available_quantity 

         }
         ArrayFinal.push(NuevoProducto)
        }
        console.log("NUEVO STRING =", NuevoProducto)
        console.log("ARRAY FINAL =", ArrayFinal)
        console.log("ARRAY FINAL.LENGTH =", ArrayFinal.length)
            
      
        // console.log("length", body.length)
        // console.log("TIPO", typeof body)
        // res.send(body);
        res.send(ArrayFinal)

        }
    }
         )
});

















module.exports =  server;