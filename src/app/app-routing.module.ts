import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SingleLinkedListComponent} from './single-linked-list/single-linked-list.component';
import {BubbleSortComponent} from './bubble-sort/bubble-sort.component';
import {SelectionSortComponent} from './selection-sort/selection-sort.component';
import {InsertionSortComponent} from './insertion-sort/insertion-sort.component';
import {ShellSortComponent} from './shell-sort/shell-sort.component';
import {HomeComponent} from './home/home.component';
import {QuickSortComponent} from './quick-sort/quick-sort.component';

export const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
    // @ts-ignore
    name : 'Главная'
  },
  {
    component: SingleLinkedListComponent,
    path: 'single-linked-list',
    // @ts-ignore
    name : 'Односвязный список'
  },
  {
    component: QuickSortComponent,
    path: 'quick-sort',
    // @ts-ignore
    name : 'Быстрая сортировка'
  },
  {
    component: BubbleSortComponent,
    path: 'bubble-sort',
    // @ts-ignore
    name : 'Сортировка пузырьком'
  },
  {
    component: SelectionSortComponent,
    path: 'selection-sort',
    // @ts-ignore
    name : 'Сортировка выбором'
  },
  {
    component: InsertionSortComponent,
    path: 'insertion-sort',
    // @ts-ignore
    name : 'Сортировка вставкой'
  },
  {
    component: ShellSortComponent,
    path: 'shell-sort',
    // @ts-ignore
    name : 'Сортировка Шелла'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
