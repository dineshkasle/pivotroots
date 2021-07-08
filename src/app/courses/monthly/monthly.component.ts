import {Component, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.css']
})
export class MonthlyComponent implements OnInit {

  monthlyCourses: any = [];
  grades: any = [];
  boards: any = [];
  boardsTypes: any = [];
  boardTypeDetails = null;
  currentIndex = 0;

  constructor(private api: DataService,private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getYearlyCources();
  }

  getYearlyCources() {
    this.api.getCourses()
      .subscribe(data => {
          this.monthlyCourses = data[0].monthly;
          this.monthlyCourses.forEach((val) => {
            this.grades.push(val.grade);
          });
        },
        (error) => {
          this.toastr.error('Something Went Wrong!', 'Error!');
          this.monthlyCourses = [];
        });
  }

  onBookChange(data) {

    this.boardsTypes = [];
    this.boards = this.monthlyCourses.find((val) => {
      if (val.grade === data.value) {
        return val.boards;
      }
    });
    this.boardsTypes = Object.keys(this.boards.boards);
    this.boardTypeDetails = null;
    this.currentIndex = 0;

  }

  onSelectedBoardType(data) {
    this.boardTypeDetails = this.boards.boards[data.tab.textLabel];
  }
}
