import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchemaComponent } from './schema.component';

const routes: Routes = [
  {
    path: 'schema',
    component: SchemaComponent,
    data: { title: "Schema Module" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchemaRoutingModule { }
