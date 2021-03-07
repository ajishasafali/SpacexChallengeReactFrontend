export const CrewMetadata = ({ crewDetails }) => (
    <div className="card row">
        <img src="https://www.spacex.com/static/images/backgrounds/human_spaceflight_feature.webp" className="card-img-top" alt="..." />
        <div className="card-body" >

            <div className="container">
                <div className="row">
                    <div className="col">
                        <h5>Active Crew Members</h5>
                        <p>{crewDetails.activeCrewFromList}</p>
                    </div>
                </div>
                <div className="row">
                    <h6>Number of crews per agency:</h6>
                </div>
                <div className="row">
                
                    {
                        
                        crewDetails.agencyStrengths.map((agencyStrength) => (
                            
                                <div className="col" key={`id${agencyStrength.agencyName}`}>
                                    <h5>{agencyStrength.agencyName}</h5>
                                    <p>{agencyStrength.numberOfCrew}</p>
                                </div>
                            
                        )

                        )
                    }
                </div>
               

            </div>


        </div>
    </div>
)