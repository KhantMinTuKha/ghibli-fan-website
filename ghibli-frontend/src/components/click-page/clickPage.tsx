import { Data } from "../homepage/imageSlider/imageSlider";
import { ClickHandler } from "../homepage/titleAndNavigationBar/titleAndNavi";
import "./clickPage.css";

interface Props {
  ghibliData: Data[];
  isClicked: boolean;
  handleClicked: (isClicked: boolean) => void;
  changeClick: ClickHandler;
}

const ClickPage = ({
  ghibliData,
  isClicked,
  handleClicked,
  changeClick,
}: Props) => {
  return <div>Hello click page</div>;
};

export default ClickPage;
