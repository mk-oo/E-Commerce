import React from "react";


const Slider = () => {
    return ( 
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://th.bing.com/th/id/OIP.O04cAqie6Wbqlko-G1VsQAHaFF?pid=ImgDet&rs=1" className="d-block w-100 h-40" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://th.bing.com/th/id/R.3d48f65f54d9c93e1aa3012dd974a228?rik=agZF0emrOTY5qw&pid=ImgRaw&r=0" className="d-block w-100 h-40" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://th.bing.com/th/id/OIP.CoMJSsI9jhTQj3_z1v1cUgHaDq?pid=ImgDet&w=1024&h=507&rs=1" className="d-block w-100 h-40" alt="..."/>
    </div>
  </div>
  
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        

     );
}
 
export default Slider;