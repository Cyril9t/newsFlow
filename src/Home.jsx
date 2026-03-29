import { data, Link, useNavigate } from "react-router-dom";
import "./Home.css";
import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";


export function HomePage({ name }) {

  const [global, setGlobal] = useState([]);
  const [openCountry, setOpenCountry] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHIde] = useState("hide");
  const [cat, setCat] = useState([]);
  const [title, setTitle] = useState("");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(null);
  const [display, setDisplay] = useState(false);
  const [displayOptions, setDisplayOptions] = useState(null);
  const [countryLoading, setCountryLoading] = useState(null);
  const [catIloading, setCatIloading] = useState(null);
  const [modaleShow, setModaleShow] = useState("overLay");
  const navigate = useNavigate();


  useEffect(() => {
    if (global.length <= 0) {
      setLoading(true);
    } else if (global.length >= 1) {
      setLoading(false);
    }

    if (countries.length <= 0) {
      setCountryLoading(true);
    } else if (countries.length >= 1) {
      setCountryLoading(false);
    }
    if (cat.length <= 0) {
      setCatIloading(true);
    } else if (cat.length >= 1) {
      setCatIloading(false);
    }

  }, [global, cat, countries]);

  const api_key = import.meta.env.VITE_API_KEY;

  useEffect(() => {

    fetch(`https://newsdata.io/api/1/latest?apikey=${api_key}&language=en`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setGlobal(data.results);
      });

  }, []);

  const handleCats = async (cati) => {
    fetch(`https://newsdata.io/api/1/latest?apikey=${api_key}&category=${cati}`)
      .then((resp) => resp.json())
      .then((data) => {
        setCat(data.results);

      })
  }
  const handleCountry = async (country) => {
    fetch(`https://newsdata.io/api/1/latest?apikey=${api_key}&country=${country}`)
      .then((resp) => resp.json())
      .then((data) => {
        setCountries(data.results);

      })
  }


  return (
    <>


      <div className={hide}>
        <div className="homeModal">
          <section className="remove timesIcon">
            <button className="exitIcon" onClick={() => {
              setHIde("hide")
            }}>&times;</button>
          </section>
          <div className="dropDown">

            <button className="cateButton country" onClick={() => {
              setOpenCountry(prev => !prev);
              setIsOpen(false)
            }}>Countries {openCountry ? "▲" : "▼"}</button>
            {openCountry && (
              <div className="dropdownContent">
                <button className="stack"
                  onClick={() => {
                    handleCountry("global");
                    setTitle("Global ");
                    setHIde("hide");
                    setDisplay(true);
                    setDisplayOptions(true);
                  }}
                >Global</button>
                <button className="stack"
                  onClick={() => {
                    handleCountry("us");
                    setTitle("United State");
                    setHIde("hide");
                    setDisplay(true);
                    setDisplayOptions(true);
                  }}
                >United State</button>
                <button className="stack"
                  onClick={() => {
                    handleCountry("ng");
                    setTitle("Nigeria");
                    setHIde("hide");
                    setDisplay(true);
                    setDisplayOptions(true);
                  }}
                >Nigeria</button>
                <button className="stack"
                  onClick={() => {
                    handleCountry("gb");
                    setTitle("United Kingdom");
                    setHIde("hide");
                    setDisplay(true);
                    setDisplayOptions(true);
                  }}
                >United Kingdom</button>
                <button className="stack"
                  onClick={() => {
                    handleCountry("ca");
                    setTitle("Canada");
                    setHIde("hide");
                    setDisplay(true);
                    setDisplayOptions(true);
                  }}
                >Canada</button>
                <button className="stack"
                  onClick={() => {
                    handleCountry("in");
                    setTitle("India");
                    setHIde("hide");
                    setDisplay(true);
                    setDisplayOptions(true);
                  }}
                >India</button>
                <button className="stack"
                  onClick={() => {
                    handleCountry("au");
                    setTitle("Australia");
                    setHIde("hide");
                    setDisplay(true);
                    setDisplayOptions(true);

                  }}
                >Australia</button>
                <button className="stack"
                  onClick={() => {
                    handleCountry("de");
                    setTitle("Germany");
                    setHIde("hide");
                    setDisplay(true);
                    setDisplayOptions(true);
                  }}
                >Germany</button>
                <button className="stack"
                  onClick={() => {
                    handleCountry("fr");
                    setTitle("France");
                    setHIde("hide");
                    setDisplay(true);
                    setDisplayOptions(true);
                  }}
                >France</button>
              </div>)}

            <button className="cateButton " onClick={() => {
              setIsOpen(prev => !prev);
              setOpenCountry(false);
            }}>Categories{isOpen ? "▲" : "▼"}</button>
            {isOpen && (
              <div className="dropdownContent">
                <button className="stack"
                  onClick={() => {
                    handleCats("top");
                    setTitle("business");
                    setHIde("hide");
                    setDisplay(true);
                    setDisplayOptions(false);
                  }}
                >Top</button>
                <button className="stack"
                  onClick={() => {
                    handleCats("environment");
                    setTitle("environment")
                    setHIde("hide");
                    setDisplay(true);
                    setDisplayOptions(false);
                  }}
                >Environment</button>
                <button className="stack" onClick={() => {
                  handleCats("politics");
                  setTitle("politics")
                  setHIde("hide")
                }}>Politics</button>
                <button className="stack"
                  onClick={() => {
                    ;

                    handleCats("business");
                    setTitle("Business")
                    setHIde("hide");
                    setDisplay(true);
                    setDisplayOptions(false);
                  }}
                >Business</button>
                <button className="stack"
                  onClick={() => {
                    handleCats("technology");
                    setTitle("Technology")
                    setHIde("hide");
                    setDisplay(true);
                    setDisplayOptions(false);
                  }}
                >Technology</button>
                <button className="stack"
                  onClick={() => {
                    handleCats("entertainment");
                    setTitle("Entertainment")
                    setHIde("hide");
                    setDisplay(true);
                    setDisplayOptions(false);
                  }}
                >Entertainment</button>
                <button className="stack"
                  onClick={() => {
                    handleCats("sport");
                    setTitle("Sports");
                    setHIde("hide");
                    setDisplay(true);
                    setDisplayOptions(false);
                  }}
                >Sports</button>
                <button className="stack"
                  onClick={() => {
                    handleCats("science");
                    setTitle("Science");
                    setHIde("hide");
                    setDisplay(true);
                    setDisplayOptions(false);
                  }}
                >Science</button>
                <button className="stack"
                  onClick={() => {
                    handleCats("health");
                    setTitle("Health");
                    setHIde("hide");
                    setDisplay(true);
                    setDisplayOptions(false);
                  }}
                >Health</button>


                <button className="stack"
                  onClick={() => {
                    handleCats("food");
                    setTitle("Food");
                    setHIde("hide");
                    setDisplay(true);
                    setDisplayOptions(false);
                  }}
                >Food</button>


              </div>)}


          </div>
          <div className="profileIcons">
            <div className="">
              <Link to="/profile">
                {/* <h3 className="section-title">Profile Picture</h3> */}
                <div className="avatar-upload-row">
                  <div className="pro files">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="1.4">
                      <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                    </svg>
                  </div>
                  <div className="upload-actions">
                    <h3 className="section-title sideProfile">Profile</h3>
                  </div>

                </div>
              </Link>
            </div>



          </div>
        </div>


      </div>





      <header class="site-header">
        <div class="container">
          <div class="header-content">

            <button class="menu-btn" aria-label="Menu" onClick={() => {
              setHIde("homeOverLay")
            }}>☰</button>
            <h1 class="logo">✦ newsFlow</h1>

          </div>
        </div>
      </header>
      {/* <div className={modaleShow}>
        <div className="modal">
          <section className="remove ">
            <button className="exit" onClick={() => {
              setModaleShow("hide");
            }}>&times;</button>
          </section>

          <div className="content">
            Hey... {name} 👋 Welcome To newsFlow
          </div>
        </div>
      </div> */}





      <main class="container">
        {name ? <h2> Hey... {name} 👋 Welcome To newsFlow</h2> : ""}


        {!display ? <>{loading ? <div className="loaders" > <PuffLoader size={80} color="blue" /> </div> :
          <div class="news-grids">
            {global?.map((news) => {
              return (
                <Link to={news.link} key={news.article_id}>
                  <article class="news-cards" >

                    <img class="card-image" src={news.image_url} alt={news.title} loading="lazy" />
                    <div class="card-content">
                      <h2 class="card-title">{news.title}</h2>
                      <p class="card-description">{news.description}</p>
                      <div class="card-meta">
                        <span class="source">{news.source_name}</span>
                        <span class="date" datetime="2026-03-20">Pub On: {news.pubDate}</span>


                      </div>
                      <br />
                      <div className="date">Language: <span class="source">{news.language}</span></div>


                    </div>
                  </article>
                </Link>

              )
            })}
          </div>} </> : <>


          {!displayOptions ? <>

            <h2 className="titles">{title}</h2>
            {catIloading ? <div className="loaders" > <PuffLoader size={80} color="blue" /> </div> :
              <div class="news-grids">
                {cat?.map((news) => {
                  return (
                    <Link to={news.link} key={news.article_id}>
                      <article class="news-cards" >

                        <img class="card-image" src={news.image_url} alt={news.title} loading="lazy" />
                        <div class="card-content">
                          <h2 class="card-title">{news.title}</h2>
                          <p class="card-description">{news.description}</p>
                          <div class="card-meta">
                            <span class="source">{news.source_name}</span>
                            <span class="date" datetime="2026-03-20">Pub On: {news.pubDate}</span>


                          </div>
                          <br />
                          <div className="date">Language: <span class="source">{news.language}</span></div>


                        </div>
                      </article>
                    </Link>

                  )
                })}

              </div>} </>

            :
            <>

              <h2 className="titles">{title}</h2>

              {countryLoading ? <div className="loaders" > <PuffLoader size={80} color="blue" /> </div> :
                <div class="news-grids">
                  {countries?.map((news) => {
                    return (
                      <Link to={news.link} key={news.article_id}>
                        <article class="news-cards" >

                          <img class="card-image" src={news.image_url} alt={news.title} loading="lazy" />
                          <div class="card-content">
                            <h2 class="card-title">{news.title}</h2>
                            <p class="card-description">{news.description}</p>
                            <div class="card-meta">
                              <span class="source">{news.source_name}</span>
                              <span class="date" datetime="2026-03-20">Pub On: {news.pubDate}</span>


                            </div>
                            <br />
                            <div className="date">Language: <span class="source">{news.language}</span></div>


                          </div>
                        </article>
                      </Link>
                    )
                  })}
                </div>} </>} </>}

      </main>

      <footer class="site-footer">
        <div class="container">
          <p>newsFlow · fresh headlines, always free</p>
        </div>
      </footer>

    </>
  )
}