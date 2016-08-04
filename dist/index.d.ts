import * as ko from 'knockout';
export declare function twoDigits(value: number): string | number;
export declare function isObservable<T>(o: T | ko.Observable<T>): o is ko.Observable<T>;
