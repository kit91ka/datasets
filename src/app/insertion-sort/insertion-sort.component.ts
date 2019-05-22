import {Component, OnInit} from '@angular/core';
import {BubbleSortComponent} from '../bubble-sort/bubble-sort.component';

@Component({
  selector: 'app-insertion-sort',
  templateUrl: './insertion-sort.component.html',
  styleUrls: ['./insertion-sort.component.scss']
})
export class InsertionSortComponent extends BubbleSortComponent implements OnInit {

  constructor() {
    super();
    this.arr = [10, 4, 3, 7, 1, 9];
    this.sortString = this.sort.toString();
  }

  ngOnInit() {
  }

  sort() {
    const n = this.arr.length;
    for (let i = 0; i < n; i++) {
      /// записываем текущий эл-т, чтобы не потерять
      const v = this.arr[i];
      let j = i - 1;
      // cчитаем массив из 1 эл. отсортированным,
      /// меняем индекс остальных элеменов, если они больше нового эл-та
      while (j >= 0 && this.arr[j] > v) {
        this.arr[j + 1] = this.arr[j];
        j--;
      }
      this.arr[j + 1] = v;
    }
  }
}
