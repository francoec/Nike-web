import React from 'react'
import './stylesnav.css'
import CartWidget from './CartWidget'

const Navbar2 = () =>{
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <img src="../public/nike2.svg" width="50" height="50" alt=""/>
            
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
                <a class="nav-link" href="#">Destacado <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Hombre</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#">Mujer</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#">Niño/a</a>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <CartWidget/>
            </form>
        </div>
        </nav>
        </>
    )
}

export default Navbar2