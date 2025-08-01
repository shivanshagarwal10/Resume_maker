import React from "react";
import { Link } from "react-router";

function Contact() {
  return (
    <div className="bg-base-100">
      {/* Hero Section */}
      <section className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold">Contact Us</h1>
            <p className="py-6 text-lg">
              Have questions? We’d love to hear from you. Reach out and we’ll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-lg font-medium">Name</label>
              <input type="text" className="input input-bordered w-full" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-lg font-medium">Email</label>
              <input type="email" className="input input-bordered w-full" placeholder="Your Email" />
            </div>
            <div>
              <label className="block text-lg font-medium">Message</label>
              <textarea className="textarea textarea-bordered w-full" rows="5" placeholder="Your Message"></textarea>
            </div>
            <button className="btn btn-primary w-full">Send Message</button>
          </form>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Contact Information</h2>
          <p className="text-lg mb-4">Feel free to reach us through the following channels:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl p-6">
              <h3 className="text-xl font-bold">📍 Address</h3>
              <p>123 AI Street, Tech City, 56789</p>
            </div>
            <div className="card bg-base-100 shadow-xl p-6">
              <h3 className="text-xl font-bold">📧 Email</h3>
              <p>support@airesume.com</p>
            </div>
            <div className="card bg-base-100 shadow-xl p-6">
              <h3 className="text-xl font-bold">📞 Phone</h3>
              <p>+1 234 567 890</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="footer-title">AI Resume Maker</h4>
              <p>Your go-to tool for creating professional resumes with AI.</p>
            </div>
            <div>
              <h4 className="footer-title">Quick Links</h4>
              <Link to="/about" className="link link-hover">About Us</Link>
              <Link to="/features" className="link link-hover">Features</Link>
              <Link to="/contact" className="link link-hover">Contact</Link>
            </div>
            <div>
              <h4 className="footer-title">Legal</h4>
              <Link to="/privacy" className="link link-hover">Privacy Policy</Link>
              <Link to="/terms" className="link link-hover">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};


export default Contact

