interface ILocation {
    lat: string;
    lng: string;
}

export interface IOutputResponse {
    name: string;
    location: ILocation;
}

export interface IHttpResponse {
    message: string;
    status: number;
}
