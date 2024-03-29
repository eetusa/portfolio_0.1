// Despair - Goratie
// move around world. at some point a new source spawns?
//
// combine polygons / add crosspoints as vertices
// Init
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.style.cursor = "none";

canvas.width = canvas.offsetWidth;
canvas.height= canvas.offsetHeight;
canvas.width = innerWidth;
canvas.height= innerHeight;
const width = canvas.width;
const height = canvas.height;
canvas.style.width="100%;"
canvas.style.height="100%;"



// addEventListener("mousemove", function(event){
//     mouse.x = event.clientX;
//     mouse.y = event.clientY;
//     console.log(mouse.x,mouse.y)
// });





// Variablesss
let mouse = {
    x: 0,
    y: 0
}

const colors = [
    '#2185C5',
    '#7ECEFD',
    '#FFF6E5',
    '#FF7F66'
]

const colors2 = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "orange"
]

addEventListener("mousemove", function(event){
    mouse.x = event.clientX - (canvas.offsetLeft - window.pageXOffset);
    mouse.y = event.clientY- (canvas.offsetTop - window.pageYOffset);
});



// Utility functions

function printDisplay(param1, ...args){
    const display = document.getElementById("display");
    let child = document.createElement('div');
    child.textContent = param1 + ": ";
    args.forEach((arg) => {
        if (typeof arg == "number"){
            if (arg < 10){
                arg = arg.toFixed(3);
            }
            
        }
        child.textContent = child.textContent + " " + arg;
    })
    display.appendChild(child);
}

function removeAllChildNodes(display) {
    while (display.firstChild) {
        display.removeChild(display.firstChild);
    }
}

function randomColor(color){
    return colors[Math.floor(Math.random()*colors.length)];
}

function addRandomPolygons(array, n){
    let temp = array;
    for (let i = 0; i < n; i++){
        let vertices = randomIntFromRange(3,4);
        let cx = randomIntFromRange(width-50)+50;
        let cy = randomIntFromRange(height-50)+50;
        let P = [];
        let fill = 0;
        let color = "yellow";
        let set = 1;
        if (Math.random>0.5){
            fill = 1;
        }
        for (let j = 0; j < vertices; j++){
            P.push({x: cx+randomIntFromRange(-50,50), y: cy+randomIntFromRange(-50,50)});
        }
        for (let j = 0; j < temp.length; j++){
            if ((pointInPolygon(P,temp[j].vPoint))){
                set = 0;
                i = i-1
            }
        }
        if (set)temp.push(new Polygon(P, color, 1, color,1));
    }
    return temp;
}

Array.prototype.addRandomPolygons = function(n){
    let temp = this;
    for (let i = 0; i < n; i++){
        let vertices = randomIntFromRange(3,3);
        let cx = randomIntFromRange(width-50)+50;
        let cy = randomIntFromRange(height-50)+50;
        let P = [];
        let fill = 0;
        let color = "yellow";
        let set = 1;

        
        if (Math.random>0.5){
            fill = 1;
        }
        
        for (let j = 0; j < vertices; j++){
            P.push({x: cx+randomIntFromRange(-50,50), y: cy+randomIntFromRange(-50,50)});
        }
        
        for (let j = 0; j < temp.length; j++){
            
            for (let k = 0; k < P.length; k++){
                if (pointInPolygon(P[k],temp[j].vertices)!=0){
                   
                    set = 0;
                    i = i-1;
                    k = P.length;
                    
                    j = temp.length;
                }
            }
        }
        
        if (set){
            temp.push(new Polygon(P));
        }
    }
   
}

Array.prototype.addRandomPolygons2 = function(n){
    
    const temp = this;

    for (let u = 0; u < n; u++){
        let set=1;
        const radius = randomIntFromRange(20,height/150);
        const vertices = randomIntFromRange(3,9);
        let angles = [];
        const cx = randomIntFromRange(radius+1,width-radius-1);
        const cy = randomIntFromRange(radius+1,height-radius-1);
       // console.log(cx,cy)
        let P = [];
        const variance = randomIntFromRange(0,radius/3);

        for (let i = 0; i < vertices; i++){
            const angle = Math.random()*Math.PI*2;
            if (angles.indexOf(angle)==-1){
                angles.push(angle);
            } else{
                i--;
            }
        }

        angles.sort(function (a,b){
            if (a<b){
                return -1;
            }
            if (a>b){
                return 1;
            }
            return 0;
        });
       // console.log(angles);
        
        for (let g = 0; g < vertices; g++){
            const d = randomIntFromRange(radius-variance, radius);
            let point = {};
            point.x = cx+Math.cos(angles[g])*d;
            point.y = cy+Math.sin(angles[g])*d;
            P.push(point);
        }

        // for (let j = 0; j < temp.length; j++){
                
        //     for (let k = 0; k < P.length; k++){
        //         if ((pointInPolygon(P[k],temp[j].vertices))){
                    
        //             set = 0;
        //             u = u-1
        //             k = P.length;
        //         }
        //     }
        // }
      //  console.log(P);
      
        if (set)temp.push(new Polygon(P));
      // if (set)console.log(new Polygon(P));
    }
        
       
 
        
   
}

function printLog(){
		let print = "";
		for (let j = 0; j < arguments.length; j++){
			if (typeof arguments[j] === 'object'){
				for (let i = 0; i < Object.keys(arguments[j]).length; i++){
					print = print + "" + Object.keys(arguments[j])[i] + ": " + Object.values(arguments[j])[i] + ", ";
				}
			} else{
				print = print + '"' + arguments[j] + '", ';
			}
			
		}
		print=print.slice(0,print.length-2);
		printDisplay(print);
}

