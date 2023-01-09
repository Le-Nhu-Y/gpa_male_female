let arr= [
    {
        name: "Ha",
        gender: 'female',
        poin: 8
    },
    {
        name: "Huy",
        gender: 'male',
        poin: 9
    },
    {
        name: "Hung",
        gender: 'male',
        poin: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        poin: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        poin: 10
    },
    {
        name: "Long",
        gender: 'male',
        poin: 5
    },
    {
        name: "Luan",
        gender: 'male',
        poin: 10
    },
    {
        name: "Linh",
        gender: 'female',
        poin: 8
    }

];
let femalepoint=0;
let femalecount = 0
for(let i of arr){
    if(i.gender==="female") {
        femalepoint += i.poin
        femalecount++
    }
}
femalepoint /= femalecount
console.log("GPA of female: "+femalepoint)

let malepoint=0;
let malecount = 0
for(let i of arr){
    if(i.gender==="male") {
        malepoint += i.poin
        malecount++
    }
}
malepoint /= malecount
console.log("GPA of male: "+malepoint)


