import FileSaver from 'file-saver'

import { surpriseMePrompts } from '../constants'

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrpmpt = surpriseMePrompts[randomIndex];

  if (randomPrpmpt === prompt) return getRandomPrompt(prompt);

  return randomPrpmpt;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`)
}