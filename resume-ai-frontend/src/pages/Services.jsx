import React from 'react'
import {Link} from 'react-router'

function Services() {
  return (
    <div className="bg-base-100">
      {/* Hero Section */}
      <section className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold">Our Services</h1>
            <p className="py-6 text-lg">
              Discover the wide range of services we offer to help you achieve your career goals.
            </p>
            <Link to={"/contact"} className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4">📄</div>
                <h3 className="card-title">Resume Writing</h3>
                <p>
                  Get a professionally written resume that highlights your skills and experiences.
                </p>
              </div>
            </div>
            {/* Service 2 */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="card-title">Career Counseling</h3>
                <p>
                  Receive personalized career advice to help you navigate your professional journey.
                </p>
              </div>
            </div>
            {/* Service 3 */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="card-title">Interview Coaching</h3>
                <p>
                  Prepare for your interviews with our expert coaching sessions and mock interviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <p>
                  "The career counseling I received was invaluable. I now have a clear path forward and am excited about my future."
                </p>
                <div className="flex items-center mt-4">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img
                        src="https://randomuser.me/api/portraits/men/3.jpg"
                        alt="Client"
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Michael Johnson</h4>
                    <p>Product Manager</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <p>
                  "The resume writing service was fantastic. My new resume really stands out and has opened many doors."
                </p>
                <div className="flex items-center mt-4">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img
                        src="https://randomuser.me/api/portraits/women/4.jpg"
                        alt="Client"
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Emily Davis</h4>
                    <p>Graphic Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="mb-8 text-lg">
            Take the first step towards a successful career. Explore our services today!
          </p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="footer-title">AI Career Services</h4>
              <p>Your trusted partner in career growth and development.</p>
            </div>
            <div>
              <h4 className="footer-title">Quick Links</h4>
              <a href="#" className="link link-hover">
                About Us
              </a>
              <a href="#" className="link link-hover">
                Services
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

export default Services

