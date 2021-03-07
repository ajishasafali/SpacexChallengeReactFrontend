export const Model = ({ dragon }) => (
    <div className="modal fade" id={`popup${dragon.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog model-lg">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{dragon.name}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div id={`carousal${dragon.id}controls`} class="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={dragon.flickrImages[1]} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={dragon.flickrImages[2]} className="d-block w-100" alt="..." />
                            </div>
                            
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target={`#carousal${dragon.id}controls`} data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target={`#carousal${dragon.id}controls`} data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div class="container">
  <div class="row">
    <div class="col">
      <h4>Height</h4>
      <p>{dragon.heightWTrunk.meters} m</p>
    </div>
    <div class="col">
        <h4>Mass</h4>
        <p>{dragon.dryMassKg} kg</p>
    </div>
  </div>
  <div class="row">
    <div class="col">
     <h4>Payload Mass</h4>
     <p>{dragon.launchPayloadMass.kg} kg</p>
    </div>
    <div class="col">
        <h4>Orbit Duration</h4>
        <p>{dragon.orbitDurationYr} years</p>
    </div>
  </div>
</div>



                </div>
            </div>
        </div>



    </div>

    

)