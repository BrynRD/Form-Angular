import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registro-form.component.html',
  styleUrls: ['./registro-form.component.css']
})


export class RegistroFormComponent {
  registroForm: FormGroup;
  registros: any[] = [];

  
  distritosLima: string[] = [
    'San Juan de Miraflores',
    'Villa El Salvador',
    'Chorrillos',
    'Surco',
    'San Miguel',
    'Villa Maria del Triunfo'
  ];

  constructor(private formBuilder: FormBuilder) {
    const soloLetras = /^[a-zA-ZÀ-ÿ\s]+$/;

    this.registroForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern(soloLetras)]],
      apellido: ['', [Validators.required, Validators.pattern(soloLetras)]],
      edad: ['', [Validators.required, Validators.min(1), Validators.max(120)]],
      distrito: ['', Validators.required]
    });
  }

  agregarRegistro() {
    if (this.registroForm.valid) {
      this.registros.push(this.registroForm.value);
      this.registroForm.reset();
    }
  }
}
