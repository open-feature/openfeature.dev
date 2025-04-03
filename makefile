VOLUMES := -v $(CURDIR):$(CURDIR) -w $(CURDIR)
IMAGE := node:18-bullseye
PORT := -p 3000:3000

define DOCKER
docker run --rm $(VOLUMES) $(IMAGE) /bin/bash -c "corepack enable && $(1)"
endef

define DOCKER_I
docker run -ti --rm $(VOLUMES) $(PORT) $(IMAGE) /bin/bash -c "corepack enable && $(1)"
endef

.PHONY: all build serve clean test lint

all: yarn.lock

yarn.lock: package.json node_modules
	$(MAKE clean)
	$(call DOCKER,yarn install --immutable)

node_modules:
	mkdir -p $@

build: yarn.lock
	$(call DOCKER,yarn build)

version: yarn.lock
	$(call DOCKER,npx docusaurus --version)

start: yarn.lock
	$(call DOCKER_I,yarn run start -- --poll --host 0.0.0.0)

lint: yarn.lock
	$(call DOCKER,yarn run lint)

clean:
	rm -rf ./node_modules

test: build
	docker run -v $(CURDIR):/test --rm wjdp/htmltest -s -c .htmltest.yml build

