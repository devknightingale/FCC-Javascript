 /* My first instinct was to do this in dot notation as "obj.checkProp" but that didn't work. I'm still not 100% sure why on that end. I looked up how to access 
 an object's properties and the site I went to made it seem as thought dot notation would work just as well as bracket notation. So I'm not really sure why it 
 didn't work before. Maybe dot notation only works if you have the exact property you want to look up? */

function checkObj(obj, checkProp) {
  // Only change code below this line
   if (obj.hasOwnProperty(checkProp) == true) {
  return obj[checkProp];
   }
   else { 
     return "Not Found"
   }
  // Only change code above this line
}
