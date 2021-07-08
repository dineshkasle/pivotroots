import {Component, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-yearly',
  templateUrl: './yearly.component.html',
  styleUrls: ['./yearly.component.css']
})
export class YearlyComponent implements OnInit {
  yearlyCourses: any = [];
  grades: any = [];
  boards: any = [];
  boardsTypes: any = [];
  boardTypeDetails = null;
  currentIndex = 1;
  temp = '';

  constructor(private api: DataService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getYearlyCources();
  }

  getYearlyCources() {
    this.api.getCourses()
      .subscribe(data => {
          this.yearlyCourses = data[1].yearly;
          this.yearlyCourses.forEach((val) => {
            this.grades.push(val.grade);
          });
          if (this.grades.length) {
            this.temp = this.grades[0];
            this.onBookChange(this.grades[0]);
          }
        },
        (error) => {
          this.toastr.error('Something Went Wrong!', 'Error!');
          this.yearlyCourses = [];
        });
  }

  onBookChange(data) {
    this.boardsTypes = [];
    this.boards = this.yearlyCourses.find((val) => {
      if (val.grade === data) {
        return val.boards;
      }
    });
    this.boardsTypes = Object.keys(this.boards.boards);
    this.currentIndex = 0;
    this.boardTypeDetails = null;
    this.onSelectedBoardType(this.boardsTypes[0]);
  }

  onSelectedBoardType(grade) {
    this.boardTypeDetails = this.boards.boards[grade];
  }

}
