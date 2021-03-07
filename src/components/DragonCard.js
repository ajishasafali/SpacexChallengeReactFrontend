export const DragonCard = ({ dragon }) => (
    <div className="card row" key={`id${dragon.id}`}>
        <img src={dragon.flickrImages[1]} className="card-img-top" alt="..." />
        <div className="card-body" >
            <h5 className="card-title">{dragon.name}</h5>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h4>Height</h4>
                        <p>{dragon.heightWTrunk.meters} m</p>
                    </div>
                    <div className="col-sm">
                        <h4>Weight</h4>
                        <p>{dragon.dryMassKg} kg</p>
                    </div>
                    <div className="col-sm">
                        <h4>First flight</h4>
                        <p>{dragon.firstFlight}</p>
                    </div>
                </div>
            </div>
            <p className="card-text">{dragon.description}</p>

        </div>
    </div>
)