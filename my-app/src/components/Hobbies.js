function Hobbies() {
    return (
        <section id="about" className="about" style={{ marginLeft: '20pt' }}>
        <div className="interests container">
      <div className="section-title">
        <h2>Hobbies</h2>
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="material-icons">cake</i>
            <h3>Baking</h3>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="material-icons">outdoor_grill</i>
            <h3>Cooking</h3>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="material-icons">pool</i>
            <h3>Swimming</h3>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="material-icons">flight</i>
            <h3>Traveling</h3>
          </div>
        </div>
      </div>
    </div>
    </section>
    );
}
export default Hobbies;