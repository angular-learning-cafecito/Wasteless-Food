import {Component, EventEmitter, inject, OnInit, Output, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {KnowledgeService} from "../../services/knowledge.service";
import {Knowledge} from "../../models/knowledge.entity";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {Router} from "@angular/router";


@Component({
  selector: 'app-knowledge-form',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    FormsModule,
    MatButton
  ],
  templateUrl: './knowledge-form.component.html',
  styleUrl: './knowledge-form.component.css'
})
export class KnowledgeFormComponent{
  knowledge!: Knowledge;
  @Output() success = new EventEmitter<void>();
  @ViewChild('knowledgeForm',{static:false}) knowledgeForm!:NgForm;
  knowledgeService: KnowledgeService = inject(KnowledgeService);
  router: Router= inject(Router);

  constructor(){
    this.knowledge = new Knowledge();
  }

  onSubmit(){
    if(this.knowledgeForm.form.valid){
      this.knowledgeService.create(this.knowledge).subscribe((response:any)=>{
        console.log('knowledge Created', response);
        this.success.emit();
        this.resetForm();
      })
    }
  }
  private resetForm(): void {
    this.knowledgeForm.resetForm();
    this.knowledge=new Knowledge();
  }
  onCancel(){
    this.router.navigate(['/knowledge'])
  }
}