function drawPolygon(){

}

// 0 on mousedown, 1 mouseup
function handleClick(e){
    if (e==0){
        
        let inP = 0;
        for (let arr of movables){
            for (let obj of arr){
                if (obj instanceof Polygon){
                    if (pointInPolygon(mouse, obj.vertices)){
                        obj.followMouse = 1;
                        inP = 1;
                        moving.push(obj);
                    }
                }
            }
        }
        if (!inP){
            if (isDrawing){
                if (tempPoints.length==0){
                    tempPoints.push(new Point(mouse.x, mouse.y));
                } else{
                    
                    if (pointInRadius(tempPoints[0], mouse, 10)){
                        if (tempPoints.length < 3){
                            tempPoints = [];
                        } else{
                            
                            polygons.push(new Polygon(tempPoints));
                            tempPoints = [];
                            raychecks.pop();
                            intersections = returnPolygonIntersect(polygons);
                            raychecks.push(intersections);
                        }
                    } else{
                        tempPoints.push(new Point(mouse.x, mouse.y));
                    }
                }
            }
            
        }
    } else if (e==1){
        if (moving.length!=0){
          for  (let obj of moving){
            obj.followMouse=0;
          }
          raychecks.pop();
          intersections = returnPolygonIntersect(polygons);
          raychecks.push(intersections);
          moving=[];
        }
    }
}

function clearCanvas() {
    polygons = [];
    raychecks = [];
    movables = [];
    moving = [];
    tempPoints = [];
    isDrawing=false;
    intersections = [];
    raychecks.push(walls);
    raychecks.push(polygons);
    raychecks.push(intersections);
    movables.push(polygons);
}
// Implementation

let walls = [];
let polygons = [];
let raychecks = [];
let source = {};
let movables = [];
let moving = [];
let tempPoints  = [];
let intersections = [];

// button variables
let isDarkMask = true;
let isRays = false;
let isCollisionPoints = false;
let isDrawing = false;
let isShadows = true;

function init(){

walls=[];
polygons = [];
raychecks = [];
source = {};
movables = [];
moving = [];
tempPoints  = [];
intersections = [];

isDarkMask = false;
isRays = false;
isCollisionPoints = false;
isDrawing = false;
isShadows = true;




    addEventListener("resize",function(){
        canvas.width = innerWidth;
        canvas.height= innerHeight;
    
        init();
    });
    // walls.push( new Boundary(200,200,100,100) );
   

    
    // polygons.push( new Polygon([{x: 200, y: 100},{x:300,y:100}, {x: 350, y:250}, {x: 150, y: 300}, {x: 150, y: 200}]));
    // polygons.push( new Polygon([{x: 000, y: 500},{x:500,y:100}, {x: 550, y:250}]));
    polygons.addRandomPolygons2(5);
    
    walls.push(new Boundary(0,0,width,0));
    walls.push(new Boundary(0,0,0,height));
    walls.push(new Boundary(width,0,width,height));
    walls.push(new Boundary(0,height,width,height));
    source = new Particle(10,10,1,1,0);
 //   source2 = new Particle(400,400,1,1,0);
    
    intersections = returnPolygonIntersect(polygons);
    
    raychecks.push(walls);
    raychecks.push(polygons);
    raychecks.push(intersections);
    movables.push(polygons);

}

canvas.addEventListener('mousedown', e => {
    handleClick(0);
});

canvas.addEventListener('mouseup', e => {
    handleClick(1);
})

document.getElementById("clear-canvas").addEventListener('click', e => {
    clearCanvas();
})

document.getElementById("toggle-darkmask").addEventListener('click', e => {
    isDarkMask=!isDarkMask;
    if (isDarkMask){
        e.target.className="btn active";
    } else{
        e.target.className="btn";
    }
})

document.getElementById("generate-ten").addEventListener('click', e => {
    polygons.addRandomPolygons2(10);
})

document.getElementById("toggle-rays").addEventListener('click', e => {
    isRays=!isRays;
    if (isRays){
        e.target.className="btn active";
    } else{
        e.target.className="btn";
    }
})

document.getElementById("toggle-collision-points").addEventListener('click', e => {
    isCollisionPoints=!isCollisionPoints;
    if (isCollisionPoints){
        e.target.className="btn active";
    } else{
        e.target.className="btn";
    }
})

document.getElementById("toggle-drawing").addEventListener('click', e => {
    isDrawing=!isDrawing;
    if (isDrawing){
        e.target.className="btn active";
    } else{
        e.target.className="btn";
    }
})

document.getElementById("toggle-shadows").addEventListener('click', e => {
    isShadows=!isShadows;
    if (isShadows){
        e.target.className="btn active";
    } else{
        e.target.className="btn";
    }
})

function animate(){
    
    requestAnimationFrame(animate);
    
    c.clearRect(0,0,canvas.width, canvas.height);
   

    source.update();
    polygons.forEach(polygon => polygon.update());
    walls.forEach(wall => wall.update());

   
    const visibleArea = source.look(raychecks, 0);
    if (isShadows){
        drawInvertPolygon(visibleArea[0].vertices, 0.8);    
    }
    

    if(isDarkMask) source.drawMasks();

    c.globalCompositeOperation="source-over";
    if (isCollisionPoints){
        drawDots(visibleArea[1]);
    }

    if (isRays){
        drawLines({x:mouse.x, y:mouse.y}, visibleArea[1])
    }

    drawTempPoly(tempPoints);
    c.fillStyle = "rgb(100,100,100)";
    c.fillText(`o`, mouse.x, mouse.y);
  //  drawDots(intersections);
    mouse.pastX = mouse.x;
    mouse.pastY = mouse.y;
    

}

init();
animate();
