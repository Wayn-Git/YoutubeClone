import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home, SearchResults, VideoDetail, ChannelDetail } from './components/pages';
import { NavBar, SideBar, VideoCard, Videos } from './components';

const App = () => (
  <BrowserRouter>
  <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video/:id" element={<VideoDetail />} />
      <Route path="/channel/:id" element={<ChannelDetail />} />
      <Route path="/search/:query" element={<SearchResults />} />
    </Routes>
  </BrowserRouter>
);

export default App;
