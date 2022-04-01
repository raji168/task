import { Component,OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from '../customvalidators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      name: ['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      password: ['', [Validators.required,Validators.minLength(4),Validators.maxLength(8)]],
      confirm_password: ['', [Validators.required]]
    }, { 
      validator: ConfirmedValidator('password', 'confirm_password')
    })
  }
  ngOnInit(): void {
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
  }
}
