import { Request, Response } from "express";
import Phrases from "../models/Phrases";

export const ping = (req: Request, res: Response) => {
  res.json({pong: true});
}

export const random = (req: Request, res: Response) => {
  const nRand = Math.floor(Math.random() * 100)
  res.json({number: nRand});
}

export const name = (req: Request, res: Response) => {
  const name: string = req.params.name;
  res.json({name})
}


// GET
export const getPhrases = async(req: Request, res: Response) => {
  const phrases = await Phrases.find()

  res.json(phrases)
}

export const getAuthor = async(req: Request, res: Response) => {
  const { author } = req.params

  const phrase = await Phrases.find({
    author
  })

  if(phrase.length === 0) {
    res.status(404)
    return res.json({msg: "author not found"})
  }
  res.json(phrase);
}

export const getById = async (req: Request, res: Response) => {
  const { id } = req.params
  const Phrase = await Phrases.findById(id)

  res.json({Phrase})

}

//POST
export const createPhrase = async (req: Request, res: Response) => {
  const { txt , author} = req.body as { txt: string, author: string};

  const newPhrase = await Phrases.create({
    txt,
    author: author.toLowerCase()
  })

  res.status(201);
  res.json({ txt, author })
}

//Put

export const editPhrase = async (req: Request, res: Response) => {

  const { id } = req.params
  const { txt, author } = req.body;

  const updatePhrase = await Phrases.findByIdAndUpdate(id);
  
  if(updatePhrase) {
    updatePhrase.txt = txt;
    updatePhrase.author = author.toLowerCase();
    updatePhrase.save()
    console.log(updatePhrase)
    res.json(updatePhrase)
  } else {
    res.json({error: true})
  }
}

// DELETE
export const deletePhrase = async (req: Request, res: Response) => {
  const { id } = req.params;

  Phrases.findByIdAndDelete(id)
  .then(() => res.json({deleted: true}))
  .catch(() => res.json({deleted: false}))
}