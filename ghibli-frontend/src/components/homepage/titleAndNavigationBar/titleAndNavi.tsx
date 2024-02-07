import "./titleAndNavi.css";

export interface ClickHandler {
  (event: React.MouseEvent<HTMLElement>): void;
}

interface Props {
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const TitleAndNavigationBar = ({ handleClick }: Props) => {
  return (
    <div className="titleAndNaviContainer">
      <div className="titleContainer">Studio Ghibli</div>
      <div className="naviContainer">
        <span onClick={handleClick}>Home</span>
        <span onClick={handleClick}>History</span>
        <span onClick={handleClick}>Movies</span>
        <span onClick={handleClick}>About Me</span>
      </div>
    </div>
  );
};

export default TitleAndNavigationBar;
