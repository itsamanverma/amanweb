// src/routes.js
import HomePage from './components/HomePage/HomePage';
import ServicesPage from './components/ServicesPage/SerivcesPage';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import KnowledgePage from './components/KnowlegdePage/KnowledgePage';
import ContactPage from './components/ContactPage/ContactPage';

const routes = [
    { path: '/', component: HomePage },
    { path: '/services', component: ServicesPage },
    { path: '/projects', component: ProjectsPage },
    { path: '/knowledge', component: KnowledgePage },
    { path: '/contact', component: ContactPage },
];

export default routes;
