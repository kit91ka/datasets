import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleLinkedListComponent } from './single-linked-list/single-linked-list.component';
import {FormsModule} from '@angular/forms';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';
import { SelectionSortComponent } from './selection-sort/selection-sort.component';
import { InsertionSortComponent } from './insertion-sort/insertion-sort.component';
import { ShellSortComponent } from './shell-sort/shell-sort.component';
import { HomeComponent } from './home/home.component';
import { QuickSortComponent } from './quick-sort/quick-sort.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleLinkedListComponent,
    BubbleSortComponent,
    SelectionSortComponent,
    InsertionSortComponent,
    ShellSortComponent,
    HomeComponent,
    QuickSortComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
