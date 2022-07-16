import './App.css';
import "./assets/colors.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Screens/LandingPage/LandingPage';
import SubmissionForm from './Screens/SubmissionForm/SubmissionForm';
import LookupPage from './Screens/LookupPage/Lookup';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBXPMyTFjRwErsODTrslWclM348QZeJqWc",
    authDomain: "mes-db-5ccb6.firebaseapp.com",
    projectId: "mes-db-5ccb6",
    storageBucket: "mes-db-5ccb6.appspot.com",
    messagingSenderId: "539096127211",
    appId: "1:539096127211:web:47582a39717e17efa310ae"
};

const app = initializeApp(firebaseConfig);
getFirestore(app);

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="SubmissionForm" element={<SubmissionForm />} />
        <Route path="LookupPage" element={<LookupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;