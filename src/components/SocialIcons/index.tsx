import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

import { Icons } from "./styles";

export function SocialIcons() {
  return (
    <Icons>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <FaFacebookF />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <FaTwitter />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <FaInstagram />
      </a>
    </Icons>
  );
}
