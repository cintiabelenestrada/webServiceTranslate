import { Component } from '@angular/core';
import { DireccionIpService } from '../../services/direccionIp.service';

@Component({
  selector: 'app-direccion-ip',
  standalone: true,
  imports: [],
  templateUrl: './direccion-ip.component.html',
  styleUrl: './direccion-ip.component.css'
})
export class DireccionIPComponent {
  constructor(private direccionIpService: DireccionIpService){
  }

  ObtenerIps(){
    this.direccionIpService.getDireccionesIP().subscribe(
      (data:any) => {
        console.log(data);
      },
      (error:any) => {
        console.log(error);
      } 
    );
  }
}
