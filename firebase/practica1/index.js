const a=["bGlzdGE=","YmxvY2s=","I2l0ZW0tdGFibGUgdGJvZHk=","YWRkRXZlbnRMaXN0ZW5lcg==","bm9tYnJl","cHJldmVudERlZmF1bHQ=","ZGF0YWJhc2VVUkw=","Zm9jdXM=","dGFyZ2V0","aHR0cHM6Ly9zaXN0ZW1hc2dlb3JlZjY1NzQ2LmZpcmViYXNlaW8uY29t","MTo2ODYwMjQ2ODg4MTp3ZWI6NjBkNzIwZjM3YWYzMzNkN2YyYWZiMA==","c3R5bGU=","cHJvZHVjdG9z","YXBwSWQ=","Y29sbGVjdGlvbg==","Zm9ybXVsYXJpbw==","Y29kaWdv","ZmFy","ZmEtdHJhc2gtYWx0","dHlwZQ==","cmVtb3Zl","YnRuLWRhbmdlcg==","Y2xpY2s=","Z2V0QXR0cmlidXRl","ZGF0YQ==","QUl6YVN5Q1R2dTVOZDZLcENzRUZ2dmVKLUt5enhKTVN1M0dXc2Zv","YXBpS2V5","bWVzc2FnaW5nU2VuZGVySWQ=","ZG9jQ2hhbmdlcw==","c2lzdGVtYXNnZW9yZWY2NTc0Ni5hcHBzcG90LmNvbQ==","ZGVsZXRl","Z2V0RWxlbWVudEJ5SWQ=","ZG9j","Y3JlYXRlRWxlbWVudA==","YXBwZW5kQ2hpbGQ=","YWRkZWQ=","cmVtb3ZlZA==","cHJvamVjdElk","cGFyZW50RWxlbWVudA==","Zm9yRWFjaA==","c2NyaXB0W3NyYz0iaW5kZXguanMiXQ==","b25TbmFwc2hvdA==","c3RvcmFnZUJ1Y2tldA==","dmFsdWU=","aW5pdGlhbGl6ZUFwcA==","YnV0dG9u","cmVtb3ZlQ2hpbGQ=","YWRk","c2lzdGVtYXNnZW9yZWY2NTc0Ng==","ZGlzcGxheQ==","c3VibWl0","bm93","Njg2MDI0Njg4ODE=","c3Bhbg==","cXVlcnlTZWxlY3Rvcg==","c2lzdGVtYXNnZW9yZWY2NTc0Ni5maXJlYmFzZWFwcC5jb20=","Y2xhc3NMaXN0"];!function(b,t){!function(t){for(;--t;)b.push(b.shift())}(++t)}(a,321);const b=function(t,x){let c=a[t-=0];void 0===b.jBESKY&&(!function(){let b;try{b=Function('return (function() {}.constructor("return this")( ));')()}catch(t){b=window}b.atob||(b.atob=function(b){const t=String(b).replace(/=+$/,"");let x="";for(let b,c,o=0,n=0;c=t.charAt(n++);~c&&(b=o%4?64*b+c:c,o++%4)?x+=String.fromCharCode(255&b>>(-2*o&6)):0)c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(c);return x})}(),b.mcAqFy=function(b){const t=atob(b);let x=[];for(let b=0,c=t.length;b<c;b++)x+="%"+("00"+t.charCodeAt(b).toString(16)).slice(-2);return decodeURIComponent(x)},b.sMXPAV={},b.jBESKY=!0);const o=b.sMXPAV[t];return void 0===o?(c=b.mcAqFy(c),b.sMXPAV[t]=c):c=o,c},c={};c[b("0x2f")]=b("0x2e"),c.authDomain=b("0x13"),c[b("0x1b")]=b("0x1e"),c[b("0x1")]=b("0xc"),c[b("0x6")]=b("0x32"),c[b("0x30")]=b("0x10"),c[b("0x22")]=b("0x1f"),firebase[b("0x8")](c);const listaProductos=document[b("0x34")](b("0x15")),db=firebase.firestore(),tabla=document[b("0x12")](b("0x17")),formulario=document[b("0x34")](b("0x24"));let lts=0,numPetis=0;function renderProductos(t){let x=document[b("0x36")]("tr"),c=document[b("0x36")](b("0x11")),o=document.createElement(b("0x11")),n=document.createElement(b("0x9")),d=document[b("0x36")]("i"),e=document[b("0x36")]("td"),l=document[b("0x36")]("td"),m=document[b("0x36")]("td");c.textContent=t[b("0x2d")]()[b("0x19")],o.textContent=t[b("0x2d")]().codigo,d[b("0x14")][b("0xb")](b("0x26")),d[b("0x14")][b("0xb")](b("0x27")),n.appendChild(d),n.classList[b("0xb")]("btn"),n[b("0x14")][b("0xb")](b("0x2a")),n[b("0x18")](b("0x2b"),t=>{let x=t[b("0x1d")][b("0x2")][b("0x2")][b("0x2c")]("id");db[b("0x23")](b("0x21"))[b("0x35")](x)[b("0x33")]()}),e[b("0x37")](c),l[b("0x37")](o),m[b("0x37")](n),x.id=t.id,x[b("0x37")](e),x[b("0x37")](l),x[b("0x37")](m),tabla[b("0x37")](x)}formulario[b("0x18")](b("0xe"),t=>{if(t[b("0x1a")](),numPetis>=10)return document[b("0x12")](".warning-overlay")[b("0x20")][b("0xd")]=b("0x16"),void(document[b("0x12")](b("0x4"))&&document[b("0x12")](b("0x4"))[b("0x29")]());if(formulario[b("0x19")].value&&formulario.codigo[b("0x7")])if(lts<=Date[b("0xf")]()-900){const t={};t[b("0x19")]=formulario[b("0x19")][b("0x7")],t.codigo=formulario[b("0x25")][b("0x7")],db.collection("productos")[b("0xb")](t),formulario.nombre[b("0x7")]="",formulario[b("0x25")][b("0x7")]="",lts=Date[b("0xf")](),formulario[b("0x19")][b("0x1c")]()}else numPetis++}),db[b("0x23")](b("0x21"))[b("0x5")](t=>{t[b("0x31")]()[b("0x3")](t=>{t.type===b("0x38")?renderProductos(t[b("0x35")]):t[b("0x28")]===b("0x0")&&tabla[b("0xa")](document.getElementById(t[b("0x35")].id))})});