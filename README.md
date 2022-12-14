
# HyperEnforce
HyerperEnforce is a tool for runtime enforcement of hyperproperties.
It takes two inputs (1) an extended plant, and (2) a hyper-automaton,
and synthesizes a controller with minimal cost.

HyperEnforce consists of three components:
- 1_buildModel: build formal representation of a JS script.
- 2_synth_symbolic: synthesize controller.
- 3_enforce: enforce JS script using Jalangi.

## Installation
Our tool includes ExpoSE and Jalangi to run the JS benchmarks.
Please follow the following step to configure:

### Step 1: install ExpoSE

Please see (https://github.com/ExpoSEJS/ExpoSE) for the requirements of ExpoSE.
```
cd 1_buildModel
npm install
cd ..
```


### Step 2: install synthesis tool
See README in 2_synth_symbolic/ for details.
```
cd 2_synth_symbolic
poetry install
cd ..
```


### Step 3: install Jalangi
Please see (https://github.com/Samsung/jalangi2) for the requirements of Jalangi.
```
cd 3_enforce
npm install
cd ..
```

By completing steps 1 to 3,  you are ready to use HyperEnforce!

### Run our tests

<!-- we provided several tests... -->

The obfuscation example can be run with the script `run_obfuscation_ex.sh`

### Usage

<!-- to run HyperEnforce on your JS script and hyperautomaton... -->

