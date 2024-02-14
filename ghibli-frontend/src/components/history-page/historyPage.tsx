import "./historyPage.css";

const HistoryPage = () => {
  const founderImage = {
    backgroundImage: `url(${"https://news.mywaifulist.moe/wp-content/uploads/2021/01/animedad.jpg"})`,
    width: "400px",
    minHeight: "240px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
      <div className="historyPageContainer">
        <div className="founderImageAndAboutGhibli">
          <div className="founderImageContainer">
            <div style={founderImage}></div>
            <div className="nameContainer">
              <span>Hayao Miyazaki</span>
              <span>Studio Ghibli Founder</span>
            </div>
          </div>
          <div className="AboutGhibliStudioContainer">
            <div className="aboutTitle">About Studio Ghibli</div>
            <div>
              Studio Ghibli was founded in 1985 by animated film directors Isao
              Takahata and Hayao Miyazaki, and has produced twenty-two
              feature-length films. Most Studio Ghibli films ranked number one
              at the box office in Japan in the year in which they were
              released. SPIRITED AWAY, directed by Hayao Miyazaki and released
              in 2001, is the all-time highest grossing film in Japan, earning
              over 30 billion yen at the box office.
            </div>
            <div>
              Studio Ghibli films have garnered numerous awards and critical
              acclaim from film critics and animation specialists around the
              world. SPIRITED AWAY was awarded the Golden Bear as the Best
              Feature Film at the 2002 Berlin International Film Festival and
              won the 2002 Academy Award for Best Animated Feature Film. In
              October 2001, Studio Ghibli, in conjunction with The Tokuma
              Memorial Cultural Foundation for Animation, founded the Ghibli
              Museum, Mitaka, designed by Hayao Miyazaki.
            </div>
            <div>
              THE WIND RISES (2013),THE TALE OF THE PRINCESS KAGUYA (2013), WHEN
              MARNIE WAS THERE (2014) and THE RED TURTLE (2016), the last four
              films released by Studio Ghibli, have earned the studio four
              consecutive Academy Award nominations for Best Animated Feature
              Film. The studio is currently working on a new production.
            </div>
            <a href="https://w.wiki/3hoP" target="_blank">
              More Details
            </a>
          </div>
        </div>
      </div>
      <div className="ghibliStudioPhotos">
        <div className="historyImageContainer">
          <img
            className="HistoryImage"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Studio_Ghibli_studio_3.jpg/800px-Studio_Ghibli_studio_3.jpg"
            alt="Studio Ghibli"
          />
          <div>Studio Ghubli - Koganei, Tokyo</div>
        </div>
        <div className="historyImageContainer">
          <img
            className="HistoryImage"
            src="https://i.pinimg.com/564x/b9/bf/95/b9bf9543f5e60973d6066e21492e7618.jpg"
            alt="Hayao Miyazaki's sketch"
          />
          <div>Some sketches from Spirited Away Movie</div>
        </div>
        <div className="historyImageContainer">
          <img
            className="HistoryImage"
            src="https://i.pinimg.com/564x/34/b5/38/34b538f256da24978db124df622df3a5.jpg"
            alt="ghibli Museum"
          />
          <div>The Ghibli Museum in Mitaka, Japan</div>
        </div>
      </div>
      <div className="creater">
        This website is created by{" "}
        <a href="https://github.com/KhantMinTuKha" target="_blank">
          KhantMinTukha
        </a>
      </div>
    </div>
  );
};

export default HistoryPage;
