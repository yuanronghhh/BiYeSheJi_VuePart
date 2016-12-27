SRC_DIR = src
MAIN = $(SRC_DIR)/app.js
LISTEN_SERVER = "localhost:5858"
DEV_SERVER = build/dev-server.js
BUILD = build/build.js

debug:
	@start cmd /k node --debug-brk $(DEV_SERVER) $(LISTEN_SERVER)
	@node debug $(LISTEN_SERVER)

dev:
	@node $(DEV_SERVER)

build:
	@node $(BUILD)

.PHONY: debug build dev
