import {Component, inject, Input} from '@angular/core';
import {Knowledge} from "../../models/knowledge.entity";
import {MatCard, MatCardContent, MatCardHeader, MatCardImage} from "@angular/material/card";

@Component({
  selector: 'app-card-knowledge',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardImage,
    MatCardContent
  ],
  templateUrl: './card-knowledge.component.html',
  styleUrl: './card-knowledge.component.css'
})
export class CardKnowledgeComponent {
  @Input() knowledge!: Knowledge;

}
