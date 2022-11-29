import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import { slickDot } from "../page-demo/script";
import { Link } from "react-router-dom";
import Scrollspy from "react-scrollspy";
import ScrollToTop from "react-scroll-up";
import Particles from "react-particles-js";
import { FiChevronUp, FiX, FiMenu, FiCheck } from "react-icons/fi";
import ServiceList from "../elements/service/ServiceList";
import CounterTwo from "../elements/counters/CounterTwo";
import Testimonial from "../elements/Testimonial";
import Team from "../elements/Team";
import BlogContent from "../elements/blog/BlogContent";
import BrandTwo from "../elements/BrandTwo";
import FooterTwo from "../component/footer/FooterTwo";
import Contact from "../elements/contact/ContactTwo";
import Helmet from "../component/common/Helmet";
import AboutThree from "../component/HomeLayout/homeOne/AboutThree";
const BookReadyPro_img = (
  <img
    src="/assets/images/portfolio/interior/bookready.jpeg"
    alt="React Creative Agency"
  />
);
const EYEdentify_image = (
  <img
    src="/assets/images/portfolio/interior/portfolio-12.jpg"
    alt="React Creative Agency"
  />
);

const anamehani_img = (
  <img src="/assets/images/portfolio/interior/mehani.jpeg" alt="ana mehani" />
);

const batota_img = (
  <img src="/assets/images/portfolio/interior/batota.jpeg" alt="batota" />
);

const botatos_img = (
  <img src="/assets/images/portfolio/interior/botatos.jpeg" alt="botatos" />
);

const brandsnest_img = (
  <img
    src="/assets/images/portfolio/interior/brandsnest.jpeg"
    alt="brandsnest"
  />
);

const wipo_img = (
  <img
    src="/assets/images/portfolio/interior/wipo (1).png"
    alt="Wipo organization"
  />
);

const Portfolio_image3 = (
  <img
    src="/assets/images/portfolio/interior/portfolio-13.jpg"
    alt="React Creative Agency"
  />
);
const Portfolio_image4 = (
  <img
    src="/assets/images/portfolio/interior/portfolio-14.jpg"
    alt="React Creative Agency"
  />
);

