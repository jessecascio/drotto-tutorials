
import os from 'os';
import { Executor } from 'drotto';

/**
 * TUTORIAL 1
 *   Execute a CPU bound function asynchronously
 */

(async () => {
  // obtain an Executor instance
  const executor = Executor.fixedPool(os.cpus().length - 1);
  
  // invoke cpu bound function with param
  const p = executor.invoke(max => {
    for (let i = 0; i < max; i++) { }
    return max;
  }, [500000000]);

  // handle promise
  p.then(result => {
    console.log(`Finished ${result} iterations...`);
    executor.shutdown(); // stop processes
  }).catch(e => {
    console.log('Exception', e);
    executor.shutdown(); // stop processes
  });

  console.log('asynchronous execution...');

})();
