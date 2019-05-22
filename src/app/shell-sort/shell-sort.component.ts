import {Component, OnInit} from '@angular/core';
import {BubbleSortComponent} from '../bubble-sort/bubble-sort.component';

@Component({
  selector: 'app-shell-sort',
  templateUrl: './shell-sort.component.html',
  styleUrls: ['./shell-sort.component.scss']
})
export class ShellSortComponent extends BubbleSortComponent implements OnInit {

  constructor() {
    super();
    this.arr = [10, 4, 3, 7, 1, 9, 11];
    this.sortString = this.sort.toString();
  }

  ngOnInit() {
  }

  sort() {
    const n = this.arr.length;
    let i = Math.floor(n / 2);
    while (i > 0) {
      for (let j = 0; j < n; j++) {
        let k = j;
        let t = this.arr[j];
        while (k >= i && this.arr[k - i] > t) {
          this.arr[k] = this.arr[k - i];
          k -= i;
        }
        this.arr[k] = t;
      }
      i = Math.floor(i / 2);
    }
  }
}
