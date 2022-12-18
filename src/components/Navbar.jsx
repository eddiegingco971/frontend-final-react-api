import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      // <nav classNameName="navbar bg-dark text-light">
      //   <h1>Midterm Final Project Reactjsx</h1>

      //       <div className="links">
      //         <strong>
      //           <Link to="/">Home</Link>
      //           <Link to="/students">Students</Link>
      //           <Link to="/venues">Venues</Link>
      //           <Link classNameName="btn btn-light" to="/login">Login</Link>
      //           <Link classNameName="btn btn-light" to="/register">Register</Link>
      //         </strong>
      //       </div>
    
      // </nav>

      <nav className="navbar navbar-expand-lg elavation-4 bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand"to="/" style={{
            fontSize:"30px",
            fontWeight:"bold",
            color:"white",
          }}>Final Project</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

           
              <li className="nav-item">
                <strong><Link className="l-4 nav-link btn btn-primary btn-sm rounded" to="/">Home</Link></strong>
              </li>

              <li className="nav-item">
                <strong><Link className="l-4 nav-link btn btn-primary btn-sm rounded" to="/products">Products</Link></strong>
              </li>

              {/* <li className="nav-item">
                <strong><Link className="nav-link text-light" to="/students">Students</Link></strong>
              </li>
              <li className="nav-item">
                <strong><Link className="nav-link text-light" to="/venues">Venues</Link></strong>
              </li>
              <li className="nav-item">
                <strong><Link className="nav-link btn btn-light" to="/login">Login</Link></strong>
              </li>
              <li className="nav-item">
                <strong><Link className="nav-link btn btn-light" to="/register">Register</Link></strong>
              </li> */}
              
          </ul>
          </div>
        </div>
      </nav>

    // <nav className="navbar custom-navbar navbar-expand-md navbar-light fixed-top" data-spy="affix" data-offset-top="10">
    //     <div className="container">
    //         <Link className="navbar-brand" to="/">
    //             <img src="../assets/imgs/header.jpg" alt=""/>
    //         </Link>
    //         <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //             <span className="navbar-toggler-icon"></span>
    //         </button>
    //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //             <ul className="navbar-nav ml-auto">                     
    //                 <li className="nav-item">
    //                     <Link className="nav-link" to="#service">Our Service</Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link className="nav-link" to="#about">About Us</Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link className="nav-link" to="#portfolio">Portfolio</Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link className="nav-link" to="#blog">Blog</Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link className="nav-link" to="#contact">Contact</Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link to="components.html" className="ml-4 nav-link btn btn-primary btn-sm rounded">Components</Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link to="/" className="ml-4 nav-link btn btn-primary btn-sm rounded">Home</Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link to="/products" className="ml-4 nav-link btn btn-primary btn-sm rounded">Products</Link>
    //                 </li>
    //             </ul>
    //         </div>
    //     </div>
    //     </nav>
    );
}
 
export default Navbar;