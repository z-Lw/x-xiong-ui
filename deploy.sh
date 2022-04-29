rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:z-Lw/xiong-ui-website.git &&
git push -u origin main &&
cd -
