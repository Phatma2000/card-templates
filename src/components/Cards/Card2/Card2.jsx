import React from "react";
//assets
import FirstCard from "../Card2/FirstCard.png";
import SecondCard from "../Card2/SecondCard.png";
import Logo from "../Card2/Logo.svg";
//css
import "./Card2.css";

const Card2 = ({ card, cardData }) => {
  return (
    <>
      {/* first card */}
      <div
        className="background"
        style={{
          backgroundImage: `url(${FirstCard})`,
          backgroundSize: "cover",
          width: "400px",
          height: "230px",
        }}
      >
        <div className="design-div">
          <img className="logo-img" src={Logo} alt="fd" />
          <h3 className={card.firstCardContent.companyName}>
            {cardData.companyName
              ? cardData.companyName
              : card.firstCardContent.companyNameText}
          </h3>
          <p className={card.firstCardContent.companyNameSlogan}>
            {cardData.companySlogan
              ? cardData.companySlogan
              : card.firstCardContent.companyNameSloganText}
          </p>
          <p className={card.firstCardContent.companyNameLoremText}>
            {cardData.description
              ? cardData.description
              : card.firstCardContent.companyNameLoremTextContent }
          </p>
        </div>
        <p className="down-part-lorem"></p>
      </div>

      {/* second card */}
      <div
        className="background-second"
        style={{
          backgroundImage: `url(${SecondCard})`,
          backgroundSize: "cover",
          width: "400px",
          height: "230px",
          margin: "auto",
        }}
      >
        <div className="company-info">
          <div className={card.secondCardContent.flexClassName}>
            <h2 className={card.secondCardContent.cardHolderName}>
              {cardData.name
                ? cardData.name
                : card.secondCardContent.cardHolderNameText}
            </h2>
            <span className={card.secondCardContent.cardHolderSurname}>
              {cardData.surname
                ? cardData.surname
                : card.secondCardContent.cardHolderSurnameText}
            </span>
          </div>
          <p className={card.secondCardContent.cardHolderOccupation}>
            {cardData.position
              ? cardData.position
              : card.secondCardContent.cardHolderOccupationText}
          </p>
        </div>
        <div className="address-div">
          <div className="diviconlist">
            {card.iconList.map((v) => {
              return (
                <>
                  <div key={v.id} />
                  <div className={`${v.className}`}>{v.icon}</div>
                </>
              );
            })}
          </div>

          <div className="fonticon">
            {card.addressText.map((v) => {
              return (
                <>
                  <div key={v.id} />
                  <p className={v.className}>{v.text}</p>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card2;
