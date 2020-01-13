let msg;
msg = 'abc';

let endsWithC = (<string>msg).endsWith('c');
let alternativeWay = (msg as string).endsWith('c');

console.log(endsWithC);