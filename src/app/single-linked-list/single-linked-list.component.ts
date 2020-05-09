import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-linked-list',
  templateUrl: './single-linked-list.component.html',
  styleUrls: ['./single-linked-list.component.scss']
})
export class SingleLinkedListComponent implements OnInit {
  public list;
  addNumber: any;
    private search: number;
    removeIndex: number;
  constructor() {
    // window['a'] = this;
    this.list = new SingleLinkedList([]);
  }
  add() {
    this.list.add(this.addNumber);
    this.addNumber = '';
  }

  remove() {
    this.list.remove(this.removeIndex);
    this.removeIndex = 0;
  }

  searchNodeAt() {
    const find = this.list.searchNodeAt(this.search);
    if (find) {
      alert(JSON.stringify(find));
    }
  }

  ngOnInit() {
  }

}

export class SingleLinkedList {
  private list: ListElement = {
      next: null,
      value: null,
  };
  public length = 0;
  constructor(arr: Array<any>) {
    arr.forEach(el => this.add(el));
  }

  add(el) {
    let lastEl: ListElement = this.list.next ? this.list.next : this.list;
    console.log(lastEl, 'before');
    while (lastEl.next) {
        lastEl = lastEl.next;
    }
    if (this.length) {
      lastEl.next = {
        value: el,
        next: null
      };
    } else {
      lastEl.value = el;
      lastEl.next = null;
    }
    this.length++;
    console.log(lastEl, 'after');
  }
  searchNodeAt(position: number): ListElement {
    if (position < 0 || position >= this.length) {
      alert('индекс больше длины списка или меньше 0');
      throw Error();
    }
    let val = this.list;
    let index = 0;
    while (index < position) {
      val = val.next;
      index++;
    }
    return val;
  }
  remove(index: number) {
    if (index < 0 || index >= this.length) {
        return alert('индекс больше длины списка или меньше 0');
    }
    if (index === 0) {
      this.list = this.list.next ? this.list.next : {
        value: null,
        next: null
      };
    } else {
      const preLastEl = this.searchNodeAt((index - 1));
      if (preLastEl.next) {
        let lastEl = preLastEl.next;
        delete preLastEl.next;
        preLastEl.next = lastEl.next ? lastEl.next : null;
      }
    }
    this.length--;
  }
}

export interface ListElement {
    value: null| any;
    next: null | ListElement;
}
