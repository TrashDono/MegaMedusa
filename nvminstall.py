import os
import sys


os.system('pkg update -y && pkg install wget curl proot tar -y && wget https://raw.githubusercontent.com/AndronixApp/AndronixOrigin/master/Installer/Debian/debian.sh -O debian.sh && chmod +x debian.sh && bash debian.sh')
os.system('apt install npm')
os.system('sudo apt install curl ')
os.system('curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash')
os.system('source ~/.bashrc')
os.system('nvm install --lts')
os.system('source ~/.bashrc')

print(f"\x1b[31m[\x1b[33mMedusa\x1b[31m]\x1b[0m \x1b[32m> \x1b[33mInstallation Successful")
