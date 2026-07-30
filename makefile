
VOLUMES := -v $(CURDIR):$(CURDIR) -w $(CURDIR)
IMAGE := node:24-bullseye
PORT := -p 3000:3000
DOCKER := docker run --rm $(VOLUMES) $(IMAGE)
DOCKER_I := docker run -ti --rm $(VOLUMES) $(PORT) $(IMAGE)

# container runs as root while repo is owned by host user; allow git to run here
SETUP := git config --global --add safe.directory '*' && corepack enable

.PHONY: all build serve clean test lint

all: yarn.lock

yarn.lock: package.json node_modules
	$(MAKE clean)
	$(DOCKER) sh -c "$(SETUP) && yarn install --immutable"

node_modules:
	mkdir -p $@

build: yarn.lock
	$(DOCKER) sh -c "$(SETUP) && yarn build"

version: yarn.lock
	$(DOCKER) sh -c "$(SETUP) && npx docusaurus --version"

start: yarn.lock
	$(DOCKER_I) sh -c "$(SETUP) && yarn run start -- --poll --host 0.0.0.0"

lint: yarn.lock
	$(DOCKER) sh -c "$(SETUP) && yarn run lint"

clean:
	rm -rf ./node_modules

test: build
	docker run -v $(CURDIR):/test --rm wjdp/htmltest -s -c .htmltest.yml build

