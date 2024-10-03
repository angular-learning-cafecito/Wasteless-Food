import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListKnowledgeComponent } from './card-list-knowledge.component';

describe('CardListKnowledgeComponent', () => {
  let component: CardListKnowledgeComponent;
  let fixture: ComponentFixture<CardListKnowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardListKnowledgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardListKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
