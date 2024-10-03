import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Knowledge} from "../models/knowledge.entity";

@Injectable({
  providedIn: 'root'
})
export class KnowledgeService extends BaseService<Knowledge>{

  constructor() {
    super();
    this.resourceEndpoint="/knowledge";
  }
}
