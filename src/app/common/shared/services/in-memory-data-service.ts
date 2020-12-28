import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from '../../../tasks';
import  * as jsonData  from '../../../../assets/sample-data/data.json';

@Injectable({providedIn: 'root'})

export class InMemoryDataService implements InMemoryDbService {

    constructor() {}

     createDb() {

        let task = ((jsonData as any).default) as Task;

        return {
            task
        }
    }
}


