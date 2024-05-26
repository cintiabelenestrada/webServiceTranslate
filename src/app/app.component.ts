import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DireccionIPComponent } from "./components/direccion-ip/direccion-ip.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, DireccionIPComponent]
})
export class AppComponent {
  title = 'webServiceTranslate';
}
