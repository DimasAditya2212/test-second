import { Route, Routes } from 'react-router-dom';

import AllMeetUpsPage from './pages/AllMeetUps';
import FavoritesPage from './pages/Favorites';
import NewMeetUpPage from './pages/NewMeetUp';
import Layout from './components/layout/Layout'

function App() {
  return (
  <Layout> 
    <Routes>
    <Route path='/' element={<AllMeetUpsPage />} />
    <Route path='/new-meetup' element={<NewMeetUpPage />} />
    <Route path='/favorites' element={<FavoritesPage />} />
    </Routes>
  </Layout>
  );
}

export default App;
