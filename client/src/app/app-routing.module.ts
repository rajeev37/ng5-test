import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetAquoteComponent } from './get-aquote/get-aquote.component';
import { PlanOptionComponent } from './plan-option/plan-option.component';
import { TestComponent } from './test/test.component';
const routes: Routes = [
    { path: 'shopping/aarp/get-a-quote', component: GetAquoteComponent },
    { path: 'shopping/delta/get-a-quote', component: GetAquoteComponent },
    { path: 'shopping/aarp/plan-option', component: PlanOptionComponent},
    { path: 'shopping/delta/plan-option', component: PlanOptionComponent},
    { path: '', component: TestComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [GetAquoteComponent, PlanOptionComponent, TestComponent];