import os
import subprocess

APP_ROOT = os.path.dirname(os.path.realpath(__file__))
CASPER = "\"/Path to/casperjs/file\""
SCRIPT = os.path.join(APP_ROOT,'index.js')

params = CASPER + ' ' + SCRIPT

print (subprocess.check_output(params, shell=True))