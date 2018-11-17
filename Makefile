all: hugo

clean:
	rm -rf public

publish: hugo sync

sync:
	aws s3 sync --delete public s3://tobilehman.com

hugo:
	hugo
