const canvas = document.querySelector('.gameCanvas');
console.log(canvas);
const ctx = canvas.getContext("2d");
console.log(ctx);

let snake = [{x:10,y:10}];
let food = {x:0,y:0};
let snake2 = [{x:5, y:10}];
const gridSize = 20;
const snakeColor = "green";
const foodColor = "red";
const snake2Color = "green";
let dx=0, fx= 0;
let dy=0; fy=0;
let random1;
let random2;
let random3;
let random4;
let random5;
let random6;
let random7;
let random8;
let point1=0;
let point2=0;
const disp = document.querySelector('.onoo1');
const disp2 = document.querySelector('.onoo2');
function drawSnake(snakeEl, color){
   snakeEl.forEach(segment =>{
    ctx.fillStyle = color;
    ctx.fillRect(segment.x*gridSize,segment.y*gridSize,gridSize,gridSize);
   });
}

drawSnake(snake,snakeColor);

function drawFood(){
    ctx.fillStyle = foodColor;
    ctx.fillRect(food.x*gridSize,food.y*gridSize, gridSize, gridSize);

}
function update(){
    const head = {x:snake[0].x+dx, y:snake[0].y+dy}
    const head2 = {x:snake2[0].x+fx, y:snake2[0].y+fy}
    // unshift()-> nemne, pop()-> hasna
    snake.unshift(head);
    snake2.unshift(head2);
    if(head.x==food.x && head.y==food.y){
        random1 =  Math.floor(Math.random()*20); 
        random2 =  Math.floor(Math.random()*20); 
        food = {x:random1,y:random2};
        point1++;
    }else{
        snake.pop();
    }
    if(head2.x==food.x && head2.y==food.y
    ){
        random7 =  Math.floor(Math.random()*20); 
        random7 =  Math.floor(Math.random()*20); 
        food = {x:random7,y:random8};
        point2++;
    }else{
        snake2.pop();
    }
    if((head.y<0 || head.x<0 || head.x>=20 || head.y>=20) ||
    (head2.y<0 || head2.x<0 || head2.x>=20 || head2.y>=20)){
        random3 =  Math.floor(Math.random()*20); 
        random4 =  Math.floor(Math.random()*20); 
        random5 =  Math.floor(Math.random()*20); 
        random6 =  Math.floor(Math.random()*20); 
        snake =  [{x:random3,y:random4}];
        dx=0;
        dy=0;
        point1= 0;
        fx = 0;
        fy= 0;
        snake2 = [{x:random5,y:random6}];
        point2= 0;
    }
    disp.innerText = "Ногоон:" + point1;
    disp2.innerText = "Шар:" + point2;
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawSnake(snake, snakeColor);
    drawSnake(snake2, "yellow");
    drawFood();
}
const gameLoop = setInterval(update, 200);
document.addEventListener("keydown", (event)=>{
    console.log(event.key);
    switch(event.key){
        case "ArrowUp" : 
            if(dy!==1){
                dx=0;
                dy=-1;
            }
            break;
        case "ArrowDown" :
            if(dy !==-1){
                dx=0;
                dy=1;
            }
            break;
        case "ArrowRight" :
            if(dx !==-1){
                dx=1;
                dy=0;
            }
            break;
            case "ArrowLeft" :
            if(dx !==1){
                dx=-1;
                dy=0;
            }
            break;

    }
    switch(event.key){
        case "w" : 
            if(fy!==1){
                fx=0;
                fy=-1;
            }
            break;
        case "s" :
            if(fy !==-1){
                fx=0;
                fy=1;
            }
            break;
        case "d" :
            if(fx !==-1){
                fx=1;
                fy=0;
            }
            break;
            case "a" :
            if(fx !==1){
                fx=-1;
                fy=0;
            }
            break;

    }
});
