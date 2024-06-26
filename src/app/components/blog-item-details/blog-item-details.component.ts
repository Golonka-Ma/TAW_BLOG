import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from "../../services/data.service";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: 'app-blog-item-details',
  standalone: true,
  imports: [HttpClientModule],
  providers: [DataService],
  templateUrl: './blog-item-details.component.html',
  styleUrls: ['./blog-item-details.component.css']
})
export class BlogItemDetailsComponent implements OnInit {
  public image: string = '';
  public text: string = '';
  public title: string = '';
  public id: string = '';

  constructor(private service: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || '';
      this.service.getById(this.id).subscribe((res: any) => {
        const post = res;
        this.image = post['image'];
        this.text = post['text'];
        this.title = post['title'];
      });
    });
  }

  goBack() {
    this.router.navigate(['/blog']);
  }

  editPost() {
    const updatedTitle = prompt('Enter new title:', this.title);
    const updatedText = prompt('Enter new text:', this.text);
    const updatedImage = prompt('Enter new image URL:', this.image);

    if (updatedTitle !== null && updatedText !== null && updatedImage !== null) {
      const updatedData = { title: updatedTitle, text: updatedText, image: updatedImage };
      this.service.updatePost(this.id, updatedData).subscribe(() => {
        alert('Post updated');
        this.title = updatedTitle; 
        this.text = updatedText;
        this.image = updatedImage; 
      });
    }
  }

  deletePost() {
    if (confirm('Jesteś pewny że chesz usunąć tego posta?')) {
      this.service.deletePost(this.id).subscribe(() => {
        alert('Post został usunięty');
        this.goBack();
      });
    }
  }
}
