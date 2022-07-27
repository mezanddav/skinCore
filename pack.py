import shutil

node_modules = [
    'underscore/underscore-min.js'
]

for module in node_modules:
    shutil.copy('node_modules/'+ module, 'assets/js/')