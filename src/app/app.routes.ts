import { Routes } from '@angular/router';
import {KnowledgeViewComponent} from "./WastelessFood/pages/knowledge-view/knowledge-view.component";
import {NewItemViewComponent} from "./WastelessFood/pages/new-item-view/new-item-view.component";

export const routes: Routes = [
  {
    path: 'knowledge',
    component: KnowledgeViewComponent,
    data:{name:'Knowledge'},
  },
  {
    path: 'admin/knowledge/new',
    component: NewItemViewComponent,
    data:{name:'NewItem'},
  }
];
