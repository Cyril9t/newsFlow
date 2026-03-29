import "./index.css";


import { createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { useState } from "react";
import { auth } from "./firebase.js"
import { useNavigate, Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
export function SignUp({ setName }) {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [debounced, setDebounced] = useState("");
    const [modaleShow, setModaleShow] = useState("hide");
    const [modaleAlert, setModaleAlert] = useState("");
    const [passwordAlert, setPasswordAlert] = useState("");
    const [buttonLoader, setButtonLoader] = useState(false);
    const navigate = useNavigate("");

    const debounce = () => {
        const timer = setInterval(() => {
            setDebounced(confirmPass);
        }, 500)

        return () => clearInterval(timer);
    }


    const handleSignUp = async () => {

        setButtonLoader(true);

        try {

            const credentials = await createUserWithEmailAndPassword(auth, email, password);
            const user = credentials.user;

            if (user) {
                setModaleShow("overLay")
                setModaleAlert(`Dear ${name} Welcom to newsFlow`);
                navigate("/", { replace: true });
                

            }


        } catch (err) {

            console.log("Error Say", err);

            if (err.code === "auth/email-already-in-use") {
                setModaleShow("overLay");
                setModaleAlert("Accoutn Already Exist Login Now.");

            } else if (err.code === "auth/network-request-failed") {
                setModaleShow("overLay");
                setModaleAlert("Network Error⚠️");
            } else if (err.code === "auth/missing-password") {
                setPasswordAlert("Please Input Password");
            } else if (err.code === "auth/weak-password") {
                setPasswordAlert("Password too weak must contain atleas 7 characters.");
            } else if (err.code === "auth/invalid-email") {
                setModaleAlert("Invalid Email");
                setModaleShow("overLay");
            }
        } finally {
            setButtonLoader(false);
        }

    }



    const signUpWithGoogle = async () => {
        const provider = new GoogleAuthProvider();

        try {
            const gooleSignIn = await signInWithPopup(auth, provider);
            const user = gooleSignIn.user;
            if (user) {
                navigate("/", { replace: true })
            }
        } catch (err) {
            console.log("googledSign", err);
            if (err.code === "auth/internal-error") {
                setModaleShow("overLay");
                setModaleAlert("Network Error⚠️");
            }
        }
    }

    return (<>

        <div className={modaleShow}>
            <div className="modal">
                <section className="remove ">
                    <button className="exit" onClick={() => {
                        setModaleShow("hide");
                    }}>&times;</button>
                </section>

                <div className="content">
                    {modaleAlert}
                </div>
            </div>
        </div>

        <div className="desktop-wrapper">
            <div className="left-panel">
                <div className="left-content">
                    <div className="brand">
                        <div className="brand-icon">✦</div>
                        <span className="brand-name">newsFlow</span>
                    </div>
                    <div className="hero-text">
                        <h1>Start your<br />journey.</h1>
                        <p>Create an account and unlock<br />your creative space today.</p>
                    </div>
                    <div className="floating-cards">
                        <div className="card card-1">
                            <div className="card-dot"></div>
                            <span>Free forever plan</span>
                        </div>
                        <div className="card card-2">
                            <div className="card-avatar">✦</div>
                            <span>Unlimited projects</span>
                        </div>
                        <div className="card card-3">
                            <div className="card-icon">🚀</div>
                            <span>Ready in seconds</span>
                        </div>
                    </div>
                </div>
                <div className="left-bg-orb orb1"></div>
                <div className="left-bg-orb orb2"></div>
            </div>


            <div className="right-panel">
                <div className="desktop-form-container">
                    <div className="form-header">
                        <h2>Create account</h2>
                        <p>Join Dream and start creating today</p>
                    </div>

                    <div className="name-row">
                        <div className="input-group">
                            <label>First Name</label>
                            <input type="text" placeholder="John" required
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </div>
                        <div className="input-group">
                            <label>Last Name</label>
                            <input type="text" placeholder="Doe" required />
                        </div>
                    </div>

                    <div className="input-group">
                        <label>E-mail</label>
                        <input type="email" placeholder="Hello@dream.com"
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                    </div>

                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" placeholder="············" required
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                        <small className="strong">{passwordAlert}</small>
                    </div>

                    <div className="input-group">
                        <label>Confirm Password</label>
                        <input type="password"
                            onChange={(e) => {
                                setConfirmPass(e.target.value)
                            }}
                            placeholder="············" required />
                    </div>

                    <div className="terms-row">
                        <input type="checkbox" id="terms" />
                        <label for="terms">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
                    </div>
                    <div className="divider"><h3 className="terms-row"> <Link to="/">Login</Link></h3></div>
                    <button className="login-btn" onClick={() => {
                        handleSignUp();
                    }}
                    >{buttonLoader ? <ClipLoader size={13} color="white" /> : "Create Account"}</button>

                    <div className="divider"><span>or sign up with</span></div>

                    <div className="social-row">
                        <button className="social-btn" onClick={() => {
                            signUpWithGoogle();
                        }} >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            Google
                        </button>
                        {/* <button className="social-btn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub
                        </button> */}
                    </div>

                </div>
            </div>

        </div>




        <div className="mobile-wrapper">
            <div className="phone-shell">
                <div className="phone-screen">


                    <div className="phone-top">
                        <div className="phone-notch"></div>
                        <div className="avatar-icon">
                            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5">
                                <circle cx="12" cy="8" r="4" />
                                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                            </svg>
                        </div>
                    </div>


                    <div className="phone-bottom">
                        <h2 className="phone-title">Sign Up</h2>

                        <div className="phone-name-row">
                            <div className="phone-field">
                                <label>First Name</label>
                                <input type="text"
                                    placeholder="John"
                                    onClick={(e) => {
                                        setName(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="phone-field">
                                <label>Last Name</label>
                                <input type="text" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="phone-field">
                            <label>E-mail</label>
                            <input type="email"
                                placeholder="Hello@dream.com"
                                onClick={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>

                        <div className="phone-field">
                            <label>Password</label>
                            <input type="password"
                                placeholder="············"
                                onClick={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />

                            <small className="strong">{passwordAlert}</small>
                        </div>

                        <div className="phone-field">
                            <label>Confirm Password</label>
                            <input type="password" placeholder="············" />
                        </div>

                        <div className="phone-terms">
                            <input type="checkbox" id="phone-terms" />
                            <label for="phone-terms">I agree to the <a href="#">Terms</a> & <a href="#">Privacy</a></label>
                        </div>
                        <div className="divider terms-row"> <Link to="/"><span className="">Login</span></Link> </div>
                        <button className="phone-btn"
                            onClick={() => {
                                handleSignUp();
                            }}
                        >{buttonLoader ? <ClipLoader size={13} color="white" /> : "Create Account"}</button>

                    </div>

                    <div className="divider"><span>or sign up with</span></div>

                    <div className="social-row">
                        <button className="social-btn" onClick={() => {
                            signUpWithGoogle();
                        }} >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            Google
                        </button>
                        {/* <button className="social-btn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub
                        </button> */}
                    </div>



                </div>
            </div>
        </div>


    </>)
}