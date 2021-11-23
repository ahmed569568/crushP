import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '@env/environment';
import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonComponent } from './component/button/button.component';
import { TasksComponent } from './component/tasks/tasks.component';
import { TaskItemComponent } from './component/task-item/task-item.component';
import { AddTaskComponent } from './component/add-task/add-task.component';
import { LoginComponent } from './login/login.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todos/todo/todo.component';
import { AddTodoComponent } from './todos/components/add-todo/add-todo.component';
import { PostsComponent } from './posts/posts.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { TestingComponent } from './testing/testing.component';
import { TaskComponent } from './task/task.component';
import { EventComponent } from './event/event.component';
import { ArrayComponent } from './array/array.component';
import { ChatComponent } from './socket/chat/chat.component';
import { ChildComponent } from './child/child.component';
import { AgePipe } from './pipe/age.pipe';
import { PostComponent } from './post/post.component';
import { AddressComponent } from './children/address/address.component';
import { CompanyComponent } from './children/company/company.component';
import { ProductDashboardComponent } from './product/product-dashboard/product-dashboard.component';
import { ProductWidgetComponent } from './product/product-widget/product-widget.component';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule,
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
  ],
  declarations: [
    AppComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    LoginComponent,
    TodosComponent,
    TodoComponent,
    AddTodoComponent,
    PostsComponent,
    TestingComponent,
    TaskComponent,
    EventComponent,
    ArrayComponent,
    ChatComponent,
    AgePipe,
    PostComponent,
    AddressComponent,
    CompanyComponent,
    ProductDashboardComponent,
    ProductWidgetComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
