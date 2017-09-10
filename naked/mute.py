import json
import sys

from Naked.toolshed.shell import muterun_js

args = json.dumps({
    'data': [
        {'name': 'Jane', 'surname': 'Doe'},
        {'name': 'John', 'surname': 'Doe'}
    ]
})

response = muterun_js('scripts/hello.js', args)

if response.exitcode == 0:
    print(response.stdout)
else:
    sys.stderr.write(response.stderr)
