import os
import sys

os.system('apt install npm')
os.system('sudo apt install curl ')
os.system('curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash')
os.system('nvm install --lts')

print(f"\x1b[31m[\x1b[33mMedusa\x1b[31m]\x1b[0m \x1b[32m> \x1b[33mInstallation Successful")
