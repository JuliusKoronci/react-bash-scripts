# Bash scripts to generate React boilerplate's

Currently there is only one script module.sh -- you can either use it directly or set up in the scripts section e.g. 
something like module:create

Generated folder structure.

```
src
    modules
        actions
            ${NAME}Actions.js
        components
            .gitingore
        constants
            ${NAME}Constants.js
        containers
            ${NAME}.js
        reducers
            ${NAME}Reducer.js
        index.js

```

The files are pre-generated with default values, they should work out of the box.

!NOTE: The script is tested only on MAC and created for my personal need but feel free to use :)