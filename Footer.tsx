import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

function Footer() {
  return (
    <div className="bg-white py-16 text-gray-800">
      <div className="container grid lg:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-semibold text-accent">fXn</h2>
          <p className="mt-4 text-gray-500 max-w-xs">
            Stylish fashion and accessories delivered with care, just for you.
          </p>
          <div className="flex gap-4 mt-6 text-2xl text-gray-500">
            <a href="#" className="hover:text-pink-600">
              <BsFacebook />
            </a>
            <a href="#" className="hover:text-pink-600">
              <BsInstagram />
            </a>
            <a href="#" className="hover:text-pink-600">
              <BsTwitter />
            </a>
            <a href="#" className="hover:text-pink-600">
              <BsLinkedin />
            </a>
          </div>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-accent">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-gray-500">
            <li><a href="#" className="hover:text-pink-600">Home</a></li>
            <li><a href="#" className="hover:text-pink-600">Shop</a></li>
            <li><a href="#" className="hover:text-pink-600">About Us</a></li>
            <li><a href="#" className="hover:text-pink-600">Contact</a></li>
            <li><a href="#" className="hover:text-pink-600">Blog</a></li>
          </ul>
        </div>
        
        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-semibold text-accent">Newsletter</h3>
          <p className="mt-4 text-gray-500">Sign up for exclusive offers and the latest news from our store!</p>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg border-2 border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:border-pink-600"
            />
            <button className="mt-4 w-full py-2 bg-accent text-white font-semibold rounded-lg hover:bg-pink-500">
              Subscribe
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold text-accent">Contact Us</h3>
          <p className="mt-4 text-gray-500">
            <strong>Address:</strong> 123 Fashion Street, New York, NY
          </p>
          <p className="mt-2 text-gray-500">
            <strong>Email:</strong> support@fxn.com
          </p>
          <p className="mt-2 text-gray-500">
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-300 pt-6 text-center text-gray-500 text-sm">
        <p>© 2024 fXn. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer;
