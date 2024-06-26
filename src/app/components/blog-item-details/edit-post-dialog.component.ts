import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'edit-post-dialog',
  template: `
    <h1 mat-dialog-title>Edytuj posta</h1>
    <div mat-dialog-content>
      <mat-form-field appearance="fill">
        <mat-label>Tytuł</mat-label>
        <input matInput [(ngModel)]="data.title">
      </mat-form-field>
      <mat-form-field appearance="fill">
        <mat-label>Opis</mat-label>
        <textarea matInput [(ngModel)]="data.text"></textarea>
      </mat-form-field>
      <mat-form-field appearance="fill">
        <mat-label>URL zdjęcia</mat-label>
        <input matInput [(ngModel)]="data.image">
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Anuluj</button>
      <button mat-button (click)="onSaveClick()">Zapisz</button>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  styleUrls: ['./edit-post-dialog.component.css']
})
export class EditPostDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditPostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.dialogRef.close(this.data);
  }
}
