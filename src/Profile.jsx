import "./Profile.css"
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase.js";
export function ProfilePage() {


    const navigate = useNavigate();


    const logout = () => {
        signOut(auth)
            .then(() => {
                console.log("log Out successfully");
                navigate("/")

            }).then((err) => {
                console.log("logout error", err)
            })
    };


    return (
        <>
            <header class="site-header">
                <div class="container">
                    <div class="header-content">
                        <Link to="/home">
                            <button class="menu-btn" aria-label="Menu"

                            > <i class="fas fas fa-home"></i></button>
                        </Link>
                        <h1 class="logo">✦ newsFlow</h1>

                    </div>
                </div>
            </header>

            <div className="cover-banner">
                <div className="cover-orb o1"></div>
                <div className="cover-orb o2"></div>
            </div>

            <div className="profile-header-outer">
                <div className="container">
                    <div className="profile-header">
                        <div className="avatar-wrap">
                            <div className="avatar">
                                {/* <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="1.3">
                                    <circle cx="12" cy="8" r="4" />
                                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                                </svg> */}
                                <img src="profile.jpg" className="photo" alt="name" />

                            </div>
                            <span className="online-badge"></span>
                        </div>
                        <div className="header-info">
                            <h1 className="profile-fullname">newsFlow</h1>
                            <span className="profile-username">@newsFlowo</span>
                            <span className="profile-role"></span>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container page-body">


                <div className="tab-panel active" id="tab-overview">
                    <div className="two-col">
                        <div className="col-left">

                            <section className="section">
                                <h3 className="section-title">About</h3>
                                <p className="bio-text">NewsFlow is a modern news platform built to deliver real-time updates from around the world fast, simple, and reliable. Designed with user experience in mind, it gives you instant access to trending headlines across categories like technology, business, sports, and entertainment.
                                    With NewsFlow, users can explore news based on their preferred country, making it easy to stay connected both locally and globally. The platform offers a smooth, responsive interface that ensures seamless browsing on any device.
                                    Powered by live data, NewsFlow keeps content fresh and up to date, while its scalable architecture allows for future enhancements like personalized feeds, saved articles, and notifications.
                                    NewsFlow isn’t just a news app—it’s a smarter way to experience the world’s stories.</p>
                            </section>

                            <section className="section">
                                <h3 className="section-title">Details</h3>
                                <ul className="detail-list">
                                    <li>
                                        <span className="d-icon">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" /></svg></span>
                                        <span className="d-label">Location</span>
                                        <span className="d-value">San Francisco, CA — United States</span>
                                    </li>
                                    <li>
                                        <span className="d-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" /><path d="M22 6l-10 7L2 6" /></svg></span>
                                        <span className="d-label">Email</span>
                                        <span className="d-value">newsFlow@update.com</span>
                                    </li>
                                    <li>
                                        <span className="d-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" /><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" /></svg></span>
                                        <span className="d-label">Website</span>
                                        <a href="#" className="d-value d-link">newsFlow.com</a>
                                    </li>
                                    <li>
                                        <span className="d-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg></span>
                                        <span className="d-label">Joined</span>
                                        <span className="d-value">March 2022</span>
                                    </li>
                                    <li>
                                        <span className="d-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" /></svg></span>
                                        <span className="d-label">Language</span>
                                        <span className="d-value">English (US)</span>
                                    </li>
                                    {/* <li>
                                        <span className="d-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /></svg></span>
                                        <span className="d-label">Work</span>
                                        <span className="d-value">Freelance · Open to Full-time</span>
                                    </li> */}
                                </ul>
                            </section>

                            <section className="section">
                                <h3 className="section-title">Preferred Categories</h3>
                                <div className="tags-row">
                                    <span className="tag tag-fill">Design</span>
                                    <span className="tag tag-fill">Technology</span>
                                    <span className="tag">Branding</span>
                                    <span className="tag tag-fill">Motion</span>
                                    <span className="tag">Photography</span>
                                    <span className="tag">Architecture</span>
                                    <span className="tag tag-fill">Frontend</span>
                                </div>
                            </section>

                        </div>
                        <div className="col-right">


                        </div>
                    </div>
                </div>



                {/* <div className="tab-panel" id="tab-bookmarks">
                    <section className="section">
                        <h3 className="section-title">Saved Articles &amp; Bookmarks</h3>
                        <div className="bookmark-grid">
                            <div className="bookmark-card">
                                <span className="bm-cat">Design</span>
                                <p className="bm-title">Spatial Design and the Next Interface Paradigm</p>
                                <span className="bm-meta">Designerly · 8 min read</span>
                            </div>
                            <div className="bookmark-card">
                                <span className="bm-cat">Frontend</span>
                                <p className="bm-title">Building Accessible Components from Scratch</p>
                                <span className="bm-meta">WebDevWeekly · 12 min read</span>
                            </div>
                            <div className="bookmark-card">
                                <span className="bm-cat">AI Tools</span>
                                <p className="bm-title">Prompt Engineering for Visual Designers</p>
                                <span className="bm-meta">Motion Lab · 6 min read</span>
                            </div>
                            <div className="bookmark-card">
                                <span className="bm-cat">Typography</span>
                                <p className="bm-title">Expressive Type: Breaking the Grid on Purpose</p>
                                <span className="bm-meta">Frontend Focus · 9 min read</span>
                            </div>
                            <div className="bookmark-card">
                                <span className="bm-cat">Branding</span>
                                <p className="bm-title">How to Build a Visual Identity That Scales</p>
                                <span className="bm-meta">Designerly · 14 min read</span>
                            </div>
                            <div className="bookmark-card">
                                <span className="bm-cat">Motion</span>
                                <p className="bm-title">Principles of Cinematic UI Animation</p>
                                <span className="bm-meta">Motion Lab · 10 min read</span>
                            </div>
                        </div>
                    </section>
                </div> */}

                <div className="tab-panel">
                    <div className="two-col">
                        <div className="col-left">

                            {/* <section className="section">
                                <h3 className="section-title">Edit Profile</h3>
                                <div className="settings-form">
                                    <div className="field-row">
                                        <div className="field-group">
                                            <label>Full Name</label>
                                            <input type="text" value="Alexandra Monroe" />
                                        </div>
                                        <div className="field-group">
                                            <label>Display Name</label>
                                            <input type="text" value="Alex Monroe" />
                                        </div>
                                    </div>
                                    <div className="field-group">
                                        <label>Username</label>
                                        <input type="text" value="@alexmonroe" />
                                    </div>
                                    <div className="field-group">
                                        <label>Email</label>
                                        <input type="email" value="alex@dream.com" />
                                    </div>
                                    <div className="field-row">
                                        <div className="field-group">
                                            <label>Location</label>
                                            <input type="text" value="San Francisco, CA" />
                                        </div>
                                        <div className="field-group">
                                            <label>Region / Country</label>
                                            <select>
                                                <option selected>United States</option>
                                                <option>United Kingdom</option>
                                                <option>Canada</option>
                                                <option>Australia</option>
                                                <option>Germany</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="field-group">
                                        <label>Bio</label>
                                        <textarea rows="3">Passionate designer crafting meaningful digital experiences. Open to freelance collaborations and full-time opportunities.</textarea>
                                    </div>
                                    <button className="save-btn">Save Changes</button>
                                </div>
                            </section> */}
                            {/* 
                            <section className="section">
                                <h3 className="section-title">Profile Picture</h3>
                                <div className="avatar-upload-row">
                                    <div className="avatar avatar-sm">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="1.4">
                                            <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                                        </svg>
                                    </div>
                                    <div className="upload-actions">
                                        <button className="btn-outline-sm">Upload Photo</button>
                                        <button className="btn-ghost-sm">Remove</button>
                                    </div>
                                </div>
                            </section> */}

                        </div>
                        <div className="col-right">

                            {/* <section className="section">
                                <h3 className="section-title">Appearance</h3>
                                <div className="theme-options">
                                    <label className="theme-option">
                                        <input type="radio" name="theme" value="light" checked />
                                        <span className="theme-swatch swatch-light"></span>
                                        <span>Light</span>
                                    </label>
                                    <label className="theme-option">
                                        <input type="radio" name="theme" value="dark" />
                                        <span className="theme-swatch swatch-dark"></span>
                                        <span>Dark</span>
                                    </label>
                                </div>
                        </section> */}
                            <section className="section">
                                <h3 className="section-title">Account</h3>
                                <div className="account-actions">
                                    <button className="account-btn" onClick={() => {
                                        logout();
                                    }}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" /></svg>
                                        Log Out
                                    </button>
                                    <button className="account-btn account-btn-danger">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" /></svg>
                                        Delete Account
                                    </button>
                                </div>
                            </section>

                        </div>
                    </div>
                </div >

            </div >

            <footer className="footer">
                <span>✦ newsFlow &copy; 2026</span>
                <div className="footer-links">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Help</a>
                </div>
            </footer>

        </>
    )

}