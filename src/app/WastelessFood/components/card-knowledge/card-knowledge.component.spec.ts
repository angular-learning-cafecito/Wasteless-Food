import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardKnowledgeComponent } from './card-knowledge.component';

describe('CardKnowledgeComponent', () => {
  let component: CardKnowledgeComponent;
  let fixture: ComponentFixture<CardKnowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardKnowledgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
