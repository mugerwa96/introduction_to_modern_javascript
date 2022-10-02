// spread_operator
    const name=['mugerwa','pro'];
    const gender=['male','female'];
    const all=[
        {
            id:1,
            name:"mugerwa"
        },
        {
            id:1,
            name:"mugerwa"
        },
        {
            id:1,
            name:"mugerwa"
        },
        {
            id:1,
            name:"mugerwa"
        },
        {
            id:1,
            name:"mugerwa"
        },
    ]
    
    const final=
console.log(...name);
    // const combined=[...name,...gender];
    
    // adding extra items 
    // const combined=[...name, 'kyambogo',...gender,2022];
    // console.log(combined);
// spread_operator


// using spread operator ,its easy toclone an array
// const clone=[...name];
// console.log(clone);


// 2:::combining objects

// const first={name:'artisan'};
// const second={gender:23};
// const combined={...first,...second};
// console.log(combined);