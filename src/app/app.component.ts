import { Component } from '@angular/core';
import { RegistroFormComponent } from './registro-form/registro-form.component';  
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RegistroFormComponent],  
  template: '<app-registro-form></app-registro-form>',  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-asistencia';
}
