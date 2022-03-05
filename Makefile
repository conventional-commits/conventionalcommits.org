all: compile-assets compile-site
all-dev: compile-assets-dev rebuild-node-sass serve-site-dev

compile-assets:
	echo "Compiling assets"
	cd themes/conventional-commits && npm install && npm run build
	echo "Assets compiled"

compile-assets-dev:
	echo "Compiling assets"
	cd themes/conventional-commits && npm install && npm run start &

compile-site:
	echo "Generating static website"
	hugo
	echo "Website generated"

rebuild-node-sass:
	echo "Rebuilding node sass"
	cd themes/conventional-commits && npm rebuild node-sass
	echo "node sass rebuilt"

serve-site-dev:
	echo "Serving website"
	hugo serve --bind=0.0.0.0