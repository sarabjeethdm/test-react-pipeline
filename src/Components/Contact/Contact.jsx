import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact" id="Contact">
      <div className="Contact-left">
        <p className="email">sarabjeet.9353@gmail.com</p>
        <p className="linkedin">
          <a target="_blank" href="https://www.linkedin.com/in/sarabjeet-singh-914aab254">LinkedIn</a>
        </p>
        <p className="github">
          <a target="_blank" href="https://github.com/Linux-DEX">GitHub</a>
        </p>
      </div>
      <div className="Contact-right">
        <h1 className="Contact-head">
          Available for select freelance opportunities
        </h1>
        <h2 className="Contact-body">
          Have an exciting project you need help with? Send me an email or
          contact me via LinkedIn!
        </h2>
      </div>
    </div>
  );
};

export default Contact;
