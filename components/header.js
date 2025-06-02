class Header extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback() {
        this.innerHTML = `
        <header id="header" class="header d-flex align-items-center">
            <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
                <a href="../index.html" class="logo d-flex align-items-center">
              <h3 style="white-space: nowrap;color:white; font-weight: 500;">Mackey <span style="font-weight: 100;">Construction</span></h3>
                
                </a>
                <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
                <nav id="navbar" class="navbar">
                    <ul>
                        <li><a href="../index.html">Home</a></li>
                        <li><a href="../pages/about.html" class="active">About</a></li>
                    </ul>
                </nav>
            </div>
        </header>`;
    }
}



customElements.define('header-component', Header);