buster-amd-example
==================

Uses buster.js for testing AMD modules.

I want the test code in a separate folder from the production code.

This mean the baseUrl is differen when running in production and in test mode.

The trick, which I learning from Tiago Rodrigues, is to add a custom configuration
object for require.js when it is run by buster. It should contain a paths property
which remaps the paths to the production code. If the code is stored in sub-modules
you just have to remap the paths to the modules.


