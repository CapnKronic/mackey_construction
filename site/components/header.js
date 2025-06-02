class Header extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback() {
        this.innerHTML = `
        <header id="header" class="header d-flex align-items-center">
            <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
                <a href="/mackey_construction/index.html" class="logo d-flex align-items-center">
                <h1>Mackey Construction<span>.</span></h1>
                </a>
                <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
                <nav id="navbar" class="navbar">
                    <ul>
                        <li><a href="/mackey_construction/index.html">Home</a></li>
                        <li><a href="site/about.html" class="active">About</a></li>
                        <li><a href="site/contact.html">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>`;
    }
}



customElements.define('header-component', Header);