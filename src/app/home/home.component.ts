import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('scaleUpDownAnim', [
      state('scaleUp', style({
        transform: 'scale(1.1)',
    })),
    state('scaleDown', style({
        transform: 'scale(1)',
    })),
    transition('scaleDown <=> scaleUp', animate('100ms ease-in'))
    ])
  ]  
})
export class HomeComponent implements OnInit {
  eduState: string = 'scaleDown';
  aboutmeState: string = 'scaleDown';
  skillsState: string = 'scaleDown';
  projectsState: string = 'scaleDown';
  interestsState: string = 'scaleDown';
  constructor() { }

  ngOnInit() {
  }
  animateMe(state) {
    if(state==='eduState')
      this.eduState = (this.eduState === 'scaleDown' ? 'scaleUp' : 'scaleDown');
    else if(state==='aboutmeState')
      this.aboutmeState = (this.aboutmeState === 'scaleDown' ? 'scaleUp' : 'scaleDown');
    else if(state==='skillsState')
    this.skillsState = (this.skillsState === 'scaleDown' ? 'scaleUp' : 'scaleDown');
    else if(state==='projectsState')
    this.projectsState = (this.projectsState === 'scaleDown' ? 'scaleUp' : 'scaleDown');
    else if(state==='interestsState')
    this.interestsState = (this.interestsState === 'scaleDown' ? 'scaleUp' : 'scaleDown');
  }  

}
