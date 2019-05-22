import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.scss']
})
export class BubbleSortComponent implements OnInit {
    public arr: number[];
    public sortString: string;

  constructor() {
    this.arr = [4, 3, 7, 1, 9];
    this.sortString = this.sort.toString();
  }
  /// то бишь прогонов выходит n*(n-1) Сложность алгоритма:O(n^2)
  sort() {
    const n = this.arr.length;
    /// n-1 индекс последнего числа
    for (let i = 0; i < n - 1; i++) {
      /// идем циклом внутри цикла
      for (let j = 0; j < n - 1 - i; j++) {
        /// если текущий элемент больше следующего
        if (this.arr[j + 1] < this.arr[j]) {
          /// сохраняем ссылку на след. элемент
          const t = this.arr[j + 1];
          /// cтавим текущий элемент по индексу следующим
          this.arr[j + 1] = this.arr[j];
          /// и ставим след. элемент на место текущего
          this.arr[j] = t;
        }
      }
    }
  }
  
  ngOnInit() {
  }

}
