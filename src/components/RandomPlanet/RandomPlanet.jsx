import React, { Component } from "react";
import SwapiService from "../../services/SWAPIServices";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Spinner from "../Spinner/Spinner";

import "./RandomPlanet.css";

export default class RandomPlanet extends Component {
    constructor() {
        super();
        this.updatePlanet();
    }

    state = {
        planet: {},
        loading: true,
        error: false
    };

    SwapiService = new SwapiService();

    onPlanetLoaded = (planet) => {
        this.setState({ planet, loading: false });
    };

    onErrorMessage = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet() {
        // const id = Math.floor(Math.random() * 25 + 2);
        const id = 12000;
        this.SwapiService.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onErrorMessage);
    }

    render() {
        const { planet, loading, error } = this.state;

        const working = !(loading || error)

        const errorMessage = error ? <ErrorMessage /> : null 
        const spinner = loading ? <Spinner /> : null;
        const content = working ? <PlanetView planet={planet} /> : null;

        return (
            <div className="random-planet jumbotron rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}

const PlanetView = ({ planet }) => {
    const { id, planetName, population, rotation, diameter } = planet;

    return (
        <React.Fragment>
            <img
                className="planet-image"
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                alt=""
            />
            <div>
                <h4>{planetName}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population:</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period:</span>
                        <span>{rotation}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter:</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};
