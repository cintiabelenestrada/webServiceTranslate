export class DatosIp {
    city: string;
    country: string;
    latitude: number;
    longitude: number;
    timezone: {
        abbr: string;
        date: string;
        id: string;
        name: string;
        offset: string;
        time: string;
    };
    
    constructor(
        city: string, 
        country: string, 
        latitude: number, 
        longitude: number,
        timezone: {
            abbr: string;
            date: string;
            id: string;
            name: string;
            offset: string;
            time: string;
      }) 
      { 
        this.city = city; 
        this.country = country;
        this.timezone = timezone;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
