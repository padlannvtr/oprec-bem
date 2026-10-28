import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { DepartmentsPage } from './pages/DepartmentsPage'
import { DepartmentDetailPage } from './pages/DepartmentDetailPage'
import { PositionDetailPage } from './pages/PositionDetailPage'
import { RegistrationFlowPage } from './pages/RegistrationFlowPage'
import { NotFoundPage } from './pages/NotFoundPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang" element={<AboutPage />} />
          <Route path="/departemen" element={<DepartmentsPage />} />
          <Route path="/departemen/:slug" element={<DepartmentDetailPage />} />
          <Route path="/posisi/:slug" element={<PositionDetailPage />} />
          <Route path="/alur-pendaftaran" element={<RegistrationFlowPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
