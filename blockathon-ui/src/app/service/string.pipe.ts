import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toAscii'
})
export class StringPipe implements PipeTransform {

  transform(hex: any, args?: any): any {
    let str = '';
    let i = 0, l = hex.length;
    if (hex.substring(0, 2) === '0x') {
      i = 2;
    }
    for (; i < l; i += 2) {
      const code = parseInt(hex.substr(i, 2), 16);
      if (code !== 0) {
        str += String.fromCharCode(code);
      }
    }
    return str.trim();
  }

}
