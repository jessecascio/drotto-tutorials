
import os from 'os';
import { Executor } from 'drotto';

/**
 * TUTORIAL 5
 *   Force kill workers prior to job completion
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
    const result = executor.invoke(fn, [500000000]);
  } catch (e) {
    console.log('Exception', e);
  }

  console.log('force quit...');
  executor.shutdownNow(); // kill processes

})();
