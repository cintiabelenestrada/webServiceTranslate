import { Component } from '@angular/core';
import { DireccionIpService } from '../../services/direccionIp.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-direccion-ip',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './direccion-ip.component.html',
})
export class DireccionIPComponent {
  direccionIP: string = "";

  constructor(private direccionIpService: DireccionIpService){
  }

  IngresarIp(){
    this.direccionIpService.getDireccionesIP(this.direccionIP).subscribe(
      (data:any) => {
        console.log(this.direccionIP);
        console.log(data);
      },
      (error:any) => {
        console.log(error);
      } 
    );
  }
}
