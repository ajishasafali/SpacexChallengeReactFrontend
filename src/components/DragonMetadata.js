export const DragonMetadata = ({ dragonDetails }) => (
    <div className="card row">
        <img src="https://www.spacex.com/static/images/backgrounds/dragon_feature.webp" className="card-img-top" alt="..." />
        <div className="card-body" >
            
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h5>First Flown Dragon</h5>
                        <p>{dragonDetails.firstFlownDragon}</p>
                    </div>
                    <div className="col">
                        <h5>Number of Crew Dragons</h5>
                        <p>{dragonDetails.totalNumberOfCrewDragons}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h5>Heaviest Dragon</h5>
                        <p>{dragonDetails.heaviestDragon}</p>
                    </div>
                    <div className="col">
                        <h5>Heaviest Dragon Mass</h5>
                        <p>{dragonDetails.heaviestDragonMassInKg} kg</p>
                    </div>
                    <div className="col">
                        <h5>Total Deliverable Payload</h5>
                        <p>{dragonDetails.totalDeliverablePayloadMassInKg} kg</p>
                    </div>
                </div>
            </div>
            

        </div>
    </div>
)