import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#131C28] text-white text-center w-full fixed left-0 bottom-0">
      <div className="flex flex-wrap justify-between items-center px-4 py-8">
        <div className="flex flex-col justify-center items-center min-w-[200px] mx-4">
          <img src="./Logo.svg" alt="Logo" className="w-[150px] mb-48 -ml-4" />
          <div className="mt-16">
            <h3 className="text-lg">Connect with us for any inquiries or support:</h3>
            <p className="mt-2">info@cloutra.com</p>
            <div className="social-media mt-4">
              <p>facebook, twitter, instagram, linkedin</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center min-w-[200px] mx-4">
          <h4 className="text-lg mb-2">Products</h4>
          <ul className="list-none p-0 m-0 text-2xl">
            <li className="my-1">AI Tailor Resume</li>
            <li className="my-1">AI Score Resume</li>
            <li className="my-1">AI Build Resume</li>
          </ul>
        </div>

        <div className="flex flex-col justify-center items-center min-w-[200px] mx-4">
          <h4 className="text-lg mb-2">Company</h4>
          <ul className="list-none p-0 m-0 text-2xl">
            <li className="my-1">Blog</li>
            <li className="my-1">Terms & Conditions</li>
            <li className="my-1">Privacy Policy</li>
            <li className="my-1">Refund Policy</li>
          </ul>
        </div>

        <div className="flex flex-col justify-center items-center min-w-[200px] mx-4">
          <h4 className="text-lg mb-2">Join our Community</h4>
          <ul className="list-none p-0 m-0 text-2xl">
            <li className="my-1">
              <span className="bg-[#F6D155] px-8 py-2 rounded-lg text-[#131C28] text-lg">Join Discord Community</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-4 border-t border-gray-600 py-4">
        <p>Copyright © 2024, <span className="text-[#F6D155]">QuickApply.com</span> | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
