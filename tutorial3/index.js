
import os from 'os';
import { Executor } from 'drotto';

/**
 * TUTORIAL 3
 *   Handling function exceptions
 */

(async () => {
  // obtain an Executor instance
  const executor = Executor.fixedPool(os.cpus().length - 1);
  
  // cpu bound function
  const fn = (max) => {
    throw new Error('Uh oh');
    return max;
  };

  try {
    const result = await executor.invoke(fn, [500000000]);
    console.log(`Finished ${result} iterations...`);
  } catch (e) {
    // exceptions will bubble up
    console.log('Exception Message', e.message);
    console.log('Exception Stack Trace', e.stack);
  }

  executor.shutdown(); // stop processes

})();
