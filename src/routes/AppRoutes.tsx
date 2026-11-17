import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ProjectDetail } from '../sections/ProjectDetail';
import Home from '../sections/Home';
import NotFound from '../sections/NotFound';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}