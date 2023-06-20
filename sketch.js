const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//facilitar a sua vida
const Body = Matter.Body;

var engine, world, ground;
var solo, parado;
var cenario;
var torre, torreIMG;
//criando uma variável 


function preload(){
    //carrega imagem
   cenario = loadImage("fundo.gif");
}


function setup() {
    canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    angleMode(DEGREES)

    //criar um objeto da classe Torre
    torre = new Torre(160,350,150,310);
    //criar objeto canhao da classe Canhao
    canhao = new Canhao(160,140)
}

function draw() {
    Engine.update(engine);
    background("cyan");
    image (cenario,600,300,1200,600);
    canhao.show();
    torre.show();
   
}
