import React, { useEffect, useState } from "react";
import './App.css';
import { Grid, Container } from "@material-ui/core"
import Navbar from './componants/Navbar';
import MyCard from './componants/MyCard';
import { getMatches } from "./api/Api";
import News from './componants/Scheduled';
import Scheduled from './News/News'
function App() {

  const [matches, setmatches] = useState([]);

  useEffect(() => {
    getMatches()
      .then((data) => setmatches(data.matches))
      .catch();
  }, []);


  return (
    <div>
      <Navbar />

      <img className="gif" src="gif11.gif" alt="gif" />
      <img className="gif1" src="gif12.gif" alt="gif" />
      <img className="Brave" src="kai1.gif" alt="gif" />


      <News/>
      <Scheduled/>

      <Container className="Cont">
        <Grid container>
          <Grid item xs={12}>
            {matches.map((match) => (
              <MyCard match={match}></MyCard>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
