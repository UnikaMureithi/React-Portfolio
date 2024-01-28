function Projects() {
    return (
        <section id="hobbies" className="hobbies" style={{ marginLeft: '20pt' }}>
      <div className="container">
        <div className="section-title">
          <div>
            <img src="/src/media/projects.png" width="160" height="160" style={{ float: 'right' }} />
          </div>
          <h2>My Projects</h2>
          <h3>Quick Tibabu Web Application:</h3>
          <p style={{ fontSize: '90%' }}>
            <p>
              I developed Quick Tibabu Web Application following the SDLC cycle, the system was based on
              enabling users easily accessible healthcare services from doctors remotely, by allowing them to
              book appointments. For the system to come to fruition the following milestones were achieved:
            </p>
            <ul>
              <li>Carrying out requirements engineering using information from various individuals.</li>
              <br />
              <li>Design and analysis using Lucid charts.</li>
              <br />
              <li>Coding and Implementation using Laravel framework and web development languages.</li>
              <br />
              <li>Testing the system.</li>
            </ul>
            <br />
            <p>
              Additionally, in my final year of University, I was able to develop a web-based application for
              the prediction and risk-assessment of cardiovascular diseases. I implemented Python, Django framework,
              and machine learning algorithms for enhanced diagnostic accuracy.
            </p>
          </p>
          <br />
          <p>
            Additionally, in my final year of University I was able to develop a web-based application for the prediction
            and risk-assessment of cardiovascular diseases. I was able to implement Python, Django framework, and machine
            learning algorithms for enhanced diagnostic accuracy
          </p>

          <h3>Cardiovascular Disease (CVD) Prediction:</h3>
          <p>
            I was able to develop a web-based application to predict individuals' susceptibility to CVDs, by using their
            inputs such as age, height, weight, gender, smoking status and alcohol intake, to get an output of either absence
            or presence of CVD. Additionally, I provided data visualization through the use of Chart JS, for users to view
            analytics such as charts and graphs.
          </p>
        </div>
      </div>
    </section>
    );
}
export default Projects;