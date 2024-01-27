// setTimeout(()=>{
//     console.log("hello");
// },100)
// console.log('h1');

// const func = () =>{
//     console.log("hellofunc");
// }

// setTimeout(func , 0);

const btn1 = document.querySelector("#button1"); 
const btn2 = document.querySelector("#button2"); 
const div1 = document.querySelector("#div1"); 
const div2 = document.querySelector("#div2"); 

const member = (inLogin)=>{
    return inLogin ? (
        btn1.style.display = 'block',
        btn1.addEventListener('click' , ()=>{
            btn2.style.display = 'block'
            document.body.style.backgroundColor = "#36454f";
            setTimeout(()=>{
                div1.classList = "div1"
            },1000)
        })
    ) :(
        btn2.style.display = 'block',
        btn2.addEventListener('click' , ()=>{
            document.body.style.backgroundColor = "#343434";
            setTimeout(()=>{
                div1.classList = "div2"
            },1000)
        })
    );
}

console.log(member(true));;
console.log(member(false));;