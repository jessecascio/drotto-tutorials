
import os from 'os';
import { Executor } from 'drotto';

/**
 * TUTORIAL 7
 *   Invoke multiple functions, waiting for first to
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

    const promises = executor.invokeAll([fn, fn, fn, fn], [[400000000], [200000000], [600000000], [300000000]]);
    const result = await Promise.race(promises);

    console.log('Finished an iteration...', result);
  } catch (e) {
    console.log('Exception Message', e.message);
    console.log('Exception Stack Trace', e.stack);
  }

  executor.shutdown();

})();
