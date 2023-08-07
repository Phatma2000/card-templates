import React from "react";

// ASSETS
import "./visitCard.css";

// CUSTOM IMPORTS

const VisitCard = ({ card, cardData, animateCard1 }) => {
  return (
    <div>
      <div className="box">
        {/* first card */}
        <div
          className={card.firstCardContent.firstCard}
          style={{
            backgroundImage: `url(${card.firstCardContent.backGroundImage})`,
          }}
        >
          <div className={card.firstCardContent.cardDesign}>
            <div className={card.firstCardContent.LogoBox}>
              <img
                className={card.firstCardContent.cardLogo}
                src={`${card.firstCardContent.LogoContent}`}
                alt=""
              />
            </div>
            <div>
              <div className={card.firstCardContent.companyName}>
                <h1
                  className={`
                    ${card.firstCardContent.companyNameStyle}
              ${animateCard1 ? "company-name-animate" : ""}
                  `}
                >
                  {cardData.companyName
                    ? cardData.companyName.slice(0, 10)
                    : card.firstCardContent.companyNameText}
                </h1>
                <p className={card.firstCardContent.companyNameSlogan}>
                  {" "}
                  {cardData.companySlogan
                    ? cardData.companySlogan
                    : card.firstCardContent.companyNameSloganText}
                </p>
              </div>
            </div>
          </div>
          <div className={card.firstCardContent.companyNameLoremTextBox}>
            <p className={card.firstCardContent.companyNameLoremText}>
              {card.firstCardContent.companyNameLoremContext}
            </p>
          </div>
        </div>

        {/* second card */}
        <div
          className={card.secondCardContent.secondCard}
          style={{
            backgroundImage: `url(${card.secondCardContent.backGroundImage})`,
          }}
        >
          <div className={card.secondCardContent.informationBox}>
            <div className={card.secondCardContent.iconGroup}>
              {card.iconList.map((i) => {
                return (
                  <div key={i.id}>
                    <div className={i.className} style={{ padding: "4px" }}>
                      {i.icon}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={card.secondCardContent.iconInformation}>
              {card.contactList.map((i) => {
                return (
                  <div key={i.id}>
                    <p style={i?.customStyle || {}}>
                      {cardData.address ? cardData.address : i.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <p className={card.secondCardContent.cardHolderName}>
              {cardData.name
                ? cardData.name
                : card.secondCardContent.cardHolderNameText}
            </p>
            <b>
              {" "}
              <span className={card.secondCardContent.cardHolderSurNameText}>
                {cardData.surname
                  ? cardData.surname
                  : card.secondCardContent.cardHolderSurNameText}
              </span>
            </b>
            <p className={card.secondCardContent.cardHolderOccupation}>
              {cardData.position
                ? cardData.position
                : card.secondCardContent.cardHolderOccupationDescription}
            </p>
          </div>
        </div>
      </div>
    
    </div>
  );
};


export default VisitCard;
