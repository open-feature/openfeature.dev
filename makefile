
VOLUMES := -v $(CURDIR):$(CURDIR) -w $(CURDIR)
IMAGE := node:18-bullseye
PORT := -p 3000:3000
DOCKER := docker run --rm $(VOLUMES) $(IMAGE)
DOCKER_I := docker run -ti --rm $(VOLUMES) $(PORT) $(IMAGE)

.PHONY: all build serve clean test lint

all: yarn.lock

yarn.lock: package.json node_modules
	$(MAKE clean)
	$(DOCKER) yarn install --immutable

node_modules:
	mkdir -p $@

build: yarn.lock
	$(DOCKER) yarn build

version: yarn.lock
	$(DOCKER) npx docusaurus --version

start: yarn.lock
	$(DOCKER_I) yarn run start -- --poll --host 0.0.0.0

lint: yarn.lock
	$(DOCKER) yarn run lint

clean:
	rm -rf ./node_modules

test: build
	docker run -v $(CURDIR):/test --rm wjdp/htmltest -s -c .htmltest.yml build

