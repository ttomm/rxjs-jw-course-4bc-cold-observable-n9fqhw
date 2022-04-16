import { ajax } from 'rxjs/ajax';

const ajax$ = ajax('https://random-data-api.com/api/name/random_name');

ajax$.subscribe((data) => console.log('Sub 1', data.response));

ajax$.subscribe((data) => console.log('Sub 2', data.response));

ajax$.subscribe((data) => console.log('Sub 3', data.response));
