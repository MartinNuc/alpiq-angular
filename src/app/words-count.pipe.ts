import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordsCount'
})
export class WordsCountPipe implements PipeTransform {
  transform(text: string): number {
    if (text.length === 0) {
      return 0;
    }
    return text.split(' ').length;
  }
}
