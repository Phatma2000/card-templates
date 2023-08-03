import React, { useContext, useState, useRef } from "react";

//Assets
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./visaPage.css";
import { Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Store from "../../components/context/store";
import VisitCard from "../../components/visitCard/VisitCard";
import Card2 from "../../components/Cards/Card2/Card2";
import Card3 from "../../components/Cards/Card3/Card3";
// import bgFoto from "../../components/photos/desktop-wallpaper.jpg";

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
    let id = e.target.value;
    setSelectedCard(id);
    console.log(e.target.value);
  };

  return (
    <Grid container className="visaPageBox">
      <Grid item xs={11} md={6} className="left-box">
        <h2
          className="left-header"
          style={{ color: "#208E2B", marginBottom: "20px" }}
        >
          Choose business car
        </h2>
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
            size="small"
            variant="outlined"
            placeholder="FullName"
            name="fullName"
            ref={firstRef}
          />
          <TextField
            size="small"
            placeholder="Position "
            variant="outlined"
            name="position"
            ref={firstRef}
          />
          <TextField
            size="small"
            placeholder="Company name"
            variant="outlined"
            name="companyName"
            ref={firstRef}
          />
          <TextField
            size="small"
            placeholder="Address"
            variant="outlined"
            name="address"
            ref={firstRef}
          />
          <TextField
            size="small"
            placeholder="Phone"
            autoComplete="current-phone"
            variant="outlined"
            name="phone"
            ref={firstRef}
          />
          <TextField
            size="small"
            placeholder="Email"
            type="email"
            autoComplete="current-email"
            variant="outlined"
            name="email"
            ref={firstRef}
          />
          <TextField
            size="small"
            placeholder="Appload your logo"
            autoComplete="Website"
            variant="outlined"
            name="website"
            ref={firstRef}
            sx={{ marginBottom: "50px" }}
          />
          {/* <Button
            sx={{ display: "block", mt: 2, m: "auto" }}
            id="choose-button"
            type="submit"
            variant="outlined"
          >
            Submit
          </Button> */}
          <Button
            style={{ marginTop: "20px" }}
            size="large"
            id="choose-button"
            type="submit"
            variant="contained"
            sx={{
              width: "250px",
              height: "45px",
              bgcolor: "#208E2B",
              display: "block",
              borderRadius: "20px",
              mt: 5,
              m: "auto",
              transition: ".3s linear",
              "&:hover": {
                bgcolor: "brown",
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Grid>
      <Grid item xs={11} md={6} className="right-box">
        <div className="right-header">
          <h2 style={{ color: "#208E2B", marginBottom: "20px" }}>Choose business card </h2>
           
         
        </div>
        <div>
          {/* <FormControl
           
            onSubmit={handleSelectSubmit}
          > */}
          <InputLabel
            id="demo-controlled-open-select-label"
            style={{ color: "#208E2B", marginBottom: "20px" }}
          >
            Seç.
            <p>(Choose)</p>
          </InputLabel>
          <Select
            size="small"
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            label="Choose select"
            onChange={handleChange}
            sx={{ m: 1, minWidth: 400 }}
          >
            <MenuItem selected value={null}>
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
        </div>

        <Grid>
          {selectedCard == null && (
            <>
            <Box 
              sx={{
                width: 400,
                height: 230,
                // backgroundImage:`url('${bgFoto}')`,
                margin: "auto",
                marginTop: "20px",
                borderRadius: "20px",
                backgroundColor: "#ECECEC",
                "&:hover": {
                  backgroundColor: "#D5D5D5",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}  
           />
           <Box 
              sx={{
                width: 400,
                height: 230,
                // backgroundImage:`url('${bgFoto}')`,
                margin: "auto",
                marginTop: "20px",
                borderRadius: "20px",
                backgroundColor:  "#ECECEC",
                "&:hover": {
                  backgroundColor: "#D5D5D5",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}  
           />
           
            
            </>
            
          )}
          {selectedCard == 0 && <VisitCard card={cards[0]} width="300px" />}
          {selectedCard == 1 && <Card2 card={cards[1]} />}
          {selectedCard == 2 && <Card3 card3={cards[2]} />}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default VisaPage;
