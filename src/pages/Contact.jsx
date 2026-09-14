import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:5000/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert("Message submitted successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          setErrors({});
        } else {
          const data = await response.json();
          setErrors({ form: data.error || 'Server error occurred' });
        }
      } catch (err) {
        setErrors({ form: 'Failed to connect to the server' });
      }
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="section-title">
        <h2>Contact Me</h2>
        <p>Let's build something together</p>
      </div>

      <div className="contact-container">
        <article className="contact-info">
          <h3>Get In Touch</h3>

          <p>
            I'm always interested in discussing new ideas, projects,
            internships, or collaboration opportunities. Feel free to reach
            out.
          </p>

          <div className="contact-item">
            <h4>Email</h4>
            <a href="mailto:riteshpuchakayala02@gmail.com">
              riteshpuchakayala02@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <h4>GitHub</h4>
            <a
              href="https://github.com/RiteshPuchakayala00"
              target="_blank"
              rel="noreferrer"
            >
              github.com/RiteshPuchakayala00
            </a>
          </div>

          <div className="contact-item">
            <h4>LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/ritesh-reddy-puchakayala-966759377/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
        </article>

        <article className="contact-form">
          <form onSubmit={handleSubmit}>
            
            <div className="input-group">
              <label htmlFor="name">Name</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />

              {errors.name && (
                <p className="form-error">{errors.name}</p>
              )}
            </div>

            <div className="input-group">
              <label htmlFor="email">Email</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />

              {errors.email && (
                <p className="form-error">{errors.email}</p>
              )}
            </div>

            <div className="input-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
              />

              {errors.message && (
                <p className="form-error">{errors.message}</p>
              )}
            </div>

            {errors.form && (
              <p className="form-error" style={{ textAlign: 'center', margin: '1rem 0' }}>{errors.form}</p>
            )}

            <button
              type="submit"
              className="submit-btn"
            >
              Send Message
            </button>

          </form>
        </article>
      </div>
    </section>
  );
}

export default Contact;