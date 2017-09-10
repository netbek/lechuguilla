import os

from react.render import render_component

rendered = render_component(
    os.path.join(os.getcwd(), 'components', 'Foo.jsx'),
    {
        'foo': 'bar',
        'woz': [1, 2, 3]
    }
)

print(rendered)
