import React, { useContext, useState, useRef } from "react";

//Assets
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./visaPage.css";
import { Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import Store from "../../components/context/store";
import VisitCard from "../../components/visitCard/VisitCard";
import Card2 from "../../components/Cards/Card2/Card2";
import Card3 from "../../components/Cards/Card3/Card3"

function VisaPage() {
  
  const { selectedCard, setSelectedCard, cards } = useContext(Store);
  const [cardData, setCardData] = useState([]);
  const [selectData, setSelectData] = useState([]);
  // Array(100).fill(null).map
  const [cardList, setCardList] = useState([
    {
      projectName: "Card1",
      progectBgColor: "red",
    },
    {
      projectName: "Card2",
      progectBgColor: "blue",
    },
    {
      projectName: "Card3",
      progectBgColor: "yellow",
    },
    // {
    //   projectName: "Card4",
    //   progectBgColor: "gray",
    // },
  ]);
  const [message, setMessage] = useState("");
  const firstRef = useRef(null);
  const templateBox = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(e.target.fullName.value);
    const cardInformation = {
      fullName: e.target.fullName.value,
      position: e.target.position.value,
      companyName: e.target.companyName.value,
      address: e.target.address.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      website: e.target.website.value,
    };
    //  setCardData([...cardData,cardInformation]) keohne datalari sxlamaq shertile
    // yeni dtalari yazdirmaq istedikde spread metodu ist ele
    setCardData(cardInformation); //2ci metod
  };

  console.log(cardData);

  const handleChange = (e) => {
    //  templateBox.current.style.backgroundColor=e.target.value.progectBgColor
    let id = e.target.value
    setSelectedCard(id)
    console.log(e.target.value);
  };

  return (
    <Grid container className="visaPageBox">
      <Grid item xs={11} md={6} className="left-box">
        <h3 className="left-header">Choose business card</h3>
        <Box
          onSubmit={handleSubmit}
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            variant="standard"
            placeholder="FullName"
            name="fullName"
            ref={firstRef}
          />
          <TextField
            placeholder="Position "
            variant="standard"
            name="position"
            ref={firstRef}
          />
          <TextField
            placeholder="Company name"
            variant="standard"
            name="companyName"
            ref={firstRef}
          />
          <TextField
            placeholder="Address"
            variant="standard"
            name="address"
            ref={firstRef}
          />
          <TextField
            placeholder="Phone"
            autoComplete="current-phone"
            variant="standard"
            name="phone"
            ref={firstRef}
          />
          <TextField
            placeholder="Email"
            type="email"
            autoComplete="current-email"
            variant="standard"
            name="email"
            ref={firstRef}
          />
          <TextField
            placeholder="Appload your logo"
            autoComplete="Website"
            variant="standard"
            name="website"
            ref={firstRef}
          />
          <Button
            sx={{ display: "block", mt: 2, m: "auto" }}
            id="choose-button"
            type="submit"
            variant="outlined"
          >
            Submit
          </Button>
        </Box>
      </Grid>
      <Grid item xs={11} md={6} className="right-box">
        <div className="right-header">
          <h3>Melumatlarinizi daxil edin.</h3>
        </div>
        <div>
          {/* <FormControl
           
            onSubmit={handleSelectSubmit}
          > */}
          <InputLabel id="demo-controlled-open-select-label">
            {" "}
            Choose
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            label="Choose select"
            onChange={handleChange}
            sx={{ m: 1, minWidth: 200 }}
          >
            <MenuItem value={0}>
              <em>None</em>
            </MenuItem>
            {/* <MenuItem >Card1</MenuItem>
              <MenuItem >Card2</MenuItem>
              <MenuItem >Card3</MenuItem> */}
            {cardList.map((item, index) => {
              return (
                <MenuItem key={item + index} value={index}>
                  {item.projectName}{" "}
                </MenuItem>
              );
            })}
          </Select>
          {/* </FormControl> */}
        </div>
        {/* <Grid item xs={11} md={11} className="template-button-box">
          <Button
            variant="outlined"
            sx={{ display: "block", m: 2, marginLeft: 11 }}
            id="choose-button"
          >
            Choose template
          </Button>
        </Grid> */}
        {/* <Grid className="templateBox"
        ref={ templateBox}
        >
          <div>template qutusu</div>
        </Grid> */}
        <Grid>
          {selectedCard == 0 && <VisitCard card={cards[0]} />}
          {selectedCard == 1 && <Card2 card={cards[1]} />}
          {selectedCard == 2 && <Card3 card3={cards[2]} />}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default VisaPage;
