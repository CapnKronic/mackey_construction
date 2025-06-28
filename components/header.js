class Header extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback() {
        this.innerHTML = `
        <header id="header" class="header d-flex align-items-center">
            <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
                <a href="../index.html" class="logo d-flex align-items-center">
              <img class="logo" src="../assets/svg/mack_logo.svg" />
                
                <h2 class="small-name">
                   
                    M<span>C</span>
                </h2>

                <h2 class="large-name">
                    Mackey <span>Construction</span>
                </h2>
                </a>
                <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
                <nav id="navbar" class="navbar">
                    <ul>
                    <li><a href="../index.html">Home</a></li>
                    <li><a href="../pages/projects.html">Projects</a></li>
                    <li><a href="../pages/about.html">About</a></li>
                    </ul>
                </nav>
            </div>
        </header>`;
    }
}



customElements.define('header-component', Header);