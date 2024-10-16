import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Switch,
} from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SunIcon } from "../assets/icons/SunIcon";
import { MoonIcon } from "../assets/icons/MoonIcon";
import ScrollToHashElement from "./ScrollToHashElement";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const [selectedLang, setSelectedLang] = useState(new Set(["EN"]));

  const { handleDarkMode, isSelected } = useContext(ThemeContext);

  return (
    <nav className="p-4 bg-bg-light  dark:bg-bg-primary font-pixelari">
      <ScrollToHashElement />
      <div className="container mx-auto flex xsm:justify-center lg:justify-end items-center">
        <div className="flex flex-wrap justify-center items-center space-x-8 space-y-5 sm:space-y-0 ">
          <ul className="flex space-x-12  dark:text-txtclr-default text-txtlight-clr font-semibold  ">
            <li>
              <Link to="#home" className="hover:text-txtclr-hover">
                Home
              </Link>
            </li>
            <li>
              <Link to="#about" className="hover:text-txtclr-hover">
                About
              </Link>
            </li>
            <li>
              <Link to="#projects" className="hover:text-txtclr-hover">
                Projects
              </Link>
            </li>
            <li>
              <Link to="#contact" className="hover:text-txtclr-hover">
                Contact
              </Link>
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

          {/* <Dropdown
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
          </Dropdown> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
