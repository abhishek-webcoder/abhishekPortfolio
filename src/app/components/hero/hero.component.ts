import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  username: string = '';
  password: string = '';
  showLogin: boolean = true;

  constructor(private formBuilder: FormBuilder) {}

  onSubmitLogin() {
    console.log('Form Submitted');
  }

  registrationForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    address: ['', [Validators.required]],
  });

  onSubmitRegistration() {
    console.log('Form Submitted', this.registrationForm.value);
  }

  changeReadMore() {
    const restContent = document.getElementById('restContentId');
    const readmoreButton = document.getElementById('readmoreId');
    const dotSpan = document.getElementById('dotSpan');

    if (!restContent || !readmoreButton || !dotSpan) return;

    if (
      restContent.style.display === 'none' ||
      restContent.style.display === ''
    ) {
      restContent.style.display = 'inline';
      dotSpan.style.display = 'none';
      readmoreButton.textContent = 'Read Less';
    } else {
      restContent.style.display = 'none';
      readmoreButton.textContent = 'Read More';
      dotSpan.style.display = 'inline';
    }
  }
}
