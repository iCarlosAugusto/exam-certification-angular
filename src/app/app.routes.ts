import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';

export const routes: Routes = [
    { path: '',title: "Exam Certification", component: HomeComponent },
    { path: 'questions',title: "Questions", component: QuestionsComponent },
    { path: 'authentication',title: "Identificação", component: AuthenticationComponent },
];
