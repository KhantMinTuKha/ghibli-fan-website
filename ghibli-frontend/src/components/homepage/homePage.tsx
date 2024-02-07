import ImageSlider from "./imageSlider/imageSlider";
import { Data } from "./imageSlider/imageSlider";
import PopularToday from "./popularTodayBar/popularToday";
import TitleAndNavigationBar, {
  ClickHandler,
} from "./titleAndNavigationBar/titleAndNavi";

interface Props {
  ghibliData: Data[];
  handleClick: ClickHandler;
}

const HomePage = ({ ghibliData, handleClick }: Props) => {
  return (
    <div>
      <TitleAndNavigationBar handleClick={handleClick} />
      <ImageSlider ghibliData={ghibliData} />
      <PopularToday ghibliData={ghibliData} />
    </div>
  );
};

export default HomePage;
