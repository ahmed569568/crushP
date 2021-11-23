import { ProductDashboardComponent } from './product/product-dashboard/product-dashboard.component';
import { CompanyComponent } from './children/company/company.component';
import { AddressComponent } from './children/address/address.component';
import { PostComponent } from './post/post.component';
import { ChatComponent } from './socket/chat/chat.component';
import { ArrayComponent } from './array/array.component';
import { EventComponent } from './event/event.component';
import { TableComponent } from './table/table.component';
import { TaskComponent } from './task/task.component';
import { TestingComponent } from './testing/testing.component';
import { PostsComponent } from './posts/posts.component';
import { TodosComponent } from './todos/todos.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  Shell.childRoutes([
    { path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) },
    { path: 'todos', component: TodosComponent },
    { path: 'posts', component: PostsComponent },
    {
      path: 'post/:id',
      component: PostComponent,
      children: [
        { path: '', redirectTo: 'address', pathMatch: 'full' },
        { path: 'address', component: AddressComponent },
        { path: 'company', component: CompanyComponent },
      ],
    },
    { path: 'testing', component: TestingComponent },
    { path: 'task', component: TaskComponent },
    { path: 'table', component: TableComponent },
    { path: 'event', component: EventComponent },
    { path: 'array', component: ArrayComponent },
    { path: 'socket', component: ChatComponent },
    { path: 'product-dashboard', component: ProductDashboardComponent },
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
