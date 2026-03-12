function Contact() {
  return (
    <section className="container">
      <h1 className="text-center mb-3">Contact</h1>

      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">

          <div className="card shadow-sm p-4 contact-card">

            <h4 className="mb-4 text-center">Get In Touch</h4>

            <div className="mb-3">
              <strong>Name:</strong>
              <p className="mb-0">Sowjanya Kandra</p>
            </div>

            <div className="mb-3">
              <strong>Role:</strong>
              <p className="mb-0">Frontend Developer</p>
            </div>

            <div className="mb-3">
              <strong>Email:</strong>
              <p className="mb-0">
                <a href="mailto:kandra.sowjanya@gmail.com">
                  kandra.sowjanya@gmail.com
                </a>
              </p>
            </div>

            <div className="mb-3">
              <strong>Phone:</strong>
              <p className="mb-0">+44 7514473040</p>
            </div>

            <div className="mb-3">
              <strong>Location:</strong>
              <p className="mb-0">Coventry, UK</p>
            </div>

            <div className="mb-3">
              <strong>LinkedIn:</strong>
              <p className="mb-0">
                <a
                  href="https://www.linkedin.com/in/sowjanya-kandra-3aab3490"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
              </p>
            </div>

            <div className="mb-3">
              <strong>GitHub:</strong>
              <p className="mb-0">
                <a
                  href="https://github.com/sowjanya-Frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/sowjanya-Frontend
                </a>
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;