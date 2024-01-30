import ImageSlider from "./imageSlider/imageSlider";
import TitleAndNavigationBar from "./titleAndNavigationBar/titleAndNavi";
import { Data } from "./imageSlider/imageSlider";
import PopularToday from "./popularTodayBar/popularToday";

interface Props {
  ghibliData: Data[];
}

const HomePage = ({ ghibliData }: Props) => {
  return (
    <div>
      <TitleAndNavigationBar />
      <ImageSlider ghibliData={ghibliData} />
      <PopularToday ghibliData={ghibliData} />
    </div>
  );
};

export default HomePage;
