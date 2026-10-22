import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Landing from "./pages/Landing"
import NewRelease from "./pages/NewRelease"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="new_release" element={<NewRelease />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
