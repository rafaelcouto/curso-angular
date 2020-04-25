import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { PageDeactivateGuard } from '../guards/page-deactivate.guard';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

const routes: Routes = [
    {
        path: '', component: AlunosComponent, children: [
            { path: 'novo', component: AlunoFormComponent },
            {
                path: ':id',
                component: AlunoDetalheComponent,
                canDeactivate: [PageDeactivateGuard],
                resolve: { aluno: AlunoDetalheResolver }
            },
            { path: ':id/editar', component: AlunoFormComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule { }