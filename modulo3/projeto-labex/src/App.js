import HomePage from "./Pages/HomePage/HomePage";
import ListTripsPages from "./Pages/ListTripsPage/ListTripsPage";
import AdminHomePage from "./Pages/AdminHomePage/AdminHomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ErrorPages from "./Pages/Error/Error";
import ApplicationFormPage from "./Pages/ApplicationFormPage/ApplicationFormPage";
import TripDetailsPage from "./Pages/TripDetailsPage/TripDetailsPage";
import CreateTripPage from "./Pages/CreateTripPage/CreateTripPage";

import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<HomePage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/trips/list" element={<ListTripsPages />}/>
          <Route path="/trips/application" element={<ApplicationFormPage/>}/>
          <Route path="/admin/trips/list" element={<AdminHomePage/>}/>
          <Route path="/admin/trips/create" element={<CreateTripPage/>}/>
          <Route path="/admin/trips/:id" element={<TripDetailsPage/>}/>
          <Route path="*" element={<ErrorPages />}/>


        </Routes>
    </BrowserRouter>
  );
}

export default App;



