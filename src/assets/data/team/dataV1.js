import {
  TbBrandLinkedin,
  TbBrandTwitter,
  TbBrandFacebook,
} from "react-icons/tb";

import avatar1 from "assets/images/team/jeChilly.jpg";
import avatar2 from "assets/images/team/Munu.jpg";
import avatar3 from "assets/images/team/AsterX.jpg";
import avatar4 from "assets/images/team/Vlad.jpg";
import avatar5 from "assets/images/team/Razvan.jpg";
import avatar6 from "assets/images/team/RaDesign.jpeg";
import avatar7 from "assets/images/team/Ciprian.jpg";
import avatar8 from "assets/images/team/Chef.jpg";
const data = [
  {
    avatar: avatar1,
    name: "jeChilly",
    designation: "Founder",
    socialLinks: [
      {
        icon: <TbBrandTwitter />,
        url: "https://twitter.com/JeChilly",
      },
    ],
  },
  {
    avatar: avatar2,
    name: "Munu",
    designation: "Co-Founder",
    socialLinks: [
      {
        icon: <TbBrandTwitter />,
        url: "https://twitter.com/Munu7007",
      },
    ],
  },
  {
    avatar: avatar3,
    name: "AsterX",
    designation: "Co-Founder",
    socialLinks: [
      {
        icon: <TbBrandTwitter />,
        url: "https://twitter.com/asterx_14",
      },
    ],
  },
  {
    avatar: avatar4,
    name: "Vlad Grigore",
    designation: "Event Manager",
    socialLinks: [
      {
        icon: <TbBrandFacebook />,
        url: "https://www.instagram.com/vlad_grigore/",
      },
    ],
  },
  {
    avatar: avatar5,
    name: "Razvan",
    designation: "Frontend Developer",
    socialLinks: [
      {
        icon: <TbBrandLinkedin />,
        url: "https://www.linkedin.com/in/razvanvladpop",
      },
    ],
  },
  {
    avatar: avatar6,
    name: "RaDesign",
    designation: "Graphic Designer",
    socialLinks: [
      {
        icon: <TbBrandTwitter />,
        url: "https://twitter.com/RaDesignSoluti1",
      },
    ],
  },
  {
    avatar: avatar7,
    name: "Ciprian",
    designation: "3D Graphic Designer",
    socialLinks: [
      {
        icon: <TbBrandTwitter />,
        url: "https://twitter.com/cipriankis1",
      },
    ],
  },
  {
    avatar: avatar8,
    name: "Chef",
    designation: "Advisor",
    socialLinks: [
      {
        icon: <TbBrandTwitter />,
        url: "https://twitter.com/SolChef_nft",
      },
    ],
  },
];

export default data;
