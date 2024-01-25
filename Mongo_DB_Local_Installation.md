
```
https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/
```

check for **focal** or **jammy** (version)
```
cat /etc/lsb-release
```
focal 20.0* & jammy 22.0*

install gnupg and curl
```
sudo apt-get install gnupg curl
```
install apt key (deprecated for later versions of debian)
```
curl -fsSL https://pgp.mongodb.com/server-7.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
   --dearmor
```
check/create list file (apt req) for mongodb (focal)
```
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
```
cat to ensure it's there
```
cat /etc/apt/sources.list.d/mongodb-org-7.0.list
```

output on focal 
```
db-org-7.0.list 
deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/7.0 multiverse
```

do update
```sudo apt-get update```

install
```sudo apt-get install -y mongodb-org```

note in url about apt-get always getting new packages
```Optional. Although you can specify any available version of MongoDB, `apt-get` will upgrade the packages when a newer version becomes available. To prevent unintended upgrades, you can pin the package at the currently installed version:

```echo "mongodb-org hold" | sudo dpkg --set-selections
echo "mongodb-org-database hold" | sudo dpkg --set-selections
echo "mongodb-org-server hold" | sudo dpkg --set-selections
echo "mongodb-mongosh hold" | sudo dpkg --set-selections
echo "mongodb-org-mongos hold" | sudo dpkg --set-selections
echo "mongodb-org-tools hold" | sudo dpkg --set-selections
```

use systemd (systemctl) to start mongo
```
sudo systemctl start mongod
```
verify
```
sudo systemctl status mongod
```
start session
```
mongosh
```