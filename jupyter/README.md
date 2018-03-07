### Jupyter Notebook Server
Executing `./run` serves a jupyter notebook from the directory `jupyter/notebooks`
on port 8888 which is rendered through an `<iframe>` from the server index
`views/index.ejs`. The functions under `jupyter/custom/custom.js` and
`public/js/jupyter.js` set up communication between the jupyter server
and the index page.
