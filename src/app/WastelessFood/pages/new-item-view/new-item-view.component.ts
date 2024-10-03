import { Component } from '@angular/core';
import {KnowledgeFormComponent} from "../../components/knowledge-form/knowledge-form.component";

@Component({
  selector: 'app-new-item-view',
  standalone: true,
  imports: [
    KnowledgeFormComponent
  ],
  templateUrl: './new-item-view.component.html',
  styleUrl: './new-item-view.component.css'
})
export class NewItemViewComponent {

}
