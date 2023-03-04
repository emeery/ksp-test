import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { EmployeeAddComponent } from "./modules/employee/components/employee-add/employee-add.component";
import { EmployeeComponent } from "./modules/employee/components/employee/employee.component";

const routes: Routes = [
  { path: '', redirectTo: 'page-employee', pathMatch: 'full' },
  { path: 'page-employee', component: EmployeeComponent },
  { path: 'add-employee', component: EmployeeAddComponent },
  { path: '**', redirectTo: 'page-employee' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, }),
  ],
  exports: [RouterModule],
  // providers: [AuthGuard],
})
export class AppRoutingModule {}
