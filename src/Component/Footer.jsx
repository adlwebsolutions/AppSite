import React from "react";
import {
  resourcesLinks,
  platformLinks,
  communityLinks,
} from "../constants/index";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-700 mt-20 py-10 flex justify-center lg:justify-around bg-neutral-900 text-neutral-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-0 w-full max-w-6xl">
        {/* <!-- Resources Column ?--> */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((item, index) => (
              <li className="mt-3" key={index}>
                <a className="hover:text-white" href={item.href}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* <!-- Platform Column --> */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((item, index) => (
              <li className="mt-3" key={index}>
                <a className="hover:text-white" href={item.href}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* <!-- Community Column --> */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((item, index) => (
              <li className="mt-3" key={index}>
                <a className="hover:text-white" href={item.href}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
