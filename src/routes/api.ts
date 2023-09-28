import { Router, Request, Response } from "express";
import * as apiController from '../controllers/phrasesController'

const router = Router();

router.get('/ping', apiController.ping);

router.get('/random', apiController.random);

router.get('/name/:name', apiController.name);

// CRUD

// CREATE
router.post('/phrases', apiController.createPhrase)

// READ
router.get('/phrases', apiController.getPhrases);
router.get('/phrases/author/:author', apiController.getAuthor);
router.get('/phrase/:id', apiController.getById);

// UPDATE
router.put('/phrase/:id', apiController.editPhrase);

// DELETE
router.delete('/phrase/:id', apiController.deletePhrase)



export default router;