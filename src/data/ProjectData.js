import { ReactIcon, TailwindIcon } from "../assets/icons/CodingIcons.jsx";

import apointly from "../assets/images/apointly-prev.png";
import nextui from "../assets/images/nextui-logo.png";

export const ProjectData = [
  {
    img: apointly,
    title: "Apointly",
    des: "This web application was created for a university assignment. It's a booking appointment website that allows users to easily schedule appointments at stores like barber shops, nail salons etc. It also features an admin dashboard for store owners to manage appointments and monitor their store's performance.",
    gh: "https://github.com/MinistryOrg/Appointly-frontend",
    tech: [
      { logo: ReactIcon, label: "React.js" },
      { logo: TailwindIcon, label: "Tailwindcss" },
      { logo: nextui, label: "NextUI" },
    ],
  },
];
