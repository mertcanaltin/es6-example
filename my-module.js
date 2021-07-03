export default (name) => {
    console.log('hello '+name);
    console.log(`hello ${name}`);
}

const topla = (a,b) => a+b ;

const cikar = (a,b) => a-b ;

const text = 'text';

const user = {
    name :'mert',
    surname:'Altın'

}

const users = [{
    name:'mert',
    surname:'altin',
},
{
    name:'ali',
    surname:'altın',
},
];

export {topla,cikar,text,user,users};


