const Contact = () => {
    return (
        <>
        {/* Contact Section */}
      <div className="w3-container w3-padding-64" id="contact">
      <h1>Contact</h1><br />
      <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
      <p className="w3-text-blue-grey w3-large"><b>Catering Service, 42nd Living St, 43043 New York, NY</b></p>
      <p>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
      <form action="/action_page.php" target="_blank">
        <p><input className="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name" /></p>
        <p><input className="w3-input w3-padding-16" type="number" placeholder="How many people" required name="People" /></p>
        <p><input className="w3-input w3-padding-16" type="datetime-local" placeholder="Date and time" required name="date" defaultValue="2020-11-16T20:00" /></p>
        <p><input className="w3-input w3-padding-16" type="text" placeholder="Message \ Special requirements" required name="Message" /></p>
        <p><button className="w3-button w3-black w3-section" type="submit"><i class="fa fa-paper-plane"></i> SEND MESSAGE</button></p>
      </form>
    </div>

    <div className="google-map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24181.3786419009!2d-74.00582770125507!3d40.74723507697854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2593079f24bb9%3A0x2ea606b3a08273d5!2s42nd%20Street%20Connector!5e0!3m2!1sen!2sin!4v1675318204251!5m2!1sen!2sin" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Le Catering location" />
      </div>
{/* Footer */}
<footer className="w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off">
        <a href="#home" className="w3-button w3-light-grey"><i className="fa fa-arrow-up w3-margin-right" />To the top</a>
        <div className="w3-xlarge w3-section">
          <i className="fa-brands fa-square-facebook w3-hover-opacity " />{" "}
          <i className="fa-brands fa-instagram w3-hover-opacity" />{" "}
          <i className="fa-brands fa-snapchat w3-hover-opacity" />{" "}
          <i className="fa-brands fa-pinterest-p w3-hover-opacity" />{" "}
          <i className="fa-brands fa-twitter w3-hover-opacity" />{" "}
          <i className="fa-brands fa-linkedin-in w3-hover-opacity" />
        </div>
      </footer>
     
    
    </>
    );
}

export default Contact;