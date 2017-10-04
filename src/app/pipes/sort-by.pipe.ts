import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(array: Array<string>, args?: any): any {
    
    if (array) {
			let sortField = args[0];
			let sortDirection = args[1];
			let modifier = 1; // modifier will change if sort order becomes descending, as ascending is set to default

			if (sortDirection === 'desc') {
				modifier = -1;
			}

    	array.sort((a: any, b: any) => {
    		if (a[sortField] < b[sortField]) {
    			return -1 * modifier;
    		} else if (a[sortField] > b[sortField]) {
    			return 1 * modifier;
    		} else {
    			return 0;
    		}
    	});

    	return array;
    }
  }

}
