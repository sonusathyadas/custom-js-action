const core = require('@actions/core');

async function run() {
  try {
    // 1. Get the input defined in action.yml
    const nameToGreet = core.getInput('name');
    
    // 2. Perform the logic
    const greeting = `Hello, ${nameToGreet}! 👋`;
    console.log(greeting);

    // 3. Set the output for other steps
    core.setOutput('greeting', greeting);
    
  } catch (error) {
    // 4. Fail the action if something goes wrong
    core.setFailed(`Action failed with error: ${error.message}`);
  }
}

run();