import "./imageSlider.css";

const ImageSlider = () => {
  const imageSlider = {
    backgroundImage: `url(${"https://i.pinimg.com/564x/85/32/f5/8532f538c5f92302925c91cd4109b995.jpg"})`,
    backgroundRepeat: "no-repeat",
    maxWidth: "500px",
    height: "300px",
    backgroundSize: "contain",
  };

  return (
    <div className="imageSliderContainer">
      <div className="imageSlider" style={imageSlider}></div>;
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9O-JGh4e2Mk?si=oA9v3431341mur8_"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ImageSlider;
