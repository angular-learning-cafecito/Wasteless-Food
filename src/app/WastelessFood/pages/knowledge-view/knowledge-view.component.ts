import { Component } from '@angular/core';
import {CardKnowledgeComponent} from "../../components/card-knowledge/card-knowledge.component";
import {CardListKnowledgeComponent} from "../../components/card-list-knowledge/card-list-knowledge.component";

@Component({
  selector: 'app-knowledge-view',
  standalone: true,
  imports: [
    CardKnowledgeComponent,
    CardListKnowledgeComponent
  ],
  templateUrl: './knowledge-view.component.html',
  styleUrl: './knowledge-view.component.css'
})
export class KnowledgeViewComponent {

}
