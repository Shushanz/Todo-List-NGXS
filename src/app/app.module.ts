import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { TodoState } from './todo/todo.state';
import { FormsModule } from '@angular/forms';
import { FilterState } from './filter/filter.state';
import { VisibleTodosPipe } from './filter/visibleTodosPipe';

@NgModule({
  declarations: [
    AppComponent,
    VisibleTodosPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxsModule.forRoot([TodoState, FilterState]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
