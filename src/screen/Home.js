import './Home.css'
const Home= () => {
   
    return (
        <div className='home-container'>
            <>{/* Header  Section*/}</>
           <header
  className="container"
  style={{ maxWidth: 1600, minWidth: 500 }}
  id="home"
>
  <img
    className="w3-image"
    src="https://www.w3schools.com/w3images/hamburger.jpg"
    alt="Hamburger Catering"
    width={1600}
    height={800}
  />
  <div className="w3-display-bottomleft w3-padding-large w3-opacity">
    <h1 className="w3-xxlarge">Le Catering</h1>
  </div>
</header>
<>
  {/* Page content */}
  <div className="w3-content" style={{ maxWidth: 1100 }}>
    {/* About Section */}
    <div className="w3-row w3-padding-64" id="about">
      <div className="w3-col m6 w3-padding-large w3-hide-small">
        <img
          src="https://www.w3schools.com/w3images/tablesetting2.jpg"
          className="w3-round w3-image w3-opacity-min"
          alt="Table Setting"
          width={600}
          height={750}
        />
      </div>
      <div className="w3-col m6 w3-padding-large">
        <h1 className="w3-center">About Catering</h1>
        <br />
        <h5 className="w3-center">Tradition since 1889</h5>
        <p className="w3-large">
          The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor
          sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only
          use <span className="w3-tag w3-light-grey">seasonal</span>{" "}
          ingredients.
        </p>
        <p className="w3-large w3-text-grey w3-hide-medium">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum consectetur adipiscing
          elit, sed do eiusmod temporincididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  </div>
</>     
        </div>
    )
}
export default Home;