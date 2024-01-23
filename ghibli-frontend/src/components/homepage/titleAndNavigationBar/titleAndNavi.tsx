import "./titleAndNavi.css";

const TitleAndNavigationBar = () => {
  return (
    <div className="titleAndNaviContainer">
      <div className="titleContainer">Ghibli Studio</div>
      <div className="naviContainer">
        <span>Home</span>
        <span>History</span>
        <span>Movies</span>
        <span>About Me</span>
      </div>
    </div>
  );
};

export default TitleAndNavigationBar;
