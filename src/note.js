const [color,setcolor]= useState();
    const [color1,setcolor1]= useState();

    function colorHandler(){
    const value= document.getElementById('colorBox').value;
    setcolor(value);

    document.body.style.backgroundColor=color;   
}
function colorHandler2(){
  const value1= document.getElementById('colorBox1').value;
  setcolor1(value1);
  document.getElementById('nav1').style.backgroundColor=color1;   
  
}
document.getElementById('nav1').style.backgroundColor=color1;   
