import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Switch,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { SunIcon } from "../assets/icons/SunIcon";
import { MoonIcon } from "../assets/icons/MoonIcon";

function Navbar() {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedLang, setSelectedLang] = useState(new Set(["EN"]));

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsSelected(true); // Set the dark mode to true
    }
  }, []);

  const handleDarkMode = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsSelected(false); // Set the dark mode to false
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsSelected(true); // Set the dark mode to true
    }
  };

  return (
    <nav className="p-4 bg-bg-light  dark:bg-bg-primary font-pixelari">
      <div className="container mx-auto flex xsm:justify-center lg:justify-end items-center">
        <div className="flex flex-wrap justify-center items-center space-x-8">
          <ul className="flex space-x-12  dark:text-txtclr-default text-txtlight-clr font-semibold  ">
            <li>
              <a href="/#home" className="hover:text-txtclr-hover">
                Home
              </a>
            </li>
            <li>
              <a href="/#about" className="hover:text-txtclr-hover">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-txtclr-hover">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-txtclr-hover">
                Contact
              </a>
            </li>
          </ul>

          <Switch
            isSelected={isSelected}
            onChange={handleDarkMode}
            color="primary"
            thumbIcon={({ isSelected, className }) =>
              !isSelected ? (
                <SunIcon className={className} />
              ) : (
                <MoonIcon className={className} />
              )
            }
          ></Switch>

          <Dropdown
            showArrow
            radius="sm"
            classNames={{ content: "min-w-full p-0" }}
          >
            <DropdownTrigger>
              <Button
                className="bg-transparent font-bold font-jersey"
                size="sm"
              >
                {selectedLang}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedLang}
              onSelectionChange={setSelectedLang}
              className="font-pixelari"
            >
              <DropdownItem key="EN">EN</DropdownItem>
              <DropdownItem key="EL">EL</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
