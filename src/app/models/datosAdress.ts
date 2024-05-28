export class Direccion {
  address: string;
  addressNumber: string;
  city: string;
  country: string;
  region: string;
  subregion: string;

  constructor(
    address: string,
    addressNumber: string,
    city: string,
    country: string,
    region: string,
    subregion: string
  ) {
    this.address = address;
    this.addressNumber = addressNumber;
    this.city = city;
    this.country = country;
    this.region = region;
    this.subregion = subregion;
  }
}