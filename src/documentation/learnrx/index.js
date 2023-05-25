import { Observable } from "rxjs";

const observable = new Observable((subscriber)=>{
    subscriber.next(10);
})

const observer = {
    next: (value) => {console.log('Observer got an value'+ value);},
    error: (err) => {console.log('Observer got an error' +err)},
    complete: () => {console.log('Observer got complete notification')},
}
observable.subscribe(observer);