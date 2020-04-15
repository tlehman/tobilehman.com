all: hugo

clean:
	rm -rf public

publish: hugo sync

sync:
	aws2 s3 sync --delete public s3://tobilehman.com

hugo:
	hugo

post:
	./new_post.sh
