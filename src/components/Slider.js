import Image1 from './images/image-1.jpeg'
import Image2 from './images/image-1.jpeg'

import Image3 from './images/image-1.jpeg'
import './Slider.css'

function Slider() {
  return (
    <>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100 height-500" src={Image1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 height-500" src={Image2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 height-500" src={Image3} alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}

export default Slider;
