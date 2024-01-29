function About() {
    return (
        <section id="about" className="about" style={{ marginLeft: '20pt' }}>
      <div className="about-me container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>

        <div className="row">
          <div className="cont">
            <div className="box1">
              <img src="/React-Portfolio/unika.jpg" alt="" />
            </div>
            <div className="box2">
              <div className="row">
                <div>
                  <ul>
                    <li>
                      <i className="material-icons">calendar_month</i>{' '}
                      <strong>Birthday:</strong> 25 February 2002
                    </li>{' '}
                    <br />
                    <br />
                    <li>
                      <i className="material-icons">call</i>{' '}
                      <strong>Phone:</strong> +254707233510
                    </li>{' '}
                    <br />
                    <br />
                    <li>
                      <i className="material-icons">home</i>{' '}
                      <strong>City:</strong> Nairobi, Kenya
                    </li>{' '}
                    <br />
                    <br />
                    <li>
                      <i className="material-icons">place</i>{' '}
                      <strong>Address:</strong> Ngong, Kibiko
                    </li>{' '}
                    <br />
                    <br />
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <i className="material-icons">label</i>{' '}
                      <strong>Age:</strong> 21
                    </li>{' '}
                    <br />
                    <br />
                    <li>
                      <i className="material-icons">assignment</i>{' '}
                      <strong>Degree:</strong> Bachelor of Business Information
                      Technology
                    </li>{' '}
                    <br />
                    <br />
                    <li>
                      <i className="material-icons">mail</i>{' '}
                      <strong>Email:</strong> unikamureithi@gmail.com
                    </li>{' '}
                    <br />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      );
}
export default About;