import React from "react";

const Footer = () => {
  return (
    <div id="footer" className="mt-4 p-5">
      <p className="copyright m-0">
        © {new Date().getFullYear()} Mythics, LLC. A Mythics Emergent Group
        Company. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
