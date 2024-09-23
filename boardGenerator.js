/***************************/
/*  Author:  Jimmy Styles  */
/*  Support: Bludoid       */
/*  Date:    Sept 22/24    */
/***************************/

let columns = 8;
let squareSize = 40;
const r = document.querySelector(':root');
const rs = getComputedStyle(r);

function getId(ele)         { return document.getElementById(ele); }
function getClasses(ele)    { return document.getElementsByClassName(ele);}
function setWidth(pxls)     { r.style.setProperty('--sqWidth', pxls)}       // changes CSS variable in :root 
function refreshWidth(pxls) { refresh(getId("columns").value, pxls);}       // called from HTML width input
function setColumns(c)      { r.style.setProperty('--columns', c)}          // changes CSS variable in :root
function refreshColumns(c)  { refresh(c, getId("squareSize").value);}       // called from HTML columns input

// clear board and start over with columns and 
function refresh(cols, width){

    const board=getId("board");
    let i=1;
    let row=1;

    setColumns(cols);
    setWidth(width + "px");
    board.innerHTML="";

    while(i<=cols**2){
        const square = document.createElement("div");
        square.classList="square";
        square.id=i;
        if(cols%2) { square.style= (i%2)? "background:grey": "background:white"; }      // odd rows
        else{
            if(row%2)   {square.style=(i%2)?"background:white": "background:grey"; }    // even rows
            else        {square.style=(i%2)?"background:grey": "background:white"; }    // alternate colour pattern
        }
        board.appendChild(square);
        if (!(i%cols)){
            row++;
            board.appendChild(document.createElement("br"));
        }   i++;
    }
}

// set default values for HTML inputs
// and CSS variables for width and columns
getId("columns").value= columns;
setColumns(columns);
getId("squareSize").value= squareSize;
setWidth(squareSize + "px");
refresh(columns, squareSize);