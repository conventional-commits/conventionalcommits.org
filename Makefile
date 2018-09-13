all: compile-assets compile-site
all-dev: rebuild-node-sass compile-assets-dev serve-site-dev

compile-site:
	echo "Generating static website"
	hugo
	echo "Website generated"

serve-site-dev:
	echo "Serving website"
	hugo serve --bind=0.0.0.0

compile-assets:
	echo "Compiling assets"
	cd themes/conventional-commits && npm install && npm run build
	echo "Assets compiled"

compile-assets-dev:
	echo "Compiling assets"
	cd themes/conventional-commits && npm install && npm run start &

rebuild-node-sass:
	echo "Rebuilding node sass"
	cd themes/conventional-commits && npm rebuild node-sass
	echo "node sass rebuilt"

