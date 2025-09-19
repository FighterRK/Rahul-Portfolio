import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {ReactiveFormsModule , FormBuilder, FormGroup, Validators } from '@angular/forms'



@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, NgClass],
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  userForm!: FormGroup;
  constructor(private formBuilder:FormBuilder){
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    })

  }

  onSubmit(){
    if(this.userForm.valid) {
      console.log(this.userForm.value,'VALUE I TYPED');
      
    }else{
      console.log(this.userForm,'##USER FORM###');
      
    }
  }

  goToGmail() {
  window.location.href = "mailto:rahulksuresh370@gmail.com";
}

}
