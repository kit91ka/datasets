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
    name : 'Главная'
  },
  {
    component: SingleLinkedListComponent,
    path: 'single-linked-list',
    name : 'Односвязный список'
  },
  {
    component: QuickSortComponent,
    path: 'quick-sort',
    name : 'Быстрая сортировка'
  },
  {
    component: BubbleSortComponent,
    path: 'bubble-sort',
    name : 'Сортировка пузырьком'
  },
  {
    component: SelectionSortComponent,
    path: 'selection-sort',
    name : 'Сортировка выбором'
  },
  {
    component: InsertionSortComponent,
    path: 'insertion-sort',
    name : 'Сортировка вставкой'
  },
  {
    component: ShellSortComponent,
    path: 'shell-sort',
    name : 'Сортировка Шелла'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
