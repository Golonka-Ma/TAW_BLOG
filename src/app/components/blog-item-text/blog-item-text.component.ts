import { Component, Input } from '@angular/core';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'blog-item-text',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './blog-item-text.component.html',
  styleUrl: './blog-item-text.component.css'
})
export class BlogItemTextComponent {
  @Input() text?: string;
  @Input() id?: string;
}
