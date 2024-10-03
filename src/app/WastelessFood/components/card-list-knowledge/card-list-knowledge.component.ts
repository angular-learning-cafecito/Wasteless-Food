import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Knowledge} from "../../models/knowledge.entity";
import {KnowledgeService} from "../../services/knowledge.service";
import {CardKnowledgeComponent} from "../card-knowledge/card-knowledge.component";

@Component({
  selector: 'app-card-list-knowledge',
  standalone: true,
  imports: [
    NgForOf,
    CardKnowledgeComponent
  ],
  templateUrl: './card-list-knowledge.component.html',
  styleUrl: './card-list-knowledge.component.css'
})
export class CardListKnowledgeComponent implements OnInit{
  knowledges: Knowledge[]=[];
  constructor(private knowledgeService: KnowledgeService) {}
    ngOnInit(): void {
        this.loadKnowledge();
    }

    loadKnowledge():void{
    this.knowledgeService.getAll().subscribe({
      next: (data)=>{
        this.knowledges = data;
        console.log(this.knowledges,'aqui')
      },
      error:(error)=>{
        console.log('Error fetching knowledge',error);
      }
    });
    }
    handleSubmit(){
    this.loadKnowledge();
    }

}
