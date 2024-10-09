import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function HeroSection() {
  return (
    <div
      id="#home"
      className="flex items-center justify-center min-h-full md:px-10 lg:px-24 mb-10 "
    >
      <div className="w-2/4 md:px-5 lg:px-16 py-8 font-pixelari">
        <h1 className="text-6xl dark:text-txtclr-default text-txtlight-clr mb-4 ">
          Hello, I'm Chris!
        </h1>
        <p className="text-xl text-txtclr-special">
          I create and design stuff for the web.
        </p>
        <div className="flex space-x-4 py-5">
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

      <div className="w-1/2 px-8 py-8 flex justify-center">
        <img
          src="https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif" // Replace with your desired GIF URL
          alt="Developer GIF"
          className="w-96 h-96 object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

export default HeroSection;