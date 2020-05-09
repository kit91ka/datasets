import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-quick-sort',
  templateUrl: './quick-sort.component.html',
  styleUrls: ['./quick-sort.component.scss']
})
export class QuickSortComponent implements OnInit {
  public arr: number[];
  constructor() {
    // window['a'] = this;
    this.arr = [1, 54, 4, 5, 6, 7, 8, 9, 11];
  }

  quickSort(arr) {
    const len = arr.length;
    if (len < 2) {
      return arr;
    } else {
      const pivotPosition = Math.floor(Math.random() * arr.length);
      const pivot = arr[pivotPosition];
      const less = [];
      const greater = [];
      for (let i = 0; i < arr.length; i++) {
        const isPivot = i === pivotPosition;
        if (arr[i] <= pivot && !isPivot) {
          less.push(arr[i]);
        } else if (arr[i] > pivot) {
          greater.push(arr[i]);
        }
      }
    return [...this.quickSort(less), pivot, ...this.quickSort(greater)];
    // const left = arr.filter(el => el < pivot);
    // const right = arr.filter(el => el > pivot);
  }
}

sort() {
this.arr = this.quickSort(this.arr);
}

ngOnInit() {
}

}
