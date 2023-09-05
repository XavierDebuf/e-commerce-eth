import React from "react";


function Nav() {

    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="./">Site d'enchères sur NFT</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="./Games">Acheter des NFTs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./edit">Proposer un NFT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>


    );
}
export default Nav;