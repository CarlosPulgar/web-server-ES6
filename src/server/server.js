
import express from "express";
import path from "path";

export const startServer = (options) => {
    const { port, public_path = "public"} = options

    const app = express();

    //para poder usar los midlewares se usa la pálabra ¡ use ! nativa de express
    app.use(express.static(public_path)) // contenido estatico que ponemos disponible 

    app.get('*',(req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`);
        res.sendFile(indexPath)
    }) 

  app.listen(port,()=>{
    console.log(`escuchando en el puerto ${port}`);
    
  })
    
}

