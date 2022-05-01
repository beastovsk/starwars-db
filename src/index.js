import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

class SwapiService {
    apiURL = "https://swapi.dev/api";

    async getResorce(url) {
        const response = await fetch(`${this.apiURL}${url}`);

        if (!response.ok) {
            throw new Error(
                `Could not to get a data from ${url}` +
                    `, recieved status: ${response.status}`
            );
        }
        return response.json();
    }

    getAllPeople() {
        const response = this.getResorce(`/people/`);
        return response.results;
    }
    getPerson(id) {
        return this.getResorce(`/people/${id}`);
    }
}

const root = createRoot(document.getElementById("root"));
root.render(<h1>Hello world</h1>);
