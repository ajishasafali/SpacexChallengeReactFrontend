export const CrewCard = ({ crew }) => (
    <div className="card row" key={`id${crew.id}`}>
        <img src={crew.image} className="card-img-top" alt="..." />
        <div className="card-body" >
            {/* <h5 className="card-title">{crew.name}</h5> */}
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h4>Name</h4>
                        <p>{crew.name}</p>
                    </div>
                    <div className="col-sm">
                        <h4>Agency</h4>
                        <p>{crew.agency}</p>
                    </div>

                </div>
            </div>


        </div>
    </div>
)