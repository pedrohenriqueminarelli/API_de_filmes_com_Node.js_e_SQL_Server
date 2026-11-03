import categoria from './categoriaRoutes.js';
import filme from './filmeRoutes.js';

const routes = (app) =>{

    app.use('/api', categoria);
    app.use('/api', filme);
}

export default routes;