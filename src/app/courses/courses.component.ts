import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class CoursesComponent implements OnInit {
  tabIndex=1;
  defaultSelected = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onSelectedCourseType(data){
    this.tabIndex = data.index;
  }

}
