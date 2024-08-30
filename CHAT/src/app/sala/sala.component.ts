import { Component } from '@angular/core';
import { MensajeUsuarioComponent } from "../mensaje-usuario/mensaje-usuario.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [MensajeUsuarioComponent, CommonModule],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})

export class SalaComponent {
  mensajes: string[] = [];

  addMensajes(mensaje: string){
    this.mensajes.push(mensaje);
  }
}
