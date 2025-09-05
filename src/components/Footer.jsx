// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 ">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-3">About Us</h2>
          <p className="text-sm leading-relaxed">
            We are a streaming platform providing unlimited movies, TV shows,
            and exclusive content for entertainment lovers worldwide. Our goal
            is to bring cinema closer to you at an affordable price.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/browse" className="hover:underline">
                Browse
              </a>
            </li>
            <li>
              <a href="/login" className="hover:underline">
                Sign In
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-3">Contact Us</h2>
          <p className="text-sm">📧 support@netflix-clone.com</p>
          <p className="text-sm">📍 Mumbai, India</p>
          <p className="text-sm">📞 +91 98765 43210</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} Netflix Clone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
