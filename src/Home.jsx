import { data, Link } from "react-router-dom";
import "./Home.css";
import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";

export function HomePage() {

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

  const api_key = "2a3a640ee7544f8739f8051956bb0a11";

  useEffect(() => {
    fetch(`https://gnews.io/api/v4/top-headlines?lang=en&token=${api_key}`)
      .then((resp) => resp.json())
      .then((data) => {
        setGlobal(data.articles);
      })

    console.log(data.articles);
  }, []);

  const handleCats = async (cati) => {
    fetch(`https://gnews.io/api/v4/top-headlines?category=${cati}&lang=en&token=${api_key}`)
      .then((resp) => resp.json())
      .then((data) => {
        setCat(data.articles);

      })
  }
  const handleCountry = async (country) => {
    fetch(`https://gnews.io/api/v4/top-headlines?country=${country}&token=${api_key}`)
      .then((resp) => resp.json())
      .then((data) => {
        setCountries(data.articles);

      })
  }


  return (
    <>

      <header class="site-header">
        <div class="container">
          <div class="header-content">

            <button class="menu-btn" aria-label="Menu" onClick={() => {
              setHIde("homeOverLay")
            }}>☰</button>
            <h1 class="logo">📰 newsFlow</h1>

          </div>
        </div>
      </header>

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
                    handleCats("general");
                    setTitle("General");
                    setHIde("hide");
                    setDisplay(true);
                    setDisplayOptions(false);
                  }}
                >General</button>
                <button className="stack"
                  onClick={() => {
                    handleCats("world");
                    setTitle("World")
                    setHIde("hide");
                    setDisplay(true);
                    setDisplayOptions(false);
                  }}
                >World</button>
                <button className="stack" onClick={() => {
                  handleCats("nations");
                  setTitle("Nations")
                  setHIde("hide")
                }}>Nation</button>
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
              </div>)}

            <button className="logOut">Log Out</button>
          </div>
        </div>
      </div>


      <main class="container">

        {!display ? <>{loading ? <div className="loaders" > <PuffLoader size={80} color="blue" /> </div> :
          <div class="news-grid">
            {global?.map((news) => {
              return (
                <Link to={news.url} key={news.id}>
                  <article class="news-card" >

                    <img class="card-image" src={news.image} alt={news.title} loading="lazy" />
                    <div class="card-content">
                      <h2 class="card-title">{news.title}</h2>
                      <p class="card-description">{news.description}</p>
                      <div class="card-meta">
                        <span class="source">{news.source?.name}</span>
                        <time class="date" datetime="2026-03-20">Published On: {news.publishedAt}</time>
                      </div>
                    </div>
                  </article>
                </Link>

              )
            })}
          </div>} </> : <>


          {!displayOptions ? <>

            <h1>{title}</h1>
            {catIloading ? <div className="loaders" > <PuffLoader size={80} color="blue" /> </div> :
              <div class="news-grid">
                {cat?.map((news) => {
                  return (
                    <Link to={news.url} key={news.id}>
                      <article class="news-card" >

                        <img class="card-image" src={news.image} alt={news.title} loading="lazy" />
                        <div class="card-content">
                          <h2 class="card-title">{news.title}</h2>
                          <p class="card-description">{news.description}</p>
                          <div class="card-meta">
                            <span class="source">{news.source?.name}</span>
                            <time class="date" datetime="2026-03-20">Published On: {news.publishedAt}</time>
                          </div>
                        </div>
                      </article>
                    </Link>

                  )
                })}

              </div>} </>

            :
            <>

              <h1>{title}</h1>

              {countryLoading ? <div className="loaders" > <PuffLoader size={80} color="blue" /> </div> :
                <div class="news-grid">
                  {countries?.map((news) => {
                    return (
                      <Link to={news.url} key={news.id}>
                        <article class="news-card" >

                          <img class="card-image" src={news.image} alt={news.title} loading="lazy" />
                          <div class="card-content">
                            <h2 class="card-title">{news.title}</h2>
                            <p class="card-description">{news.description}</p>
                            <div class="card-meta">
                              <span class="source">{news.source?.name}</span>
                              <time class="date" datetime="2026-03-20">Published On: {news.publishedAt}</time>
                            </div>
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