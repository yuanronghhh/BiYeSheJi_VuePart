SRC_DIR = src
MAIN = $(SRC_DIR)/app.js
LISTEN_SERVER = "localhost:5858"
DEV_SERVER = build/dev-server.js
BUILD = build/build.js

dev:
	@node $(DEV_SERVER)

debug:
	@start cmd /k node --debug-brk $(DEV_SERVER) $(LISTEN_SERVER)
	@node debug $(LISTEN_SERVER)

build:
	@node $(BUILD)

cmt: 
	@git add .
	@git commit -m "update"

.PHONY: debug build dev cmt
