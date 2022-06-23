import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

//Components
import LandingPageComponent from "./Components/LandingPage/LandingPageComponent.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageComponent />}>
          {/* <Route index element={<Home />} />
          <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
