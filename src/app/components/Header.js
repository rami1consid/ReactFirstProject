import React from "react";

export class Header extends React.Component{
  render(){
    return(
        <nav className="navbar navbar-default" >
          <div className="container">
            <div className="navbar-header">
              <ul className="nav nabar-nav">
                <li href="#">Home</li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}
