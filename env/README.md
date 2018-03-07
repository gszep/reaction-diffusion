### Virtual Environment
Install the python virtual enviroment package for your user, then
create an environment named `env` running Python 2.7. Activate the environment.
Any python packages are now installed using `pip install`.
```bash
pip install --user virtualenv
virtualenv -p /usr/bin/python env
source env/bin/activate
```
With the enviroment activated, install NodeJS and append its virtual enviroment
wrapper to the currently activated enviroment. Make sure to deactivate/activate
the enviroment for changes to take effect.
```bash
pip install nodeenv
nodeenv -p
deactivate; source env/bin/activate
```
All required modules are then installed using `npm` or `pip`.
```bash
npm install -g express ejs http-server
pip install jupyter scipy numpy matplotlib
```
