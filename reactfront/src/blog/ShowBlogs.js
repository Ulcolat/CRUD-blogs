import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'

//Componente para mostrar todos los blogs
const CompShowBlogs = () => {
    const [blogs, setBlog] = useState([])
    useEffect(() => {
        getBlogs()
    }, [])

    //Obtener todos los blogs de la base de datos mediante Axios
    const getBlogs = async () => {
        const res = await axios.get(URI)
        setBlog(res.data)

    }

    //Eliminar blog concreto
    const deleteBlog = async (id) => {
        await axios.delete(`${URI}${id}`)
        getBlogs()

    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to={"/create"} className='btn btn-primary mt-2 mb-2'><i class="fa-solid fa-plus"></i></Link>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Content</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map(blog => (
                                <tr key={blog.id}>
                                    <td>{blog.title}</td>
                                    <td>{blog.content}</td>
                                    <td>
                                        <Link to={`/edit/${blog.id}`} className='btn btn-info'><i class="fa-regular fa-pen-to-square"></i></Link>
                                        <button className='btn btn-danger' onClick={() => deleteBlog(blog.id)}><i class="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            ))}


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}

export default CompShowBlogs