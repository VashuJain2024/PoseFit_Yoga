import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { YogaProvider } from "./YogaContext";
import Home from "./pages/Home";
import Yoga from "./pages/Yoga/Yoga";
import PoseLibrary from "./pages/PoseLibrary";
import Layout from "./components/Layout";
import YogaCanvas from "./pages/Yoga/YogaCanvas";
// import Profile from "./pages/Profile";

import "./App.css";
import YogaWrapper from "./pages/Yoga/YogaWrapper";

export default function App() {
  return (
    <YogaProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/poses" element={<PoseLibrary />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route path="/practice" element={<YogaWrapper />}>
              <Route index element={<Yoga />} />
              <Route path="yoga" element={<YogaCanvas />} />
            </Route>
          </Routes>
        </Layout>
      </Router>
    </YogaProvider>
  );
}