import { FormsModule } from '@angular/forms';
import { TableComponent } from './../table/table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [CommonModule, TranslateModule, AboutRoutingModule, FormsModule],
  declarations: [AboutComponent, TableComponent],
})
export class AboutModule {}
