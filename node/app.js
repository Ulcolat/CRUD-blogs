import express from "express"
import cors from "cors"
import db from "./database/db.js"
import blogRoutes from "./routes/routes.js"

const app = express();

//Ruta inicial
app.get('/', (req,res)=>{
    res.send('Comprobando')
})

app.use(cors())
app.use(express.json())
app.use('/blogs',blogRoutes)

//Verificar la conexion a la base de datos
try {
    db.authenticate()
    console.log('Conexión exitosa a la Base de Datos')
} catch (error) {
    console.log(`El error de conexión es: ${error}`)
}

app.listen(8000,()=>{
    console.log('Server corriendo en: http://localhost:8000/')
})