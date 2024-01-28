function Contact() {
    return (
        <section id="contact" className="contact" style={{ marginLeft: '20pt' }}>
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
        </div>

        <div>
          <div>
            <div className="info-box">
              <h3><i className="material-icons">place</i>My Address</h3>
              <p>Ngong, Nairobi 535022</p>
            </div>
          </div>

          <div>
            <div className="info-box">
              <h3><i className="material-icons">email</i>Email Me</h3>
              <p>unikamureithi@gmail.com</p>
            </div>
          </div>

          <div>
            <div className="info-box">
              <h3><i className="material-icons">call</i>Call Me</h3>
              <p>+254707233510</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    );
}
export default Contact;