/****************************************************************************************************
* What is Scope Pollution - When you have too many global variables that exist in the global        *
* namespace, or when we use reuse varaibles across different scopes.                                *
* Scope Pollution makes it difficult to keep track of our different variables and sets us up        *
* for potential accidents. For example, globally scoped variables can collide with other variables  *
* that are more locally scoped, causing unexpected behavior in our code.                            *
* it's best to not define globally scoped variables, but we must know what they are.                *
****************************************************************************************************/
// bad scoping
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
    // we rename the stars to 'Sirius'
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};


console.log(callMyNightSky());
// we console.log stars which changes the value of stars to 'Sirius because we renamed it in line 15
console.log(stars)

// Block scope is a powerful tool, if the variable does not need to exisit it shouldn't exist.

// Good scoping


const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
      let region = 'The Arctic';
    // Add if statement here:
    if (region === 'The Arctic'){
      let lightWaves = 'Northern Lights';
      console.log(lightWaves);
    }
    console.log(lightWaves);
  };
  
  logVisibleLightWaves();

  // each block variable is scoped to it's block no globally scoped variables.