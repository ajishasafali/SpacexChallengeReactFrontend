import { Component, Fragment } from "react";
import './App.css';
import { DragonModel } from "./components/DragonModel";
import { CrewModel } from "./components/CrewModel";
import { DragonMetadata } from "./components/DragonMetadata";
import { CrewMetadata } from "./components/CrewMetaData";

class App extends Component {
    constructor() {
        super();

        this.state = {
            dragonDetails: {
                dragons: [],
                firstFlownDragon: '',
                heaviestDragon: '',
                heaviestDragonMassInKg: '',
                totalDeliverablePayloadMassInKg: '',
                totalNumberOfCrewDragons: ''
            },
            companyInfo: {},
            crewDetails: {
                activeCrewFromList: '',
                agencyStrengths: [],
                crewMembers: []

            }
        }

    }

    componentDidMount() {
        fetch("http://sie-space-x-challenge-rest-service-env.eba-32pahimi.eu-central-1.elasticbeanstalk.com/api/v1/dragons-details")
            .then((response) => response.json())
            .then(dragonDetails => this.setState({ dragonDetails: dragonDetails }))
        fetch("http://sie-space-x-challenge-rest-service-env.eba-32pahimi.eu-central-1.elasticbeanstalk.com/api/v1/company-info")
            .then((response) => response.json())
            .then(companyInfo => this.setState({ companyInfo: companyInfo }))
        fetch("http://sie-space-x-challenge-rest-service-env.eba-32pahimi.eu-central-1.elasticbeanstalk.com/api/v1/crew-details")
            .then((response) => response.json())
            .then(crewDetails => this.setState({ crewDetails: crewDetails }))
    }

    render() {
        return (

            <div className="container">
                <h1>SpaceX Insights</h1>
                <div className="container-lg home">
                    
                        <div className="row">
                            <div className="col">
                                <span>CEO: </span> <span>{this.state.companyInfo.ceo}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <span>{this.state.companyInfo.summary}</span>
                            </div>
                        </div>
                        
                    
                    
                    
                </div>
                
                <Fragment>
                <div className="container overflow-hidden">
                    <div className="row gx-5">
                        <div className="col">
                            <div className="p-3 border bg-light">                                
                                <DragonMetadata dragonDetails={this.state.dragonDetails}></DragonMetadata>
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dragon-model">
                                    Dragons
                                </button>

                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3 border bg-light">
                                <CrewMetadata crewDetails={this.state.crewDetails}></CrewMetadata>
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#crew-model">
                                    Crew
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            <DragonModel dragonDetails={this.state.dragonDetails}></DragonModel>
            <CrewModel crewDetails={this.state.crewDetails}></CrewModel>

                
               

                </Fragment>
            </div>



        );
    }
}

export default App;
