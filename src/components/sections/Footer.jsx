import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="text-gray-500 bg-bg-light dark:bg-bg-primary px-4 py-5 max-w-screen mx-auto md:px-8 font-pixelari">
      <div className="mt-8 flex flex-col space-y-5  items-center justify-center">
        <div className="mt-4 sm:mt-0 text-center">
          <p>
            Chris Kokkalis <br /> kokkalischrisbs@gmail.com
          </p>
        </div>
        <div className="flex flex-row space-x-5">
          <a
            href="https://github.com/coccalis"
            target="_blank"
            className="hover:text-txtclr-hover transition"
          >
            <FontAwesomeIcon icon={faGithub} className="size-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/chris-kokkalis-028773216/"
            target="_blank"
            className="hover:text-txtclr-hover transition"
          >
            <FontAwesomeIcon icon={faLinkedin} className="size-7  " />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
