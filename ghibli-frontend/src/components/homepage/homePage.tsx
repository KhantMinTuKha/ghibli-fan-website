import ImageSlider from "./imageSlider/imageSlider";
import { Data } from "./imageSlider/imageSlider";
import PopularToday from "./popularTodayBar/popularToday";
import TitleAndNavigationBar, {
  ClickHandler,
} from "./titleAndNavigationBar/titleAndNavi";

interface Props {
  ghibliData: Data[];
  handleClick: ClickHandler;
  HandleClicked: (isClicked: boolean) => void;
}

const HomePage = ({ ghibliData, handleClick, HandleClicked }: Props) => {
  return (
    <div>
      <TitleAndNavigationBar handleClick={handleClick} />
      <ImageSlider ghibliData={ghibliData} handleClicked={HandleClicked} />
      <PopularToday ghibliData={ghibliData} />
    </div>
  );
};

export default HomePage;
