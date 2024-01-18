
import { TextField, Button } from "@mui/material";
import { useState } from "react";



function HomePage() {
  const [summonerName, setSummonerName] = useState<string>("");

  const onSummonerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSummonerName(e.target.value);
  }

  const onButtonClick = () => {
 
    if (!summonerName) {
      alert("Give a name");
      return;
    }
    window.location.href = `http://localhost:8080/#/summoner/${summonerName}`;
  }

  return (
    <>
      <h1>Home Page</h1>
      <search>
        <TextField 
          id="summoner-input" 
          label="Summoner Name" 
          type="search"
          value={summonerName}
          onChange={onSummonerInputChange}
        />
        <TextField
          id="tagline-input"
          label="Tag Line"
          type="search"
        />
        <Button
          variant="contained"
          onClick={onButtonClick}
        >
          Find Summoner
        </Button>
      </search>
    </>
  );
}

export default HomePage;