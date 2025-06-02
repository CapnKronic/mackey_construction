class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
  <footer id="footer" class="footer">

    <div class="footer-content position-relative">
      <div class="container">
        <div class="row">

          <div class="col-lg-4 col-md-6">
            <div class="footer-info">
              <h3>Mackey Construction</h3>
              <p>
                DALLAS TX<br><br>
                <strong>Phone:</strong> +1 (214)555-5555<br>
                <strong>Email:</strong> info@jmackeyconstruction.com<br>
              </p>
              <div class="social-links d-flex mt-3">
                <a href="#" class="d-flex align-items-center justify-content-center"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="../index.html">Home</a></li>
              <li><a href="../pages/about.html">About us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-legal text-center position-relative">
      <div class="container">
        <div class="copyright">
          &copy; Copyright <strong><span>Mackey Construction</span></strong>. All Rights Reserved
        </div>
        <div class="credits">
          Designed by <a href="https://kronicjoints.com/"> JMack</a>
        </div>
      </div>
    </div>

  </footer>`;
    }
}
customElements.define('footer-component', Footer);