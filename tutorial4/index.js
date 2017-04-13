
import os from 'os';
import { Executor } from 'drotto';

/**
 * TUTORIAL 4
 *   Keeping main thread alive by not shuting down workers
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
    const result = await executor.invoke(fn, [500000000]);
    console.log(`Finished ${result} iterations...`);
  } catch (e) {
    console.log('Exception', e);
  }

  console.log('Main thread continues to live...');

})();
