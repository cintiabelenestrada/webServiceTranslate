export class DatosIp {
    city: string;
    country: string;
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
    }
}
