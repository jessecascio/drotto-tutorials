
import os from 'os';
import { Executor } from 'drotto';

/**
 * TUTORIAL 2
 *   Waiting for a CPU bound function to complete
 */

(async () => {
  // obtain an Executor instance
  const executor = Executor.fixedPool(os.cpus().length - 1);
  
  // cpu bound function
  const fn = (max) => {
    for (let i = 0; i < max; i++) { }
    return max;
  };

  try {
    console.log('Starting work...');
    // awaiting execution (will NOT block the event loop)
    const result = await executor.invoke(fn, [500000000]);
    console.log(`Finished ${result} iterations...`);
  } catch (e) {
    console.log('Exception', e);
  }
  
  executor.shutdown(); // stop processes

  console.log('waited...');

})();
