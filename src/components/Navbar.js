import React from 'react';

function Navbar() {
  return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                  <div className="container">
                    <a className="navbar-brand" href="#">HOME</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Users </a>
                            </li> 
                        </ul>
                    </div>
              </div>
            </nav>
            
            
        </div>
  );
}

export default Navbar;
