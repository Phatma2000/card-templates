import "./App.css";

import {
  FaArrowPointer,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import Card2 from "./components/Cards/Card2/Card2";
import Card3 from "./components/Cards/Card3/Card3";
function App() {
  const cards2 = [
    {
      firstCardContent: {
        companyName: "company-name",
        companyNameText: "Design",
        companyNameSlogan: "slogan1",
        companyNameSloganText: "Tagline space",
        companyNameLoremText: "down-part-lorem",
        companyNameLoremTextContent: "Lorem Ipsum Dolor",
      },

      secondCardContent: {
        DivclassName: "company-info",
        cardHolderName: "card-holder-name",
        cardHolderNameText: "MARK",
        cardHolderSurname: "card-holder-surname",
        cardHolderSurnameText: "Smith",
        cardHolderOccupation: "cofounder-p",
        cardHolderOccupationText: "Co-Founder Brand Name",
        flexClassName: "flex",
      },

      addressText: [
        {
          id: 1,
          className: "down-part-lorem1",
          text: "123 Dummy, Lorem Ipsum",
        },
        {
          id: 2,
          className: "down-part-number",
          text: "+00 1234 5XXX 9012",
        },
        {
          id: 3,
          className: "down-part-email",
          text: "info@email space",
        },
        {
          id: 4,
          className: "down-part-website",
          text: "www.websiteaddress",
        },
      ],
      iconList: [
        {
          id: 1,
          className: "fa-location-dot",
          icon: <FaLocationDot />,
        },
        {
          id: 2,
          className: "fa-phone",
          icon: <FaPhone />,
        },
        {
          id: 3,
          className: "fa-envelope",
          icon: <FaEnvelope />,
        },
        {
          id: 4,
          className: "fa-arrow-pointer",
          icon: <FaArrowPointer />,
        },
      ],
    },
  ];

  const cards3 = [
    {
      firstCardContent: {
        companyName: "company-name",
        companyNameText: "Design",
        companyNameSlogan: "slogan",
        companyNameSloganText: "Tagline space",
        companyNameLorem: "lorem-text",
        companyNameLoremText: "Lorem Ipsum Dolor",
      },

      secondCardContent: {
        divClassName: "name-class",
        cardHolderName: "card-holder-namee",
        cardHolderNameText: "MARK",
        cardHolderSurname: "card-holder-surnamee",
        cardHolderSurnameText: "Smith",
        cardHolderOccupation: "project-manager",
        cardHolderOccupationText: "Project Manager",
        flexClassName: "flex",
      },

      addressIcon: [
        {
          id: 1,
          className: "location-dot",
          icon: <FaLocationDot />,
        },
        {
          id: 2,
          className: "phone",
          icon: <FaPhone />,
        },
        {
          id: 3,
          className: "envelope",
          icon: <FaEnvelope />,
        },
        {
          id: 4,
          className: "arrow-pointer",
          icon: <FaArrowPointer />,
        },
      ],

      addressText: [
        {
          id: 1,
          className: "location-text",
          text: "123 Dummy, Lorem Ipsum",
        },

        {
          id: 2,
          className: "phone-text",
          text: "+00 1234 5XXX 9012",
        },

        {
          id: 3,
          className: "envelope-text",
          text: "info@email space",
        },
        {
          id: 4,
          className: "arrow-text",
          text: "www.websiteaddress",
        },
      ],
    },
  ];
  return (
    <>
      {cards2.map((item, i) => (
        <Card2 key={i} card={item} />
      ))}

      {cards3.map((item, i) => (
        <Card3 key={i} card3={item} />
      ))}
    </>
  );
}

export default App;
