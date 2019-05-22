import { Component, OnInit } from '@angular/core';
import {BubbleSortComponent} from '../bubble-sort/bubble-sort.component';

@Component({
  selector: 'app-selection-sort',
  templateUrl: './selection-sort.component.html',
  styleUrls: ['./selection-sort.component.scss']
})
export class SelectionSortComponent extends BubbleSortComponent implements OnInit {

  constructor() {
    super();
    this.arr = [10, 4, 3, 7, 1, 9];
    this.sortString = this.sort.toString();
  }

  sort() {
    const n = this.arr.length;
    console.log('qq');
    /// n-1 индекс последнего числа
    for (let i = 0; i < n - 1; i++) {
      /// записываем для начала минимальным индексом первый
      let min = i;
      /// идем циклом внутри цикла
      for (let j = i + 1; j < n; j++) {
        /// далее в каждой итерации цикла определяем минимальный индекс, т.е. cтавим на свое место в каждую большую итерацию
        if (this.arr[j] < this.arr[min])  {
          min = j;
        }
      }
      /// меняем местами
      const t = this.arr[min];
      this.arr[min] = this.arr[ i ];
      this.arr[ i ] = t;
    }
  }
}
