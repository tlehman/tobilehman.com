all: hugo

clean:
	rm -rf public

static: hugo
	echo "Copying static files in public/ to ../tlehman.github.io/"
	rsync -r public/ ../tlehman.github.io/ && (cd ../tlehman.github.io/ && git add .)

hugo:
	hugo

post:
	./new_post.sh
