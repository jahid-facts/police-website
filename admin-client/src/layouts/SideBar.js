import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../CSS/Sidebar.css";
import AuthUser from "../components/AuthUser";
import { useEffect } from "react";
import http from "../http";
import { FiAnchor, FiChevronDown, FiUnlock } from "react-icons/fi";

export default function SideBar() {
  const location = useLocation();
  const { getToken } = AuthUser();
  const user = getToken();
  const [userRole, setUserRole] = useState({
    home_page: [],
    administration: [],
    service: [],
    user: [],
  });
  const [data, setData] = useState({
    image: ""
  })
  useEffect(() => {
    http.get(`users/${user.id}`).then(res => {
      const { home_page, administration, service, user } = res.data?.role;
      setUserRole({
        home_page: home_page ? home_page.split(",") : [],
        administration: administration ? administration.split(",") : [],
        service: service ? service.split(",") : [],
        user: user ? user.split(",") : [],
      })
    })
    http.get(`dig`)
      .then(res => {
        setData(res.data)
      })
  }, [user.id])
  console.log(user, "user")
  return (
    <div className="sidebar-style">
      <nav className="sidebar">
        <div className="sidebar-header">
          <a style={{ width: "50%" }} href="/" className="sidebar-brand">
            <img style={{ width: "50%" }} src={`${global.img_Url}/${data.image}`} alt="" srcset="" />
          </a>
          {/* <p>Salse</p> */}
          <div className="sidebar-toggler not-active">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="sidebar-body">
          <ul className="nav">
            {/* Category Start  */}
            {
              userRole.home_page.length > 0 &&
              <>
                <li
                  className={`nav-item ${location.pathname === "/banner-bottom-slide" ||
                    location.pathname === "/top-slide" ||
                    location.pathname === "/banner" ||
                    location.pathname === "/titles" ||
                    location.pathname === "/recent-activity" ||
                    location.pathname === "/activity-slider" ||
                    location.pathname === "/designation" ||
                    location.pathname === "/sp" ||
                    location.pathname === "/logo" ||
                    location.pathname === "/background" ||
                    location.pathname === "/requisition-frequency"
                    ? "active"
                    : ""
                    }`}
                >
                  <a
                    className="nav-link"
                    data-bs-toggle="collapse"
                    href="#emails"
                    role="button"
                    aria-expanded={`${location.pathname === "/banner" ||
                      location.pathname === "/top-slide" ||
                      location.pathname === "/banner" ||
                      location.pathname === "/titles" ||
                      location.pathname === "/recent-activity" ||
                      location.pathname === "/activity-slider" ||
                      location.pathname === "/designation" ||
                      location.pathname === "/sp" ||
                      location.pathname === "/logo" ||
                      location.pathname === "/requisition-category" ||
                      location.pathname === "/background" ||
                      location.pathname === "/requisition-frequency"
                      ? "true"
                      : ""
                      }`}
                    aria-controls="emails"
                  >
                    <FiAnchor className="link-icon" />
                    <span className="link-title">Home page</span>
                    {/* <i className="link-arrow" data-feather="chevron-down" strokeWidth="2" fill="#6E6" /> */}
                    < FiChevronDown className="link-arrow" />
                  </a>
                  <div
                    className={`collapse ${location.pathname === "/latest-news" ||
                      location.pathname === "/top-slide" ||
                      location.pathname === "/banner" ||
                      location.pathname === "/banner-bottom-slide" ||
                      location.pathname === "/recent-activity" ||
                      location.pathname === "/activity-slider" ||
                      location.pathname === "/designation" ||
                      location.pathname === "/sp" ||
                      location.pathname === "/logo" ||
                      location.pathname === "/requisition-category" ||
                      location.pathname === "/background" ||
                      location.pathname === "/requisition-frequency"
                      ? "show"
                      : ""
                      }`}
                    id="emails"
                  >
                    <ul className="nav sub-menu">
                      <li className="nav-item">
                        <Link
                          to="/top-slide"
                          className={`nav-link ${location.pathname === "/top-slide" ? "active" : ""
                            }`}
                        >
                          Top Slider
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/latest-news"
                          className={`nav-link ${location.pathname === "/latest-news" ? "active" : ""
                            }`}
                        >
                          Latest news
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/banner"
                          className={`nav-link ${location.pathname === "/banner" ? "active" : ""
                            }`}
                        >
                          Top Banner
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/banner-bottom-slide"
                          className={`nav-link ${location.pathname === "/banner-bottom-slide"
                            ? "active"
                            : ""
                            }`}
                        >
                          Banner Bottom Slider Text
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/recent-activity"
                          className={`nav-link ${location.pathname === "/recent-activity" ? "active" : ""
                            }`}
                        >
                          Recent Activity
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/activity-slider"
                          className={`nav-link ${location.pathname === "/activity-slider" ? "active" : ""
                            }`}
                        >
                          Activity Slider
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/logo"
                          className={`nav-link ${location.pathname === "/logo" ? "active" : ""
                            }`}
                        >
                          Logo and Web Portal
                        </Link>
                      </li>
                      {/* <li className="nav-item">
                        <Link
                          to="/background"
                          className={`nav-link ${location.pathname === "/background" ? "active" : ""
                            }`}
                        >
                          Background
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                </li>

                <li
                  class={`nav-item ${location.pathname === "/category" ||
                    location.pathname === "/subcategory" ||
                    location.pathname === "/image-gallery" ||
                    location.pathname === "/video-gallery"
                    ? "active"
                    : ""
                    }`}
                >
                  <a
                    class="nav-link"
                    data-bs-toggle="collapse"
                    href="#authPages"
                    role="button"
                    aria-expanded={`${location.pathname === "/category" ||
                      location.pathname === "/subcategory" ||
                      location.pathname === "/image-gallery" ||
                      location.pathname === "/video-gallery"
                      ? "true"
                      : ""
                      }`}
                    aria-controls="authPages"
                  >
                    <FiUnlock className="link-icon" />
                    <span class="link-title">Work Section</span>
                    < FiChevronDown className="link-arrow" />
                  </a>
                  <div
                    class={`collapse ${location.pathname === "/category" ||
                      location.pathname === "/subcategory" ||
                      location.pathname === "/image-gallery" ||
                      location.pathname === "/video-gallery"
                      ? "show"
                      : ""
                      }`}
                    id="authPages"
                  >
                    <ul class="nav sub-menu">
                      <li className="nav-item">
                        <Link
                          to="/category"
                          className={`nav-link ${location.pathname === "/category" ? "active" : ""
                            }`}
                        >
                          Category
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/subcategory"
                          className={`nav-link ${location.pathname === "/subcategory" ? "active" : ""
                            }`}
                        >
                          Sub Category
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/image-gallery"
                          className={`nav-link ${location.pathname === "/image-gallery" ? "active" : ""
                            }`}
                        >
                          Image Gallery
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/video-gallery"
                          className={`nav-link ${location.pathname === "/video-gallery" ? "active" : ""
                            }`}
                        >
                          Video Gallery
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  class={`nav-item ${location.pathname === "/footer-section" ||
                    location.pathname === "/footer-content"
                    ? "active"
                    : ""
                    }`}
                >
                  <a
                    class="nav-link"
                    data-bs-toggle="collapse"
                    href="#footer"
                    role="button"
                    aria-expanded={`${location.pathname === "/footer-section" ||
                      location.pathname === "/footer-content"
                      ? "true"
                      : ""
                      }`}
                    aria-controls="footer"
                  >
                    <FiUnlock className="link-icon" />
                    <span class="link-title">Footer Section</span>
                    < FiChevronDown className="link-arrow" />
                  </a>
                  <div
                    class={`collapse ${location.pathname === "/footer-section" ||
                      location.pathname === "/footer-content" ||
                      location.pathname === "/footer-button"
                      ? "show"
                      : ""
                      }`}
                    id="footer"
                  >
                    <ul class="nav sub-menu">
                      <li className="nav-item">
                        <Link
                          to="/footer-section"
                          className={`nav-link ${location.pathname === "/footer-section" ? "active" : ""
                            }`}
                        >
                          Footer Headings
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/footer-content"
                          className={`nav-link ${location.pathname === "/footer-content" ? "active" : ""
                            }`}
                        >
                          Footer Content
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/company-social-media"
                          className={`nav-link ${location.pathname === "/company-social-media" ? "active" : ""
                            }`}
                        >
                          Company and Social Media
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/footer-button"
                          className={`nav-link ${location.pathname === "/footer-button" ? "active" : ""
                            }`}
                        >
                          Footer Buttons
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  class={`nav-item ${location.pathname === "/right-officer-section" ||
                    location.pathname === "/right-important-links"
                    ? "active"
                    : ""
                    }`}
                >
                  <a
                    class="nav-link"
                    data-bs-toggle="collapse"
                    href="#right"
                    role="button"
                    aria-expanded={`${location.pathname === "/right-officer-section" ||
                      location.pathname === "/right-important-links"
                      || location.pathname === "/right-others-section"
                      ? "true"
                      : ""
                      }`}
                    aria-controls="right"
                  >
                    <FiUnlock className="link-icon" />
                    <span class="link-title">Right Sidebar</span>
                    < FiChevronDown className="link-arrow" />
                  </a>
                  <div
                    class={`collapse ${location.pathname === "/right-officer-section" ||
                      location.pathname === "/right-important-links" || location.pathname === "/right-others-section"
                      ? "show"
                      : ""
                      }`}
                    id="right"
                  >
                    <ul class="nav sub-menu">
                      <li className="nav-item">
                        <Link
                          to="/right-officer-section"
                          className={`nav-link ${location.pathname === "/right-officer-section" ? "active" : ""
                            }`}
                        >
                          Officer Section
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/right-important-links"
                          className={`nav-link ${location.pathname === "/right-important-links" ? "active" : ""
                            }`}
                        >
                          Important Links
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/right-others-section"
                          className={`nav-link ${location.pathname === "/right-others-section" ? "active" : ""
                            }`}
                        >
                          Others Section
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </>
            }
            {
              userRole.administration.length > 0 &&
              <>
                <li
                  class={`nav-item ${location.pathname === "/zilla-police-pages" ||
                    location.pathname === "/zilla-police-sub-pages"
                    ? "active"
                    : ""
                    }`}
                >
                  <a
                    class="nav-link"
                    data-bs-toggle="collapse"
                    href="#zilla-police-pages"
                    role="button"
                    aria-expanded={`${location.pathname === "/zilla-police-pages" ||
                      location.pathname === "/zilla-police-sub-pages"
                      ? "true"
                      : ""
                      }`}
                    aria-controls="zilla-police-pages"
                  >
                    <FiUnlock className="link-icon" />
                    <span class="link-title">জেলা পুলিশ </span>
                    < FiChevronDown className="link-arrow" />
                  </a>
                  <div
                    class={`collapse ${location.pathname === "/zilla-police-pages" ||
                      location.pathname === "/zilla-police-sub-pages"
                      ? "show"
                      : ""
                      }`}
                    id="zilla-police-pages"
                  >
                    <ul class="nav sub-menu">
                      <li className="nav-item">
                        <Link
                          to="/zilla-police-pages"
                          className={`nav-link ${location.pathname === "/zilla-police-pages"
                            ? "active"
                            : ""
                            }`}
                        >
                          Pages
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/zilla-police-sub-pages"
                          className={`nav-link ${location.pathname === "/zilla-police-sub-pages"
                            ? "active"
                            : ""
                            }`}
                        >
                          Sub Pages
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  class={`nav-item ${location.pathname === "/administration-pages" ||
                    location.pathname === "/administration-sub-pages" ||
                    location.pathname === "/employees" ||
                    location.pathname === "/officers" ||
                    location.pathname === "/ex-sps" ||
                    location.pathname === "/ex-police-super"
                    ? "active"
                    : ""
                    }`}
                >
                  <a
                    class="nav-link"
                    data-bs-toggle="collapse"
                    href="#administration-pages"
                    role="button"
                    aria-expanded={`${location.pathname === "/administration-pages" ||
                      location.pathname === "/administration-sub-pages" ||
                      location.pathname === "/employees" ||
                      location.pathname === "/officers" ||
                      location.pathname === "/ex-sps" ||
                      location.pathname === "/ex-police-super"
                      ? "true"
                      : ""
                      }`}
                    aria-controls="administration-pages"
                  >
                    <FiUnlock className="link-icon" />
                    <span class="link-title">প্রসাশন </span>
                    < FiChevronDown className="link-arrow" />
                  </a>
                  <div
                    class={`collapse ${location.pathname === "/administration-pages" ||
                      location.pathname === "/administration-sub-pages" ||
                      location.pathname === "/employees" ||
                      location.pathname === "/officers" ||
                      location.pathname === "/ex-sps" ||
                      location.pathname === "/ex-police-super"
                      ? "show"
                      : ""
                      }`}
                    id="administration-pages"
                  >
                    <ul class="nav sub-menu">
                      <li className="nav-item">
                        <Link
                          to="/administration-pages"
                          className={`nav-link ${location.pathname === "/administration-pages"
                            ? "active"
                            : ""
                            }`}
                        >
                          Pages
                        </Link>
                      </li>
                      {/* <li className="nav-item">
                                        <Link to="/administration-sub-pages" className={`nav-link ${location.pathname === "/administration-sub-pages" ? "active" : ""}`}>Sub Pages </Link>
                                    </li> */}
                      <li className="nav-item">
                        <Link
                          to="/employees"
                          className={`nav-link ${location.pathname === "/employees" ? "active" : ""
                            }`}
                        >
                          কর্মচারীবৃন্দ
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/officers"
                          className={`nav-link ${location.pathname === "/officers" ? "active" : ""
                            }`}
                        >
                          কর্মকর্তাগ্ণ
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/ex-sps"
                          className={`nav-link ${location.pathname === "/ex-sps" ? "active" : ""
                            }`}
                        >
                          সাবেক কর্মকর্তাগ্ণ
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/ex-police-super"
                          className={`nav-link ${location.pathname === "/ex-police-super" ? "active" : ""
                            }`}
                        >
                          সাবেক পুলিশ সুপার
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  class={`nav-item ${location.pathname === "/unit" ||
                    location.pathname === "/sub-unit" ||
                    location.pathname === "/unit-forces" ||
                    location.pathname === "/officers" ||
                    location.pathname === "/ex-sps"
                    ? "active"
                    : ""
                    }`}
                >
                  <a
                    class="nav-link"
                    data-bs-toggle="collapse"
                    href="#unit"
                    role="button"
                    aria-expanded={`${location.pathname === "/unit" ||
                      location.pathname === "/sub-unit" ||
                      location.pathname === "/unit-forces" ||
                      location.pathname === "/officers" ||
                      location.pathname === "/ex-sps"
                      ? "true"
                      : ""
                      }`}
                    aria-controls="unit"
                  >
                    <FiUnlock className="link-icon" />
                    <span class="link-title">ইউনিট সমূহ </span>
                    < FiChevronDown className="link-arrow" />
                  </a>
                  <div
                    class={`collapse ${location.pathname === "/unit" ||
                      location.pathname === "/sub-unit" ||
                      location.pathname === "/unit-forces" ||
                      location.pathname === "/officers" ||
                      location.pathname === "/ex-unit-forces" ||
                      location.pathname === "/unit-forces" ||
                      location.pathname === "/ex-sps"
                      ? "show"
                      : ""
                      }`}
                    id="unit"
                  >
                    <ul class="nav sub-menu">
                      <li className="nav-item">
                        <Link
                          to="/unit"
                          className={`nav-link ${location.pathname === "/unit" ? "active" : ""
                            }`}
                        >
                          Unit
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/sub-unit"
                          className={`nav-link ${location.pathname === "/sub-unit" ? "active" : ""
                            }`}
                        >
                          Sub Unit
                        </Link>
                      </li>
                      {/* <li className="nav-item">
                        <Link
                          to="/unit-forces"
                          className={`nav-link ${location.pathname === "/unit-forces" ? "active" : ""
                            }`}
                        >
                          Forces
                        </Link>
                      </li> */}
                      <li className="nav-item">
                        <Link
                          to="/ex-unit-forces"
                          className={`nav-link ${location.pathname === "/ex-unit-forces" ? "active" : ""
                            }`}
                        >
                          Ex Forces
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  class={`nav-item ${location.pathname === "/activities-pages" ||
                    location.pathname === "/activities-sub-pages"
                    ? "active"
                    : ""
                    }`}
                >
                  <a
                    class="nav-link"
                    data-bs-toggle="collapse"
                    href="#activities"
                    role="button"
                    aria-expanded={`${location.pathname === "/activities-pages" ||
                      location.pathname === "/activities-sub-pages"
                      ? "true"
                      : ""
                      }`}
                    aria-controls="activities"
                  >
                    <FiUnlock className="link-icon" />
                    <span class="link-title">কার্যক্রম </span>
                    < FiChevronDown className="link-arrow" />
                  </a>
                  <div
                    class={`collapse ${location.pathname === "/activities-pages" ||
                      location.pathname === "/activities-sub-pages"
                      ? "show"
                      : ""
                      }`}
                    id="activities"
                  >
                    <ul class="nav sub-menu">
                      <li className="nav-item">
                        <Link
                          to="/activities-pages"
                          className={`nav-link ${location.pathname === "/activities-pages"
                            ? "active"
                            : ""
                            }`}
                        >
                          Pages
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/activities-sub-pages"
                          className={`nav-link ${location.pathname === "/activities-sub-pages"
                            ? "active"
                            : ""
                            }`}
                        >
                          Sub Pages
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  class={`nav-item ${location.pathname === "/crime-management" ||
                    location.pathname === "/activities-sub-pages"
                    ? "active"
                    : ""
                    }`}
                >
                  <a
                    class="nav-link"
                    data-bs-toggle="collapse"
                    href="#crime"
                    role="button"
                    aria-expanded={`${location.pathname === "/crime-management" ||
                      location.pathname === "/activities-sub-pages"
                      ? "true"
                      : ""
                      }`}
                    aria-controls="crime"
                  >
                    <FiUnlock className="link-icon" />
                    <span class="link-title">অপরাধ ব্যাবস্থাপনা </span>
                    < FiChevronDown className="link-arrow" />
                  </a>
                  <div
                    class={`collapse ${location.pathname === "/crime-management" ||
                      location.pathname === "/activities-sub-pages"
                      ? "show"
                      : ""
                      }`}
                    id="crime"
                  >
                    <ul class="nav sub-menu">
                      <li className="nav-item">
                        <Link
                          to="/crime-management"
                          className={`nav-link ${location.pathname === "/crime-management"
                            ? "active"
                            : ""
                            }`}
                        >
                          Pages
                        </Link>
                      </li>
                      {/* <li className="nav-item">
                    <Link
                      to="/activities-sub-pages"
                      className={`nav-link ${location.pathname === "/activities-sub-pages"
                        ? "active"
                        : ""
                        }`}
                    >
                      Sub Pages
                    </Link>
                  </li> */}
                    </ul>
                  </div>
                </li>
                <li
                  class={`nav-item ${location.pathname === "/services-pages" ||
                    location.pathname === "/services-sub-pages"
                    ? "active"
                    : ""
                    }`}
                >
                  <a
                    class="nav-link"
                    data-bs-toggle="collapse"
                    href="#services"
                    role="button"
                    aria-expanded={`${location.pathname === "/services-pages" ||
                      location.pathname === "/services-sub-pages"
                      ? "true"
                      : ""
                      }`}
                    aria-controls="services"
                  >
                    <FiUnlock className="link-icon" />
                    <span class="link-title">সেবা </span>
                    < FiChevronDown className="link-arrow" />
                  </a>
                  <div
                    class={`collapse ${location.pathname === "/services-pages" ||
                      location.pathname === "/services-sub-pages"
                      ? "show"
                      : ""
                      }`}
                    id="services"
                  >
                    <ul class="nav sub-menu">
                      <li className="nav-item">
                        <Link
                          to="/services-pages"
                          className={`nav-link ${location.pathname === "/services-pages" ? "active" : ""
                            }`}
                        >
                          Pages
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/services-sub-pages"
                          className={`nav-link ${location.pathname === "/services-sub-pages"
                            ? "active"
                            : ""
                            }`}
                        >
                          Sub Pages
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  class={`nav-item ${location.pathname === "/notice-pages" ||
                    location.pathname === "/notice-sub-pages"
                    ? "active"
                    : ""
                    }`}
                >
                  <a
                    class="nav-link"
                    data-bs-toggle="collapse"
                    href="#notice"
                    role="button"
                    aria-expanded={`${location.pathname === "/notice-pages" ||
                      location.pathname === "/notice-sub-pages"
                      ? "true"
                      : ""
                      }`}
                    aria-controls="notice"
                  >
                    <FiUnlock className="link-icon" />
                    <span class="link-title">নোটিশ বোর্ড</span>
                    < FiChevronDown className="link-arrow" />
                  </a>
                  <div
                    class={`collapse ${location.pathname === "/notice-pages" ||
                      location.pathname === "/notice-sub-pages"
                      ? "show"
                      : ""
                      }`}
                    id="notice"
                  >
                    <ul class="nav sub-menu">
                      <li className="nav-item">
                        <Link
                          to="/notice-pages"
                          className={`nav-link ${location.pathname === "/notice-pages" ? "active" : ""
                            }`}
                        >
                          Category
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/notice-sub-pages"
                          className={`nav-link ${location.pathname === "/notice-sub-pages"
                            ? "active"
                            : ""
                            }`}
                        >
                          Notices
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  class={`nav-item ${location.pathname === "/bit-police-pages" ||
                    location.pathname === "/notice-sub-pages" || location.pathname === "/bit-officers" || location.pathname === "/bit-news"
                    ? "active"
                    : ""
                    }`}
                >
                  <a
                    class="nav-link"
                    data-bs-toggle="collapse"
                    href="#bit"
                    role="button"
                    aria-expanded={`${location.pathname === "/bit-police-pages" ||
                      location.pathname === "/bit-area" || location.pathname === "/bit-officers" || location.pathname === "/bit-news"
                      ? "true"
                      : ""
                      }`}
                    aria-controls="bit"
                  >
                    <FiUnlock className="link-icon" />
                    <span class="link-title">বিট পুলিশিং </span>
                    < FiChevronDown className="link-arrow" />
                  </a>
                  <div
                    class={`collapse ${location.pathname === "/bit-police-pages" ||
                      location.pathname === "/bit-area"
                      ? "show"
                      : ""
                      }`}
                    id="bit"
                  >
                    <ul class="nav sub-menu">
                      <li className="nav-item">
                        <Link
                          to="/bit-police-pages"
                          className={`nav-link ${location.pathname === "/bit-police-pages" ? "active" : ""
                            }`}
                        >
                          Pages
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/bit-area"
                          className={`nav-link ${location.pathname === "/bit-area"
                            ? "active"
                            : ""
                            }`}
                        >
                          Bit Thana
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/bit-officers"
                          className={`nav-link ${location.pathname === "/bit-officers"
                            ? "active"
                            : ""
                            }`}
                        >
                          Bit Officers
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/bit-news"
                          className={`nav-link ${location.pathname === "/bit-news"
                            ? "active"
                            : ""
                            }`}
                        >
                          Bit Police News
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  class={`nav-item ${location.pathname === "/phone-directory-category" ||
                    location.pathname === "/notice-sub-pages"
                    ? "active"
                    : ""
                    }`}
                >
                  <a
                    class="nav-link"
                    data-bs-toggle="collapse"
                    href="#directory"
                    role="button"
                    aria-expanded={`${location.pathname === "/phone-directory-category" ||
                      location.pathname === "/phone-directory"
                      || location.pathname === "/phone-directory-sub-category"
                      ? "true"
                      : ""
                      }`}
                    aria-controls="directory"
                  >
                    <FiUnlock className="link-icon" />
                    <span class="link-title">ফোন ডিরেক্টরি</span>
                    < FiChevronDown className="link-arrow" />
                  </a>
                  <div
                    class={`collapse ${location.pathname === "/phone-directory-category" ||
                      location.pathname === "/phone-directory"
                      || location.pathname === "/phone-directory-sub-category"
                      ? "show"
                      : ""
                      }`}
                    id="directory"
                  >
                    <ul class="nav sub-menu">
                      <li className="nav-item">
                        <Link
                          to="/phone-directory-category"
                          className={`nav-link ${location.pathname === "/phone-directory-category" ? "active" : ""
                            }`}
                        >
                          Category
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/phone-directory-sub-category"
                          className={`nav-link ${location.pathname === "/phone-directory-sub-category" ? "active" : ""
                            }`}
                        >
                          Sub Category
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/phone-directory"
                          className={`nav-link ${location.pathname === "/phone-directory"
                            ? "active"
                            : ""
                            }`}
                        >
                          Phone Directory
                        </Link>
                      </li>

                    </ul>
                  </div>
                </li>
                <li
                  class={`nav-item ${location.pathname === "/contact-address" ||
                    location.pathname === "/contact-person"
                    ? "active"
                    : ""
                    }`}
                >
                  <a
                    class="nav-link"
                    data-bs-toggle="collapse"
                    href="#address"
                    role="button"
                    aria-expanded={`${location.pathname === "/contact-address" ||
                      location.pathname === "/contact-person"
                      ? "true"
                      : ""
                      }`}
                    aria-controls="address"
                  >
                    <FiUnlock className="link-icon" />
                    <span class="link-title">যোগাযোগ</span>
                    < FiChevronDown className="link-arrow" />
                  </a>
                  <div
                    class={`collapse ${location.pathname === "/contact-address" ||
                      location.pathname === "/contact-person"
                      ? "show"
                      : ""
                      }`}
                    id="address"
                  >
                    <ul class="nav sub-menu">
                      <li className="nav-item">
                        <Link
                          to="/contact-address"
                          className={`nav-link ${location.pathname === "/contact-address" ? "active" : ""
                            }`}
                        >
                          Address
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/contact-person"
                          className={`nav-link ${location.pathname === "/contact-person"
                            ? "active"
                            : ""
                            }`}
                        >
                          Contact Person
                        </Link>
                      </li>

                    </ul>
                  </div>
                </li>
              </>
            }
            {
              userRole.service.length > 0 &&
              <li
                class={`nav-item ${location.pathname === "/roles"
                  ? "active"
                  : ""
                  }`}
              >
                <a
                  class="nav-link"
                  data-bs-toggle="collapse"
                  href="#roles"
                  role="button"
                  aria-expanded={`${location.pathname === "/roles"
                    ? "true"
                    : ""
                    }`}
                  aria-controls="roles"
                >
                  <FiUnlock className="link-icon" />
                  <span class="link-title">Roles</span>
                  < FiChevronDown className="link-arrow" />
                </a>
                <div
                  class={`collapse ${location.pathname === "/roles"
                    ? "show"
                    : ""
                    }`}
                  id="roles"
                >
                  <ul class="nav sub-menu">
                    <li className="nav-item">
                      <Link
                        to="/roles"
                        className={`nav-link ${location.pathname === "/roles" ? "active" : ""
                          }`}
                      >
                        Roles
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            }
            {
              userRole.user.length > 0 &&
              <li
                class={`nav-item ${location.pathname === "/users"
                  ? "active"
                  : ""
                  }`}
              >
                <a
                  class="nav-link"
                  data-bs-toggle="collapse"
                  href="#user"
                  role="button"
                  aria-expanded={`${location.pathname === "/users"
                    ? "true"
                    : ""
                    }`}
                  aria-controls="user"
                >
                  <FiUnlock className="link-icon" />
                  <span class="link-title">Users</span>
                  < FiChevronDown className="link-arrow" />
                </a>
                <div
                  class={`collapse ${location.pathname === "/users"
                    ? "show"
                    : ""
                    }`}
                  id="user"
                >
                  <ul class="nav sub-menu">
                    <li className="nav-item">
                      <Link
                        to="/users"
                        className={`nav-link ${location.pathname === "/users" ? "active" : ""
                          }`}
                      >
                        Users
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            }
            {
              user.permissions_module === "BitPolice" &&
              <li className="nav-item d-flex align-items-center">
                <FiUnlock style={{ fontSize: "17px" }} className="link-icon me-1" />
                <Link
                  to="/"
                  className={`nav-link ${location.pathname === "/" ? "active" : ""
                    }`}
                >
                  Bit Police News
                </Link>
              </li>
            }


            {/* Sidebar Footer  */}
          </ul>
        </div>
      </nav>
    </div>
  );
}
