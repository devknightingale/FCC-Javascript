let count = 0;

function cc(card) {
  // Only change code below this line
  
  // PROCESS: 
  // I actually started writing this as an if statement at first before I realized how longwinded that would be. It'd been a few days since I'd last worked 
  // on the course, so I had to google the switch syntax again as I couldn't remember exactly how it went off the top of my head. I could remember the case
  // bit, but not what the thing was actually called... 
  
  switch(card) {
    case 2:
    case 3: 
    case 4: 
    case 5:
    case 6: 
      count++;
      break; 
    case 7: 
    case 8: 
    case 9: 
      count += 0; 
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A': 
      count--; 
      break;
      
      
  }
  
  // COMMENTS:
  // This part stumped me for a while. I initially had the return statements in the actual case statements, which worked for all but 2 of the tests on FCC. 
  // Couldn't figure out why it wasn't working properly for a good ten minutes, and thought maybe I was just misunderstanding something, so I googled again. 
  // Found someone else's solution which did have the case statement, but then had a weird if/else if for the return statements that I couldn't quite figure 
  // out the purpose of as far as why they'd written it that way. But clearly theirs worked, and mine didn't, so I pulled the return statements out to put 
  // in the if/else below and.. voila. It works! 
  //
  // In the end, I feel kind of embarrassed that I had to google to figure that part out. 
  // But at the same time, in earlier code problems like the Golfing one, I had to look at someone's else solution to even figure out what I was supposed to 
  // be doing at all. So despite me still needing a bit of help with this last part, I did a lot better on this problem than previous ones. Baby steps? 
  if (count > 0) {
    return count + " " + "Bet"; 
  }
  else {
    return count + " " + "Hold"
  }
  }
