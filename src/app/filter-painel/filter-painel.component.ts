import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-painel',
  standalone: false,
  templateUrl: './filter-painel.component.html',
  styleUrl: './filter-painel.component.css'
})
export class FilterPainelComponent {

  @Output() filterChange = new EventEmitter<any>();

  transationFiltersForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.transationFiltersForm = this.fb.group({
      id: [''],
      dataInicial: [''],
      dataFinal: [''],
      valor: [''],
      status: [''],
      metodo_pagamento: ['']
    })
  }

  onSubmit(){
    if( this.transationFiltersForm.valid){
      const formData= this.transationFiltersForm.value
      this.filterChange.emit(formData);
    }
  }

}
