import BlogModel from "../models/BlogModel.js";

//CRUD

//Mostrar todos
export const getAllBlogs = async (req,res) => {
    try {
        const blogs = await BlogModel.findAll()
        res.json(blogs)
    } catch (error) {
        res.json({message: error.message})
    }
}

//Mostrar uno en concreto
export const getBlog = async (req, res) => {
    try {
        const blog = await BlogModel.findAll({
            where:{id:req.params.id}
        })
        res.json(blog[0])
    } catch (error) {
        res.json({message: error.message})        
    }
}
//Crear
export const createBlog = async (req, res) => {
    try {
        await BlogModel.create(req.body)
        res.json({"messsage":"¡Registro creado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}

//Actualizar
export const updateBlog = async (req, res) => {
    try {
        BlogModel.update(req.body,{
            where: {id: req.params.id}
        })
        res.json({"messsage":"¡Registro actualizado correctamente!"})

    } catch (error) {
        res.json({message: error.message})

    }
}

//Eliminar
export const deleteBlog = async (req, res) => {
    try {
        await BlogModel.destroy({
            where: { id : req.params.id}
        })
        res.json({"messsage":"¡Registro eliminado correctamente!"})

    } catch (error) {
        res.json({message: error.message})

    }
}