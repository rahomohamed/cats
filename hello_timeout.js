str = '4311o th3r3 w0r1d'; 
newstr = str.split(' ');

for (let i = 0; i < newstr.length; i++) {
setTimeout(() => {
  console.log(newstr[i]);
}, 1000 * i); }
