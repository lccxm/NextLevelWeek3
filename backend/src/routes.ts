import {Router} from 'express';
import OrphanagesController from './controllers/OrphanagesController';
import multer from 'multer';
import uploadConfig from './config/upload'

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/orphanages',OrphanagesController.create)
routes.get('/orphanages',OrphanagesController.index)
routes.get('/orphanages/:id', upload.array('images') ,OrphanagesController.show)


export default routes;