set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/rhinolee/Gas_station.git master:gh-pages

cd -