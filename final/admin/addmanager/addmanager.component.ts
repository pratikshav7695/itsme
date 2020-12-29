import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/authentication.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { Users } from 'src/app/models/users';


@Component({
  selector: 'app-addmanager',
  templateUrl: './addmanager.component.html',
  styleUrls: ['./addmanager.component.css'],
  
})
export class AddmanagerComponent implements OnInit {
  public get usersService(): UsersService {
    return this._usersService;
  }
  public set usersService(value: UsersService) {
    this._usersService = value;
  }
  user:Users;
  constructor(private _usersService: UsersService, private route:Router,private authenticateService:AuthenticationService) {
    this.user = new Users(null,"","","","","","","",null,null);
   }
 
  ngOnInit(): void {
  }

//   verifyEmail(userEmail){
//     console.log('In verify email'+this.user.userEmail)
//   this.authenticateService.verifyEmail(userEmail);
// }


  onSubmit(){
   console.log(this.user);
    this.usersService.registerManager(this.user).subscribe(
      result=>{
        console.log(result);

        if(result)
        {
          this.route.navigate(['adminhome'])
        }
        
      }
      
    )

    console.log(this.user);
    

  }
    
  
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
