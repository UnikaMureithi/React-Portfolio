function Header() {
    return (
        <div class="container">
           
          <nav class="navbar" id="navbar">
              <ul>
                <li class="active"><a href="#header">Home</a></li>
                <li><a href="#about">About Me</a></li> 
                <li><a href="#hobbies">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
  
            <div>
                <h1 style={{ marginLeft: '20pt', color: 'white' }}>Welcome to my Portfolio!</h1>
            </div>
  
            <div class="rounded-image" style={{ float: 'right' }}>
                <img src="media/unika.jpg" alt="" />
            </div>
    
            <h2 style={{ marginLeft: '20pt' }}><span>
            <p>My name is Unika Mureithi and I
          <br />pursued a Bachelor's of Business Information Technology.
          <br />Some of my strengths are good interpersonal communication,
          <br />critical thinking, and adaptability.
          <br />I am looking to leverage the various skills I have acquired to apply as an 
          active student, to assist future organizations in achieving their objectives
          and overall mission. Highly motivated and capable of productive self-management
          in solitary projects and effective team collaboration.
          </p>
          </span> </h2>
  
        </div>
      );
}
export default Header;