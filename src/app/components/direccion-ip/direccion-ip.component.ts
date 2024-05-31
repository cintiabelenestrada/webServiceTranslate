import { Component } from '@angular/core';
import { DireccionIpService } from '../../services/direccionIp.service';
import { FormsModule } from '@angular/forms';
import { DatosIp } from '../../models/datos-ip';
import { Direccion } from '../../models/datosAdress';
import { log } from 'node:console';

@Component({
  selector: 'app-direccion-ip',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './direccion-ip.component.html',
})
export class DireccionIPComponent {
  direccionIP: string = "";
  datosIp!: DatosIp;
  addressDetails!: Direccion;
  constructor(private direccionIpService: DireccionIpService){
  }

  IngresarIp(){
    this.direccionIpService.getDireccionesIP(this.direccionIP).subscribe(
      (data:any) => {
        this.datosIp = new DatosIp(
          data.city, 
          data.country,
          data.latitude,
          data.longitude,
           {
            abbr: data.timezone.abbr,
            date: data.timezone.date,
            id: data.timezone.id,
            name: data.timezone.name,
            offset: data.timezone.offset,
            time: data.timezone.time
          });

        this.datosIp = data;
        console.log(this.datosIp);
        console.log(this.direccionIP);
        
        this.mostrarDireccion();
      },
      (error:any) => {
        console.log(error);
      } 
    );
  }

  mostrarDireccion() {
    this.direccionIpService.getLatitudeLongitude(this.datosIp.latitude, this.datosIp.longitude).subscribe(
      (data:any) => {
          console.log("data: ", JSON.stringify(data)); //1 muestro toda la info q devuelve la api
          console.log("data.Results[0]: ", JSON.stringify(data.Results[0])); // 2 muestro la info que yo necesito
          // creamos la variable y la modelamos
          this.addressDetails = data.Results[0];
          console.log("this.addressDetails ",this.addressDetails);
          // console.log("this.addressDetails ",JSON.stringify(this.addressDetails) );
             
        },
      (error:any) => {
        console.log(error);
      } 
    );
  }
}
