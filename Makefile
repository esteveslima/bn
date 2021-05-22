up:
	npm run docker:up
clean-up:
	npm run docker:up:clean

down:
	npm run docker:down
clean-down:
	npm run docker:down:clean
clear:
	npm run clear

rebuild:
	npm run docker:down && npm run docker:up

sh:
	npm run docker:sh
bash:
	npm run docker:bash
