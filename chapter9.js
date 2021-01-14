// Fill in the regular expressions

verify(/ca(r|t)/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(/p(o|ro)p/,
       ["pop culture", "mad props"],
       ["plop", "prrrop"]);

verify(/ferr(et|y|ari)/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/ious\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/\s(\.|,|:|;)+/,
       ["bad punctuation ."],
       ["escape the period"]);

verify(/w{7}/,
       ["Siebentausenddreihundertzweiundzwanzig"],
       ["no", "three small words"]);

verify(/\b[^\We]+\b/i,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape", "BEET"]);

function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  console.log('Regexpression :',regexp)
  for (let str of yes) 
    if (!regexp.test(str)) {
    	console.log(`Failure to match '${str}'`);
  	}
  	else
    {
      console.log(`Acept to match '${str}'`)
    }
  
  for (let str of no) 
    if (regexp.test(str)) {
      console.log(`Unexpected match for '${str}'`);
    }
  	else {
      console.log(`Denied for the match for '${str}'`);
    }
}
