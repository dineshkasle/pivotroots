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
  currentIndex = 0;

  constructor(private api: DataService,private toastr: ToastrService) {
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
        },
        (error) => {
          this.toastr.error('Something Went Wrong!', 'Error!');
          this.yearlyCourses = [];
        });
  }

  onBookChange(data) {
    this.boardsTypes = [];
    this.boards = this.yearlyCourses.find((val) => {
      if (val.grade === data.value) {
        return val.boards;
      }
    });
    this.boardsTypes = Object.keys(this.boards.boards);
    this.currentIndex = 0;
    setTimeout(() => {
      this.boardTypeDetails = null;
    }, 100);
  }

  onSelectedBoardType(data) {
    this.boardTypeDetails = this.boards.boards[data.tab.textLabel];
  }

}
