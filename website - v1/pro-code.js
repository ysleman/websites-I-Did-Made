
function move(){
  var page=document.getElementById('prge');
  var page1=document.getElementById('prge1');
  var page2=document.getElementById('prge2');
  var page3=document.getElementById('prge3');

  // You can create a const object:
  const names = {Python:"Python :60% - To Exeprt", CyberSecruity:"CyberSecruity : 20% - To interdim", Web:"Web : 60% - Create a Website" , Andriod: "Andriod : 100% - Just repeat some classes"};
  const namesprec = {Python:"60%", CyberSecruity:"20%", Web:"60%" , Andriod: "100%"};
  const colors12 = {Python:"#CC0000", CyberSecruity:"#330000", Web:"#009999" , Andriod: "#606060"};
  //make a varbirels arrays and each one of them will have one of code title
  page.style.width=namesprec.Python;
  page.innerHTML=names.Python;
  page.style.backgroundColor= colors12.Python;

  page1.style.width=namesprec.CyberSecruity;
  page1.innerHTML=names.CyberSecruity;
  page1.style.backgroundColor= colors12.CyberSecruity;

  page2.style.width=namesprec.Web;
  page2.innerHTML=names.Web;
  page2.style.backgroundColor= colors12.Web;

  page3.style.width=namesprec.Andriod;
  page3.innerHTML=names.Andriod;
  page3.style.backgroundColor= colors12.Andriod;
}
