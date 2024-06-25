import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-post-form',
  standalone: true,
  imports: [FormsModule],
  providers: [AuthService, DataService],
  templateUrl: './add-post-form.component.html',
  styleUrl: './add-post-form.component.css'
})
export class AddPostFormComponent {
  public formData = {
    title: '',
    text: '',
    image: '',
  }

  constructor(public http: DataService, private router: Router) {}

  sendData = () => {
    console.log(JSON.stringify(this.formData));
    this.http.addNew(JSON.stringify(this.formData)).subscribe((res) => {
        console.log('succesfully added!');
        this.router.navigate(['/blog']);
    })
  }
}
