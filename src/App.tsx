import { useLayoutEffect } from "react"
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom"

import Landing from "./pages/Landing"
import NewRelease from "./pages/NewRelease"

function ScrollManager() {
  const location = useLocation()

  useLayoutEffect(() => {
    // Let the landing page handle its own anchor navigation.
    if (location.hash) return

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    })
  }, [location.pathname, location.key, location.hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/new_release" element={<NewRelease />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}