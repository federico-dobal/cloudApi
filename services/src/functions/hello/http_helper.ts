const fetch = require('node-fetch');
import { IHttpResponse, IOutputResponse } from './types';


export const HTTP_OK = 200;
export const HTTP_NOT_ACCEPTABLE = 406;
export const HTTP_SERVER_ERROR = 500;

const SEARCH_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json?key=[key]&query=";
export async function searchText(text: string): Promise<IHttpResponse> {
    const url = SEARCH_URL + text;
    let output: IOutputResponse[];

    try {
        const res = await fetch(url);
        if (res.status == HTTP_OK) {
            const users: [any] = (await res.json())['results'];
            output = users.map(x => ({ 'name': x.name, 'location': x.geometry.location } as IOutputResponse));
            return { 'message': JSON.stringify(output), 'status': HTTP_OK } as IHttpResponse;
        } else {
            return { 'message': 'Dependent service unavailable, try later', 'status': HTTP_SERVER_ERROR } as IHttpResponse;
        }

    } catch (err) {
        console.log(err.message);
        return { 'message': 'Service unavailable', 'status': HTTP_SERVER_ERROR } as IHttpResponse;
    }
}