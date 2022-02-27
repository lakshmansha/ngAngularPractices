import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '**', redirectTo: '/hello', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
