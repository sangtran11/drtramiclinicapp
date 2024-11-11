import { Route, Routes, Navigate } from "react-router-dom";
import {
  HomePage,
  AboutPage,
  ServicesPage,
  KnowledgePage,
  StorePage,
  BookingFormPage,
  SearchResultPage,
  KnowledgeDetailPage,
  ServiceDetailPage,
  // CoursesPage,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="" element={<HomePage />} />
        <Route path="ve-chung-toi" element={<AboutPage />} />
        <Route path="dich-vu" element={<ServicesPage />} />
        <Route path="dich-vu/:id" element={<ServiceDetailPage />} />
        <Route path="kien-thuc" element={<KnowledgePage />} />
        <Route path="kien-thuc/:id" element={<KnowledgeDetailPage />} />
        <Route path="cua-hang" element={<StorePage />} />
        <Route path="dat-lich-hen" element={<BookingFormPage />} />
        {/* <Route path="khoa-hoc" element={<CoursesPage />} /> */}
        <Route path="ket-qua-tim-kiem" element={<SearchResultPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
