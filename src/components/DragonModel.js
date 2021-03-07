import { DragonCard } from "./DragonCard";

export const DragonModel = ({ dragonDetails }) => (
    <div className="modal fade" id="dragon-model" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Dragons</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="container">                                            
                        <div className="col">
                            {dragonDetails.dragons.map((dragon) => (                                
                                    <DragonCard dragon={dragon} key={`id${dragon.id}`}/>                  
                                

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)