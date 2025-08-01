import React from "react";
import { Link } from "react-router";

function About() {
  return (
    <div className="bg-base-100">
      {/* About Us Section */}
      <section className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold">About Us</h1>
            <p className="py-6 text-lg">
              Welcome to AI Resume Maker, your go-to tool for creating professional resumes with the power of AI. Our mission is to make resume building fast, easy, and tailored to your needs.
            </p>
            <Link to={"/generate-resume"} className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <h3 className="card-title">Empower Job Seekers</h3>
                <p>
                  Our AI analyzes your input and generates a tailored resume for you, empowering you to stand out in the job market.
                </p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <h3 className="card-title">Innovate Resume Building</h3>
                <p>
                  We provide multiple professionally designed templates to ensure your resume looks polished and modern.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <h3 className="card-title">Innovation</h3>
                <p>We leverage cutting-edge AI technology to provide the best resume-building experience.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <h3 className="card-title">Simplicity</h3>
                <p>Our tool is designed to be user-friendly, allowing anyone to create a professional resume in minutes.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <h3 className="card-title">Excellence</h3>
                <p>We strive for excellence in every aspect of our service to ensure your satisfaction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us</h2>
          <p className="mb-8 text-lg">
            Join thousands of users who have landed their dream jobs with our AI resume maker. Let's create your perfect resume together.
          </p>
          <Link to={"/generate-resume"} className="btn btn-primary">
            Get Started Now
          </Link>
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
              <a href="#" className="link link-hover">
                About Us
              </a>
              <a href="#" className="link link-hover">
                Features
              </a>
              <a href="#" className="link link-hover">
                Contact
              </a>
            </div>
            <div>
              <h4 className="footer-title">Legal</h4>
              <a href="#" className="link link-hover">
                Privacy Policy
              </a>
              <a href="#" className="link link-hover">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;

