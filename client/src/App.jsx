import { useEffect, useState } from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import MainHomePage from './components/mainHomePage/MainHomePage';
import Layouts from './components/layouts/Layouts';
import RecentActivitiesDetails from './components/recentActivities/RecentActivitiesDetails';
import NotFound from './components/notFound/NotFound';
import RecentActivitiesPage from './components/recentActivities/RecentActivitiesPage';
import NoticeBoardDetails from './components/noticeBoard/NoticeBoardDetails';
import NoticeBoardTenders from './components/noticeBoard/NoticeBoardTenders';
import PhotoGallery from './components/gallery/PhotoGallery';
import VideoGallery from './components/gallery/VideoGallery';
import DigDetails from './components/administration/DigDetails';
import FormerChiefOfSP from './components/administration/FormerChiefOfSP';
import GeographicalFamiliarity from './components/districtPolice/GeographicalFamiliarity';
import DistrictPoliceAtGlance from './components/districtPolice/DistrictPoliceAtGlance';
import SpMessage from './components/administration/SpMessage';
import Officers from './components/administration/Officers';
import Employees from './components/administration/Employees';
import Thana from './components/units/Thana';
import CircleOffice from './components/units/CircleOffice';
import ActivitiesSubmenuDetails from './components/activities/ActivitiesSubmenuDetails';
import ServicesSubmenuDetails from './components/services/ServicesSubmenuDetails';
import CrimeManageSubmenuDetails from './components/crimeManagement/CrimeManageSubmenuDetails';
import Notice from './components/noticeBoard/Notice';
import RecruitmentNotification from './components/noticeBoard/RecruitmentNotification';
import Noc from './components/noticeBoard/Noc';
import MapKishorganj from './components/communicationAndAddress/MapKishorganj';
import InformationOnBitOfficers from './components/bitPolice/InformationOnBitOfficers';
import PhoneDirectory from './components/bitPolice/PhoneDirectory';
import BitIntroduction from './components/bitPolice/BitIntroduction';
import ActionDetails from './components/districtPolice/ActionDetails';
import ActivitiesDetails from './components/activities/ActivitiesDetails';
import ServiceDetails from './components/services/ServiceDetails';
import News from './components/noticeBoard/News';
import NewsDetails from './components/noticeBoard/NewsDetails';
import SpDetails from './components/administration/spDetails';
import BitNewsDetails from './components/bitPolice/BitNewsDetails';
import BitNews from './components/bitPolice/BitNews';
import SiteMap from './components/footer/SiteMap';
import axios from 'axios';
import bg from './assets/bg_main.gif';

function App() {
  //scroll top onClick in the new page
  const location = useLocation();
  const [data,setData] = useState({})
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
    axios.get(`dig`)
    .then(res=>setData(res.data))
  }, [location]);

  const isVisited = sessionStorage.getItem('visited')
  if (!isVisited) {
    axios.post(`save-visitor-counter`)
      .then(res => {
        sessionStorage.setItem('visited', true)
      })
      .catch(err => {
        console.log(err)
      })
  }


  return (
    <div style={{ backgroundColor: data?.content }}>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<MainHomePage />}></Route>
          <Route path="recent-activities" element={<RecentActivitiesPage />}></Route>
          <Route path="recent-activites-details/:id" element={<RecentActivitiesDetails />}></Route>
          <Route path="view-action-details/:id" element={<ActionDetails />}></Route>

          <Route path="dig-details" element={<DigDetails />}></Route>
          <Route path="sp-details/:id" element={<SpDetails />}></Route>
          <Route path="former-of-cheif-sp" element={<FormerChiefOfSP />}></Route>


          <Route path="zilla-police-page-details/:id" element={<GeographicalFamiliarity />}></Route>
          <Route path="zilla-police-sub-page-details/:id" element={<DistrictPoliceAtGlance />}></Route>

          <Route path="administration-page-details/:id" element={<SpMessage />}></Route>
          <Route path="officers" element={<Officers />}></Route>
          <Route path="employees" element={<Employees />}></Route>

          {/* unit  */}
          <Route path="unit-details/:id" element={<CircleOffice />}></Route>
          <Route path="sub-unit-details/:id" element={<Thana />}></Route>
          {/* unit  */}

          {/* activites */}
          <Route path="activities-details/:id" element={<ActivitiesDetails />}></Route>
          <Route path="activities-sub-page-details/:id" element={<ActivitiesSubmenuDetails />}></Route>
          {/* activites */}

          {/* <Route path="units-submenu/:id" element={<UnitsSubmenu />}></Route> */}

          <Route path="services-submenu-details/:id" element={<ServicesSubmenuDetails />}></Route>
          <Route path="service-details/:id" element={<ServiceDetails />}></Route>
          <Route path="crime-management-details/:id" element={<CrimeManageSubmenuDetails />}></Route>

          <Route path="map-kishorganj" element={<MapKishorganj />}></Route>

          <Route path="video-gallery" element={<VideoGallery />}></Route>
          <Route path="photo-gallery" element={<PhotoGallery />}></Route>

          <Route path="recruitment-notification" element={<RecruitmentNotification />}></Route>
          <Route path="noc" element={<Noc />}></Route>
          <Route path="notices/:id" element={<Notice />}></Route>
          <Route path="news" element={<News />}></Route>
          <Route path="news-details/:id" element={<NewsDetails />}></Route>
          <Route path="all-notice" element={<NoticeBoardTenders />}></Route>
          <Route path="notice-board-details/:id" element={<NoticeBoardDetails />}></Route>

          <Route path="info-bit-officers" element={<InformationOnBitOfficers />}></Route>
          <Route path="phone-directory" element={<PhoneDirectory />}></Route>
          <Route path="bit-policing-details/:id" element={<BitIntroduction />}></Route>
          <Route path="bit-news/:id" element={<BitNews />}></Route>
          <Route path="bit-news-details/:id" element={<BitNewsDetails />}></Route>

          {/* site map */}
          <Route path="site-map" element={<SiteMap />}></Route>




          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
