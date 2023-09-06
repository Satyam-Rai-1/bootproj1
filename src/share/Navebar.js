import React from 'react'
import { Link } from 'react-router-dom';
import { LoginModal, RegisterModal } from './Modals'

export default function Navebar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img src="myimages/mickey-mouse.jpg" alt="mouse" width="40" />
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="about">About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="service">Service</Link>
              </li>
             
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
              
            </form>
            <button class="btn btn-primary ms-2"  type="button" data-bs-toggle="modal" data-bs-target="#registerModal">Register</button>
              <button class="btn btn-success ms-2" type="button" data-bs-toggle="modal" data-bs-target="#LoginModal">Log In</button>
          </div>
        </div>
        <RegisterModal/>
        <LoginModal/>
      </nav>
    </>
  )
}
