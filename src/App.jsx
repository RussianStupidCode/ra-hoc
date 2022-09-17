import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTER_PATH } from "./helpers/path";
import MainLayout from "./layouts/main";
import DateApp from "./components/UI/date-format/DateApp";
import HighLightApp from "./components/UI/highlight/highlightApp";

function App() {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route
          path={ROUTER_PATH.base}
          element={<Navigate replace to={ROUTER_PATH.date} />}
        />
        <Route path={ROUTER_PATH.date} element={<DateApp />} />
        <Route path={ROUTER_PATH.highlight} element={<HighLightApp />} />
      </Route>
    </Routes>
  );
}

export default App;
