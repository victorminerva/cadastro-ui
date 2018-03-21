import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      usuarioNome: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      senha: this.formBuilder.control('')
    });
  }

  registerUser(user: User) {
    this.userService.registerUser(user)
                      .subscribe((response: Response) => {
                        console.log('HTTP response', response);
                        alert(response.text());
                      });
  }
}
