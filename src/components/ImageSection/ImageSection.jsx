import PriceCard from "./PriceCard/PriceCard";

function ImageSection() {
  return (
    <div className="image-section">
      <div className="buttons-wrapper">
        <button className="image-section-button">Log in</button>
        <button className="image-section-button quote-button">
          Get a quote
        </button>
      </div>
      <PriceCard />
      <div className="image-wrapper">
        <img
          src="https://freepngimg.com/save/27644-family-transparent/582x825"
          height={700}
          className="card-image"
        />
      </div>
    </div>
  );
}

export default ImageSection;
