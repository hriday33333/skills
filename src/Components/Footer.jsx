import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Logo from "../assets/unnamed.png"; // <-- তোমার লোগো

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <footer
      className="footer sm:footer-horizontal bg-[#111] text-neutral-content p-10 rounded-t-2xl"
      data-aos="fade-up"
    >
      {/* LOGO + BRAND */}
      <aside data-aos="fade-right" className="space-y-3">
        <img src={Logo} className="w-16 rounded-xl" alt="Logo" />

        <p className="text-gray-300">
          <span className="text-xl font-bold text-white">SkillSwaps</span>
          <br />
          Learn • Share • Grow Together
        </p>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} SkillSwaps | All Rights Reserved.
        </p>
      </aside>

      {/* IMPORTANT LINKS */}
      <nav data-aos="fade-left">
        <h6 className="footer-title text-white">Important Links</h6>
        <ul className="space-y-2 text-gray-300">
          <li>
            <a href="/" className="link link-hover">
              Home
            </a>
          </li>
          <li>
            <a href="/all-items" className="link link-hover">
              All Items
            </a>
          </li>
          <li>
            <a href="/auth/skills" className="link link-hover">
              My Profile
            </a>
          </li>
          <li>
            <a href="/support" className="link link-hover">
              Support
            </a>
          </li>
        </ul>
      </nav>

      {/* SOCIAL LINKS */}
      <nav data-aos="fade-left">
        <h6 className="footer-title text-white">Follow Me</h6>
        <div className="grid grid-cols-1 gap-3 text-gray-300">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover flex items-center gap-2"
          >
            📘 Facebook
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover flex items-center gap-2"
          >
            🔗 LinkedIn
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover flex items-center gap-2"
          >
            🐙 GitHub
          </a>
        </div>
      </nav>

      {/* CONTACT INFO */}
      <nav data-aos="fade-left">
        <h6 className="footer-title text-white">Contact Info</h6>
        <ul className="space-y-2 text-gray-300">
          <li>
            Email:{" "}
            <a
              href="mailto:example@gmail.com"
              className="link link-hover text-blue-300"
            >
              example@gmail.com
            </a>
          </li>
          <li>
            Phone:{" "}
            <a href="tel:+880123456789" className="link link-hover">
              +880 1234 56789
            </a>
          </li>
          <li>Dhaka, Bangladesh</li>
        </ul>
      </nav>

      {/* PRIVACY INFO */}
      <nav data-aos="fade-left">
        <h6 className="footer-title text-white">Legal</h6>
        <ul className="space-y-2 text-gray-300">
          <li>
            <a href="#privacy" className="link link-hover">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#terms" className="link link-hover">
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="#cookies" className="link link-hover">
              Cookie Policy
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