const SlideList = [
  {
    textPosition: "text-center",
    category: "",
    title: "Monster Graphics Inc.",
    description: "We Scale Because we Care.",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
];

const PortfolioList = [
  {
    image: BookReadyPro_img,
    category: "",
    title: "BookReadyPro",
    link: "https://www.bookreadypro.com/",
    description: `
    Book Ready Pro assists accountants and bookkeepers for tax preparation`,
  },

  {
    image: batota_img,
    category: "",
    title: "EbnBatota",
    link: "",
    description:
      "Ebn-batota is a double sided platform where travel enthusiasts meet with agencies.",
  },
  {
    image: EYEdentify_image,
    category: "",
    title: "Eye Dentify",
    link: "https://extreme.stanford.edu/projects/eye-dentify/",
    description:
      "It's an innovative wearable device to track patients in high-volume surgical cataract campaigns in Ghana.",
  },
  {
    image: anamehani_img,
    category: "",
    title: "Ana Mehani",
    link: "https://www.anamehani.com/",
    description:
      "Provide a helpful service that connects you with verified home maintenance service providers",
  },
  {
    image: brandsnest_img,
    category: "",
    title: "The Brandsnest",
    link: "",
    description:
      "A marketplace for selling and shipping products from the US to Egypt.",
  },
  {
    image: wipo_img,
    category: "",
    title: "TMCA",
    link: "",
    description: "An efficient tool for trademarks analysis.",
  },
  {
    image: botatos_img,
    category: "",
    title: "Potatocam",
    link: "",
    description:
      "Our native android application enables portrait mode in mobiles with a single camera.",
  },
  // {
  //   image: Portfolio_image3,
  //   category: "Company",
  //   title: "PostMyProject",
  //   link: "",
  //   description:
  //     "Online website that saves customers and contractors time and money by offering an online bidding platform to improve the service bidding process. ",
  // },
  // {
  //   image: Portfolio_image3,
  //   category: "Company",
  //   title: "TaxRabbit",
  //   link: "",
  //   description:
  //     "TaxRabbit automates the process of submitting the VAT Tax reports to the Lebanese Ministry of finances website.",
  // },
  // {
  //   image: Portfolio_image3,
  //   category: "Company",
  //   title: "Calivita",
  //   link: "https://callvita.com/",
  //   description:
  //     "Callvita is offering a variety of products to provide a manifested connection between both any service provider and an End user.",
  // },

  // {
  //   image: Portfolio_image3,
  //   category: "Company",
  //   title: "Semantic SEGMENTATION FOR AERIAL VIEWS",
  //   link: "",
  //   description:
  //     "For solving the segmentation problem for objects in aerial views in the available iSAID dataset we represent a network.",
  // },
  // {
  //   image: Portfolio_image3,
  //   category: "Company",
  //   title: "Guidiza Chatbot",
  //   link: "",
  //   description:
  //     "Creating a customized tour guide chatbot, to help tourists find out more information.",
  // },
  // {
  //   image: Portfolio_image3,
  //   category: "Company",
  //   title: "MEMS BASED AIR QUALITY ANALYZER",
  //   link: "",
  //   description:
  //     "Determining  gas leakage in factories and monitoring work environment quality.",
  // },
];

class HomeParticles extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    this.stickyHeader = this.stickyHeader.bind(this);

    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }
  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }
  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }
  stickyHeader() {}

  render() {
    var namesItemOne = [
      "The Philosophy Of business analytics",
      "Fast-Track Your business",
      "Lies And Damn Lies About business",
    ];

    const PostList = BlogContent.slice(0, 5);

    window.addEventListener("scroll", function () {
      var value = window.scrollY;
      if (value > 100) {
        document.querySelector(".header--fixed").classList.add("sticky");
      } else {
        document.querySelector(".header--fixed").classList.remove("sticky");
      }
    });

    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }

    return (
      <Fragment>
        <Helmet pageTitle="Monster Graphics" />

        {/* Start Header Area  */}
        <header className="header-area formobile-menu header--fixed default-color">
          <div className="header-wrapper" id="header-wrapper">
            <div className="header-left">
              <div className="logo">
                <a href="/">
                  <img
                    className="logo-1"
                    src="/assets/images/logo/logo-light.png"
                    alt="Logo Images"
                  />
                  <img
                    className="logo-2"
                    src="/assets/images/logo/logo-light.png"
                    alt="Logo Images"
                  />
                </a>
              </div>
            </div>
            <div className="header-right">
              <nav className="mainmenunav d-lg-block">
                <Scrollspy
                  className="mainmenu"
                  items={["home", "service", "about", "portfolio", "contact"]}
                  currentClassName="is-current"
                  offset={-200}
                >
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#service">Services</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#portfolio">Projects</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </Scrollspy>
              </nav>
              {/* Start Humberger Menu  */}
              <div className="humberger-menu d-block d-lg-none pl--20 pl_sm--10">
                <span
                  onClick={this.menuTrigger}
                  className="menutrigger text-white"
                >
                  <FiMenu />
                </span>
              </div>
              {/* End Humberger Menu  */}
              <div className="close-menu d-block d-lg-none">
                <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                  <FiX />
                </span>
              </div>
            </div>
          </div>
        </header>
        {/* End Header Area  */}

        {/* Start Slider Area   */}
        <div
          className="slider-activation slider-creative-agency with-particles"
          id="home"
        >
          <div className="frame-layout__particles">
            <Particles
              params={{
                particles: {
                  number: {
                    value: 100,
                  },
                  size: {
                    value: 3,
                  },
                },
                interactivity: {
                  events: {
                    onhover: {
                      enable: true,
                      mode: "repulse",
                    },
                  },
                },
              }}
            />
          </div>
          <div className="im_modern_slider bg_image bg_image--27 ">
            {SlideList.map((value, index) => (
              <div
                className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center"
                key={index}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className={`inner ${value.textPosition}`}>
                        {value.category ? <span>{value.category}</span> : ""}
                        {value.title ? (
                          <h1 className="title">{value.title}</h1>
                        ) : (
                          ""
                        )}
                        {value.description ? (
                          <p className="description_style-2">
                            {value.description}
                          </p>
                        ) : (
                          ""
                        )}
                        {value.buttonText ? (
                          <div className="slide-btn">
                            <a
                              className="btn-default btn-large"
                              href="#contact"
                            >
                              {value.buttonText}
                            </a>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End Slider Area   */}

        {/* 

                const description2 = "Our services at a glance:";

const namesItemOne2 = [
  "We use the latest technologies such as Angular, Java, Swift, Groovy & Grails, MEAN, Python, React Native, Flutter, Phone-gap, Titanium Appcelerator, Ionic, Cordova, and Open Source Solutions (Magento, WordPress, Drupal, OpenCart, Shopify, etc.). In addition, we use leading frameworks like ASP.NET MVC, CakePHP, Laravel, Yii, Django, RoR, etc. We are skilled at developing applications for iPhone, Android, Windows Mobile, Tablets (both native applications as well as cross-platform technologies such as Xamarin and ReactNative).",
];

// Our project portfolio includes IT and Marketing solutions for industries like Automobiles, Aviation, Health and Fitness, Fin-tech, Pharmacy and Medicines, Real Estate, Information Technology, Law, Travel and Hospitality, Finance, Music, Computers and Hardware, Business and Services, and Home Interiors.


*/}
        {/* Start Service Area  */}
        <div
          className="service-area creative-service-wrapper ptb--120 bg_color--1"
          id="service"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12">
                <div className="section-title text-left mb--30">
                  <span className="subtitle">What we can do for you</span>
                  <h2 className="title">Our services at a glance</h2>
                  <p className="description"></p>
                  <ul className="list-style--1">
                    {[
                      `We use the latest technologies such as React, Angular, Java,
                        Swift, Python, Titanium Appcelerator, Ionic, Cordova, and Open
                        Source Solutions`,
                      `We use leading frameworks like
                        ASP.NET MVC, CakePHP, Laravel, Yii, Django, RoR, etc.`,
                      `We are skilled at developing Mobile Apps (Native and cross-platform) using Flutter, Xamarin and
                        ReactNative.`,
                    ].map((name, index) => {
                      return (
                        <li key={index}>
                          <FiCheck /> {name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="row creative-service">
              <div className="col-lg-12">
                <ServiceList
                  item="6"
                  column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End Service Area  */}

        {/* Start About Area */}
        <div className="about-area ptb--120 bg_color--5" id="about">
          <AboutThree />
        </div>
        {/* End About Area */}

        {/* Start Portfolio Area */}
        <div
          className="portfolio-area pt--120 pb--140 bg_color--1"
          id="portfolio"
        >
          <div className="rn-slick-dot">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-left mb--30 mb_sm--0">
                    <span className="subtitle">Our project</span>
                    <h2 className="title">Some of our Recent Works</h2>
                    <p className="description">
                      Our project portfolio includes IT and Marketing solutions
                      for industries like Automobiles, Aviation, Health and
                      Fitness, Fin-tech, Pharmacy and Medicines, Real Estate,
                      Information Technology, Law, Travel and Hospitality,
                      Finance, Music, Computers and Hardware, Business and
                      Services, and Home Interiors.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                {PortfolioList.map((value, index) => (
                  <div className="col-lg-6 col-sm-6 col-12 mt--30" key={index}>
                    <div className="im_portfolio">
                      <div className="thumbnail_inner">
                        <div className="thumbnail">
                          <Link to={{ pathname: value.link }} target="_blank">
                            {value.image}
                          </Link>
                        </div>
                      </div>
                      <div className="content">
                        <div className="inner">
                          <div className="portfolio_heading">
                            <div className="category_list">
                              <Link
                                to={{ pathname: value.link }}
                                target="_blank"
                              >
                                {value.category}
                              </Link>
                            </div>
                            <h4 className="title">
                              <Link
                                to={{ pathname: value.link }}
                                target="_blank"
                              >
                                {value.title}
                              </Link>
                            </h4>
                          </div>
                          <div className="portfolio_hover">
                            <p>{value.description}</p>
                          </div>
                        </div>
                      </div>
                      <Link
                        className="transparent_link"
                        to={{ pathname: value.link }}
                        target="_blank"
                      ></Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* End Portfolio Area */}

        {/* Start CounterUp Area */}
        {/* <div className="rn-counterup-area pt--140 p pb--110 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle">Experts growts</span>
                  <h2 className="title">Our Company Growth</h2>
                </div>
              </div>
            </div>
            <CounterTwo />
          </div>
        </div> */}
        {/* End CounterUp Area */}

        {/* Start Team Area  */}
        {/* <div className="rn-team-area ptb--120 bg_color--1" id="team">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-left mb--25 mb_sm--0">
                  <span className="subtitle">Our Experts</span>
                  <h2 className="title">Skilled Team</h2>
                  <p className="description">
                    There are many variations of passages of Lorem Ipsum
                    available, <br /> but the majority have suffered alteration.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <Team column="col-lg-4 col-md-6 col-sm-6 col-12" />
            </div>
          </div>
        </div> */}
        {/* End Team Area  */}

        {/* Start Testimonial Area */}
        {/* <div
          className="rn-testimonial-area bg_color--5 ptb--120"
          id="testimonial"
        >
          <div className="container">
            <Testimonial />
          </div>
        </div> */}
        {/* End Testimonial Area */}

        {/* Start Contact Us */}
        <div className="rn-contact-us ptb--120 bg_color--5" id="contact">
          <Contact />
        </div>
        {/* End Contact Us */}

        {/* Start Brand Area */}
        {/* <div className="rn-brand-area bg_color--1 ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <BrandTwo />
              </div>
            </div>
          </div>
        </div> */}
        {/* End Brand Area */}

        {/* Start Footer Style  */}
        <FooterTwo />
        {/* End Footer Style  */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
      </Fragment>
    );
  }
}
export default HomeParticles;
