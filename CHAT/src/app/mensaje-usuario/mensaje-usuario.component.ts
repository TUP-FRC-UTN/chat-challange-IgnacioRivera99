import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mensaje-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mensaje-usuario.component.html',
  styleUrl: './mensaje-usuario.component.css'
})
export class MensajeUsuarioComponent {
  @Input () nombre: string = "";
  @Output () enviarMensaje = new EventEmitter<string>();

  mensaje: string = "";

  setearMensaje(){
    this.enviarMensaje.emit(this.nombre + ": " + this.mensaje);
    this.mensaje = "";
  }

}
