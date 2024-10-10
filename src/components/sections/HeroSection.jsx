import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";

function HeroSection() {
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row items-center justify-center min-h-full md:px-10 lg:px-24 mb-10 "
    >
      <div className="w-2/4 md:px-5 lg:px-16 py-8 font-pixelari">
        <h1 className="text-6xl text-center md:text-start dark:text-txtclr-default text-txtlight-clr mb-4 ">
          Hello, I'm Chris!
        </h1>
        <p className="text-xl text-center md:text-start text-txtclr-special">
          I create and design stuff for the web.
        </p>
        <div className="flex justify-center md:justify-start space-x-4 py-5">
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
          <Popover placement="right" showArrow={true}>
            <PopoverTrigger>
              <FontAwesomeIcon
                icon={faEnvelope}
                className="size-7  hover:text-txtclr-hover transition cursor-pointer"
              />
            </PopoverTrigger>
            <PopoverContent className="bg-bg-light dark:bg-bg-primary">
              <div className="px-1 py-2 ">
                <div className="text-md font-semibold">
                  kokkalischrisbs@gmail.com
                </div>
              </div>
            </PopoverContent>
          </Popover>
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
