import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import SelectClass from './pages/onboarding/SelectClass'
import Interests from './pages/onboarding/Interests'
import MeetBuddy from './pages/onboarding/MeetBuddy'
import DashboardLayout from './layouts/DashboardLayout'
import StudyBuddy from './pages/StudyBuddy'
import Library from './pages/Library'
import PdfReader from './pages/PdfReader'
import Careers from './pages/Careers'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/onboarding/class" element={<SelectClass />} />
      <Route path="/onboarding/interests" element={<Interests />} />
      <Route path="/onboarding/buddy" element={<MeetBuddy />} />

      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<StudyBuddy />} />
        <Route path="/library" element={<Library />} />
        <Route path="/careers" element={<Careers />} />
      </Route>

      <Route path="/library/reader" element={<PdfReader />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
