import React from "react";



function Navbar(props){

    
    


    return(
        <nav className="navbar navbar-expand-lg " id="nav1" style={{backgroundColor:props.color02}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>          <div className="collapse navbar-collapse"  id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <a className="nav-link " aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact-Us</a>
              </li>
            </ul>
            <label htmlFor="colorBox1" className="mx-4"><u><strong>NavBarColor-Change</strong></u></label>
            <input type="color" id="colorBox1" classNameName="me-8" onClick={props.fun2}/>
            <label htmlFor="coloBox" className="mx-4"><u><strong>BodyColor-Change</strong></u></label>
            <input type="color" id="colorBox" classNameName="me-8" onClick={props.fun1}/>

            
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
}
export default Navbar;