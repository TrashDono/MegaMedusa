import os
import sys

os.system('pkg install openjdk-17')
os.system('pkg install nodejs-lts')
os.system('pkg install qb64')
os.system('npm i')
os.system('node MegaMedusa.js')
print(f"\x1b[31m[\x1b[33mMedusa\x1b[31m]\x1b[0m \x1b[32m> \x1b[33mInstallation Successful")
