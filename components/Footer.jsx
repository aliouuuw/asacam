const Footer = () => (
  <footer className="bg-black text-white py-10">
    <div className="px-8 md:px-16 xl:px-24">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-4">
          <h3 className="text-xl font-bold">ASACAM</h3>
          <p className="">
            © {new Date().getFullYear()} ASACAM. All rights reserved.
          </p>
        </div>
        <ul className="flex space-x-4 mb-4 items-end">
          <li>
            <a href="#" className="">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
