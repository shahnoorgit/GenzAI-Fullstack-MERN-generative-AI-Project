import { surpriseMePrompts } from "../Constants";
import FileSaver from "file-saver";

export function GetRandomPrompt() {
  const random_index = Math.floor(Math.random() * surpriseMePrompts.length);
  const RandomPrompt = surpriseMePrompts[random_index];
  if (RandomPrompt === prompt) return GetRandomPrompt(prompt);
  return RandomPrompt;
}

export const DownloadImg = (_Id, Photo) => {
  FileSaver.saveAs(Photo, `Download-${_Id}.jpg`);
};
