import axios from "axios";

export const api = axios.create({
	baseURL: "https://api-meli-test-front-vizoni.herokuapp.com/",
});
