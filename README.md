# drotto Tutorials

[Drotto](https://github.com/jessecascio/drotto) is a lightweight NodeJS process pool, allowing for CPU bound workload parallelization across multiple CPU cores.

## Use

**NOTE:** Tutorials are run with `babel-node` which is an on the fly Babel compilation process with poor performance.  Do not equate tutorial performance to library performance.

```shell
$ npm i
$ npm start -- tutorial1
```

## Tutorials

* [Tutorial 1](https://github.com/jessecascio/drotto-tutorials/blob/master/tutorial1/index.js) - Single function parralelization

* [Tutorial 2](https://github.com/jessecascio/drotto-tutorials/blob/master/tutorial2/index.js) - Single function parralelization, waiting for job completion 

* [Tutorial 3](https://github.com/jessecascio/drotto-tutorials/blob/master/tutorial3/index.js) - Handeling function exceptions

* [Tutorial 4](https://github.com/jessecascio/drotto-tutorials/blob/master/tutorial4/index.js) - Keeping main thread alive

* [Tutorial 5](https://github.com/jessecascio/drotto-tutorials/blob/master/tutorial5/index.js) - Force kill workers prior to job completion

* [Tutorial 6](https://github.com/jessecascio/drotto-tutorials/blob/master/tutorial6/index.js) - Multi function parralelization, waiting for all jobs to complete

* [Tutorial 7](https://github.com/jessecascio/drotto-tutorials/blob/master/tutorial7/index.js) - Multi function parralelization, waiting for first job to complete
