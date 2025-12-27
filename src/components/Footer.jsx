/**
 * Footer Component
 * 
 * Simple footer with links and copyright
 */

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-300 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600">
            <p className="font-semibold text-black mb-2">InternConnect © 2024</p>
            <p className="text-sm">Find Your Perfect Internship in India</p>
          </div>
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
