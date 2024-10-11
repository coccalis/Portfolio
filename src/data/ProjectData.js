import { ReactIcon, TailwindIcon } from "../assets/icons/CodingIcons.jsx";

import apointly from "../assets/images/apointly-prev.png";
import intelli from "../assets/images/intelli.png";
import grade from "../assets/images/grade.png";
import music from "../assets/images/musicplayer.png";

import nextui from "../assets/images/nextui-logo.png";
import jetpack from "../assets/images/jetpack-compose.png";
import kotlin from "../assets/images/Kotlin_Icon.png";

export const ProjectData = [
  {
    img: apointly,
    title: "Apointly",
    des: "This web application was created for a university group assignment. It's a booking appointment website that allows users to easily schedule appointments at stores like barber shops, nail salons etc. It also features an admin dashboard for store owners to manage appointments and monitor their store's performance.",
    roles: "Front-end development and UX/UI design",
    gh: "https://github.com/MinistryOrg/Appointly-frontend",
    tech: [
      { logo: ReactIcon, label: "React.js" },
      { logo: TailwindIcon, label: "Tailwindcss" },
      { logo: nextui, label: "NextUI" },
    ],
  },
  {
    img: grade,
    title: "Grade Calculator",
    des: "This project provides two key functionalities: \n-Minimum Grade Calculation: It calculates the minimum grade a user needs to achieve either in the theory or lab component in order to pass the course. \n-Grade Breakdown: The user can input their total grade, and the project will calculate how much they scored in either the theory or lab component.",
    roles: "Front-end development and UX/UI design",
    gh: "https://github.com/coccalis/grade_calculator",
    tech: [
      { logo: ReactIcon, label: "React.js" },
      { logo: TailwindIcon, label: "Tailwindcss" },
      { logo: nextui, label: "NextUI" },
    ],
  },
  {
    img: intelli,
    title: "Intelli",
    des: "This Android app was developed for a university group assignment. It's main purpose is to serve as a virtual assistant, helping users with everyday tasks such as checking the weather, scheduling appointments, online shopping, smart home management, and more.",
    roles: "Front-end development and UX/UI design",
    gh: "https://github.com/MinistryOrg/Intelli",
    tech: [
      { logo: kotlin, label: "Kotlin" },
      { logo: jetpack, label: "Jetpack Compose" },
    ],
  },
  {
    img: music,
    title: "SensationsMusicPlayer",
    des: "This Android app was developed for a university group assignment. It’s a simple music player with file selection, playback controls, and background functionality .",
    roles: "Front-end development and UX/UI design",
    gh: "https://github.com/MinistryOrg/SensationsMusicPlayer",
    tech: [
      { logo: kotlin, label: "Kotlin" },
      { logo: jetpack, label: "Jetpack Compose" },
    ],
  },
];
