import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from "../../services/data.service";
import { HttpClientModule } from "@angular/common/http";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditPostDialogComponent } from './edit-post-dialog.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-blog-item-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatDialogModule, MatButtonModule, EditPostDialogComponent],
  providers: [DataService],
  templateUrl: './blog-item-details.component.html',
  styleUrls: ['./blog-item-details.component.css']
})
export class BlogItemDetailsComponent implements OnInit {
  public image: string = '';
  public text: string = '';
  public title: string = '';
  public id: string = '';

  constructor(
    private service: DataService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {}

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
    const dialogRef = this.dialog.open(EditPostDialogComponent, {
      width: '400px',
      data: { title: this.title, text: this.text, image: this.image }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const updatedData = { title: result.title, text: result.text, image: result.image };
        this.service.updatePost(this.id, updatedData).subscribe(() => {
          alert('Post został zaktualizowany');
          this.title = result.title;
          this.text = result.text;
          this.image = result.image;
        });
      }
    });
  }

  deletePost() {
    if (confirm('Jesteś pewny że chesz usunąć tego posta?')) {
      this.service.deletePost(this.id).subscribe(() => {
        this.goBack();
      });
    }
  }
}
