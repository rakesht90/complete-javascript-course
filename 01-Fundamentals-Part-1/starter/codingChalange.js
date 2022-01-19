//BMI mass /height **2 = mass /(height*height)
// let mark = {
//     mass: 78,
//     height: 1.69,
// }
// let john = {
//     mass: 95,
//     height: 1.76,
// }
// let bmi;
// console.log('BMI of mark'+(mark.bmi=mark.mass /(mark.height**2)));
// console.log('BMI of mark'+(mark.mass /(mark.height*mark.height)));
// console.log('BMI of Jhon'+(john.mass /(john.height**2)));
// console.log('BMI of jhon'+(john.bmi= john.mass /(john.height*john.height)));
// let markHigherBMI = mark.bmi>john.bmi ;
// console.log('5. mark has higher bmi then john:'+ markHigherBMI);
const markMass = 60;
const markHeight =1.69;
const johnMass = 80;
const johnHeight = 1.5;
const markBmi = markMass / markHeight**2;
const johnBmi = johnMass / johnHeight*johnHeight;
const markHigherBMI = markBmi > johnBmi;
console.log(markBmi, johnBmi, markHigherBMI);
