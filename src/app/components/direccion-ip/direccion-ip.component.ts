import { Component } from '@angular/core';
import { DireccionIpService } from '../../services/direccionIp.service';
import { FormsModule } from '@angular/forms';
import { DatosIp } from '../../models/datos-ip';

@Component({
  selector: 'app-direccion-ip',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './direccion-ip.component.html',
})
export class DireccionIPComponent {
  direccionIP: string = "";
  datosIp!: DatosIp;
  
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
      },
      (error:any) => {
        console.log(error);
      } 
    );
  }
}
