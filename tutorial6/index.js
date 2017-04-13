
import os from 'os';
import { Executor } from 'drotto';

/**
 * TUTORIAL 6
 *   Invoke multiple functions, waiting for all to complete
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
    console.log('Running four functions...');

    const promises = executor.invokeAll([fn, fn, fn, fn], [[40000000], [20000000], [60000000], [30000000]]);
    const results = await Promise.all(promises);

    console.log('Finished all iterations...', results);
  } catch (e) {
    console.log('Exception Message', e.message);
    console.log('Exception Stack Trace', e.stack);
  }

  executor.shutdown();

})();
