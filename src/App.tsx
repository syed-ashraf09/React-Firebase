import React from 'react';
import './App.css';
import {Route, createBrowserRouter, createRoutesFromElements, Link, Outlet, RouterProvider} from 'react-router-dom';
import { Main } from './pages/main/main';
import { Login } from './pages/login';
import { Navbar } from './components/navbar';
import { CreatePost } from './pages/create-post/create-post';


function App() {

  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Main />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/createpost" element={<CreatePost />}/>


      </Route>
    )
  )


  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
