### Build Docker Image:

docker build -t ngangularpractices:dev -f Dockerfile.dev .

### Run Angular App Inside Docker:

docker run -it --rm -p 9001:5200 -v ${PWD}/src:/usr/src/app/src --name ngangularpractices ngangularpractices:dev

### Run Angular App Inside Docker With Dist Volume:

```
docker run -it --rm -p 9001:5200 -v ${PWD}/src:/usr/src/app/src -v ${PWD}/dist:/usr/src/app/dist --name ngangularpractices ngangularpractices:dev
```
