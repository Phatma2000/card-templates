import React, { useContext, useState } from "react";

// ASSETS
import "./Card1.css";
import Store from "../../context/store";

// CUSTOM IMPORTS

const VisitCard = ({ card, animateCard1 }) => {
  const { cardData } = useContext(Store);
  const { selectedFile, setSelectedFile } = useContext(Store);

  const handleImageChange = (e) => {
    
    const file = e.target.value[0];
    console.log("file", file);
    // setSelectedFile(file);
  };

  return (
    <div className="cards">
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
              // onLoad={handleImageChange}
              onLoad={e => console.log(e.target.value)}
              value={selectedFile}
              accept="image/*"
              className={card.firstCardContent.cardLogo}
              src={`${card.firstCardContent.LogoContent}`}
              alt=""
            />
          </div>
          <div>
            <div className={card.firstCardContent.companyName}>
              <h1>
                {cardData.companyName
                  ? cardData.companyName.slice(0, 15)
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
            {cardData.description
              ? cardData.description
              : card.firstCardContent.companyNameLoremContext}
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
            {
              <>
                <div key={card.contactList[0].id}>
                  <p style={card.contactList[0].customStyle || {}}>
                    {cardData.address
                      ? cardData.address
                      : card.contactList[0].text}
                  </p>
                </div>
                <div key={card.contactList[1].id}>
                  <p style={card.contactList[1].customStyle || {}}>
                    {cardData?.phone
                      ? cardData.phone
                      : card?.contactList[1].text}
                  </p>
                </div>{" "}
                <div key={card.contactList[0].id}>
                  <p style={card.contactList[0].customStyle || {}}>
                    {cardData?.email
                      ? cardData.email
                      : card.contactList[2].text}
                  </p>
                </div>{" "}
                <div key={card.contactList[0].id}>
                  <p style={card.contactList[0].customStyle || {}}>
                    {cardData?.website
                      ? cardData.website
                      : card.contactList[3].text}
                  </p>
                </div>{" "}
              </>
            }
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
  );
};

export default VisitCard;
