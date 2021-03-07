import { CrewCard } from "./CrewCard";


export const CrewModel = ({ crewDetails }) => (
    <div className="modal fade" id="crew-model" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Crew</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="container">                                            
                        <div className="col">
                            {crewDetails.crewMembers.map((crew) => (                                
                                    <CrewCard crew={crew} key={`id${crew.id}`} />   
                                

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)