all: npm bower grunt


npm: npmInstall npmUpdate

npmInstall:
	npm install

npmUpdate:
	npm update


bower: bowerInstall bowerUpdate

bowerInstall:
	bower install

bowerUpdate:
	bower update


grunt:
	grunt


clean:
	grunt clean