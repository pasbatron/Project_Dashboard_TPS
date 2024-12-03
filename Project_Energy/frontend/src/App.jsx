import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import PageControlEnergy_CommonRail12 from "./pages/PageEnergyLine/PageControlEnergy_CommonRail12";
import PageControlEnergy_OticsPlant1 from "./pages/PageEnergyLine/PageControlEnergy_OticsPlant1";
import PageCheckDataEnergy_OticsPlant1 from "./pages/PageEnergyLine/PageCheckDataEnergy_OticsPlant1";


function App() {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Routes>


        <Route path="/" element={<PageControlEnergy_OticsPlant1 />} />
        <Route path="/cr_12" element={<PageControlEnergy_CommonRail12 />} />
        <Route path="/all" element={<PageCheckDataEnergy_OticsPlant1 />} />





        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
