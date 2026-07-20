// 영화데이터의 타입을 지정
// 특별한 객체의 설계도
// string,boolean,number(원시타입)
export type Movie = {
    id:number;
    title:string;
    director: string;
    year:number;
    rating:number;
    genre:string;
    image:string;
    description:string;
}