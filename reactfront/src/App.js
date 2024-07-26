import logo from './logo.svg';
import './App.css';

//Importando componentes
import CompShowBlogs from './blog/ShowBlogs';
import CompCreateBlog from './blog/CreateBlog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompEditBlog from './blog/EditBlog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <BrowserRouter>
          <Routes>
            <Route path='/' element={<CompShowBlogs/>}></Route>
            <Route path='/edit/:id' element={<CompEditBlog/>}></Route>
            <Route path='/create' element={<CompCreateBlog/>}></Route>
          </Routes>
        </BrowserRouter>


    </div>
  );
}

export default App;
