import React from "react";
//css
import "./Card3.css";
//assets
import CardFirst from "../Card3/CardFirst.png";
import CardSecond from "../Card3/CardSecond.png";
import CardLogo from "../Card3/CardLogo.svg";
const Card3 = ({ card3, cardData }) => {
  return (
    <>
      <div className="cards">
        <div
          className="firstt-card"
          style={{
            background: `url(${CardFirst})`,
            width: "400px",
            height: "230px",
            backgroundSize: "cover",
            margin: "auto",
            marginTop: "20px",
          }}
        >
          <div className="text-general">
            <img src={CardLogo} alt="" className="card-logo" />
            <h1 className={card3.firstCardContent.companyName}>
              {cardData.companyName
                ? cardData.companyName
                : card3.firstCardContent.companyNameText}
            </h1>
            <h5 className={card3.firstCardContent.companyNameSlogan}>
              {cardData.companySlogan
                ? cardData.companySlogan
                : card3.firstCardContent.companyNameSloganText}
            </h5>
            <p className={card3.firstCardContent.companyNameLorem}>
              {cardData.description
                ? cardData.description
                : card3.firstCardContent.companyNameLoremText}
            </p>
          </div>
        </div>
        <div
          className="second-card"
          style={{
            background: `url(${CardSecond})`,
            width: "400px",
            height: "230px",
            backgroundSize: "cover",
            margin: "auto",
            marginTop: "20px",
          }}
        >
          <div className="name-div">
            <div className={card3.secondCardContent.divClassName}>
              <h2 className={card3.secondCardContent.cardHolderName}>
                {cardData.name
                  ? cardData.name
                  : card3.secondCardContent.cardHolderNameText}
              </h2>
              <h2 className={card3.secondCardContent.cardHolderSurname}>
                {cardData.surname
                  ? cardData.surname
                  : card3.secondCardContent.cardHolderSurnameText}
              </h2>
            </div>
            <p className={card3.secondCardContent.cardHolderOccupation}>
              {cardData.position
                ? cardData.position
                : card3.secondCardContent.cardHolderOccupationText}
            </p>
          </div>

          <div className="address-list">
            <div className="address-icon">
              {card3.addressIcon.map((i) => {
                return (
                  <>
                    <div key={i.id} />
                    <div className={`${i.className}`}>{i.icon}</div>
                  </>
                );
              })}
            </div>

            <div className="address-text">
              {card3.addressText.map((i) => {
                return (
                  <>
                    <div key={i.id} />
                    <div className={`${i.className}`}>{i.text}</div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card3;
