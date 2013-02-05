# node-http-perf

**Disclaimer:** Benchmarking is hard. Please let me know where I fucked this
one up.

This repository contains a benchmark for node's http parser (just the parser,
no networking), for the popular "hello world" vanity benchmark.

The http request is in fixtures/get.http and contains 611 bytes, 1 status line
and 8 headers. 

In order to have a "control group", I have implemented a fast, but very
incomplete, parser in `lib/js_http_parser.js`. However, it is able to parse the
headers of the fixture correctly, so it can serve as an interesting data point.

# results

**node-http.js:**

```
benchmark number duration time          rss      heapUsed heapTotal nodeVersion v8Version  bytes headers iterations
node-http 1      713      1360061050451 18325504 4044696  9227008   0.8.18      3.11.10.25 611   16      100000
node-http 2      732      1360061051192 21856256 4934712  12356096  0.8.18      3.11.10.25 611   16      100000
node-http 3      728      1360061051920 22994944 4927376  13388032  0.8.18      3.11.10.25 611   16      100000
node-http 4      731      1360061052651 22994944 8064136  13388032  0.8.18      3.11.10.25 611   16      100000
node-http 5      735      1360061053386 22994944 5965768  13388032  0.8.18      3.11.10.25 611   16      100000
node-http 6      736      1360061054122 23003136 5933848  13388032  0.8.18      3.11.10.25 611   16      100000
node-http 7      730      1360061054853 23003136 3836088  13388032  0.8.18      3.11.10.25 611   16      100000
node-http 8      726      1360061055579 23003136 9010648  13388032  0.8.18      3.11.10.25 611   16      100000
node-http 9      730      1360061056309 23003136 6912552  13388032  0.8.18      3.11.10.25 611   16      100000
node-http 10     731      1360061057040 23027712 4814544  13388032  0.8.18      3.11.10.25 611   16      100000
node-http 11     726      1360061057766 23031808 4780416  13388032  0.8.18      3.11.10.25 611   16      100000
node-http 12     725      1360061058491 23031808 2678552  13388032  0.8.18      3.11.10.25 611   16      100000
node-http 13     725      1360061059216 23031808 7857144  13388032  0.8.18      3.11.10.25 611   16      100000
node-http 14     725      1360061059941 23031808 5759200  13388032  0.8.18      3.11.10.25 611   16      100000
node-http 15     725      1360061060666 23031808 5724656  13388032  0.8.18      3.11.10.25 611   16      100000
node-http 16     727      1360061061393 23031808 3625328  13388032  0.8.18      3.11.10.25 611   16      100000
node-http 17     726      1360061062119 23031808 6737472  13388032  0.8.18      3.11.10.25 611   16      100000
node-http 18     727      1360061062846 23031808 6704824  13388032  0.8.18      3.11.10.25 611   16      100000
node-http 19     725      1360061063574 21999616 7406248  12356096  0.8.18      3.11.10.25 611   16      100000
node-http 20     726      1360061064302 21999616 7406680  12356096  0.8.18      3.11.10.25 611   16      100000
```

**js-http.js:**

```
benchmark number duration time          rss      heapUsed heapTotal nodeVersion v8Version  bytes headers iterations
js-http   1      716      1360061014968 14540800 2331776  6131200   0.8.18      3.11.10.25 611   16      100000
js-http   2      702      1360061015679 17637376 3274176  8228352   0.8.18      3.11.10.25 611   16      100000
js-http   3      709      1360061016388 17653760 3294120  8228352   0.8.18      3.11.10.25 611   16      100000
js-http   4      711      1360061017099 17653760 3295920  8228352   0.8.18      3.11.10.25 611   16      100000
js-http   5      704      1360061017803 17666048 3297992  8228352   0.8.18      3.11.10.25 611   16      100000
js-http   6      704      1360061018507 17666048 3300816  8228352   0.8.18      3.11.10.25 611   16      100000
js-http   7      704      1360061019211 17666048 3302840  8228352   0.8.18      3.11.10.25 611   16      100000
js-http   8      700      1360061019911 17678336 3304864  8228352   0.8.18      3.11.10.25 611   16      100000
js-http   9      704      1360061020615 17682432 3306896  8228352   0.8.18      3.11.10.25 611   16      100000
js-http   10     701      1360061021319 17756160 4554304  8228352   0.8.18      3.11.10.25 611   16      100000
js-http   11     701      1360061022023 17690624 4521176  8228352   0.8.18      3.11.10.25 611   16      100000
js-http   12     703      1360061022726 17690624 4525768  8228352   0.8.18      3.11.10.25 611   16      100000
js-http   13     702      1360061023428 17694720 4524952  8228352   0.8.18      3.11.10.25 611   16      100000
js-http   14     705      1360061024135 17694720 4487616  8228352   0.8.18      3.11.10.25 611   16      100000
js-http   15     703      1360061024838 17694720 4492208  8228352   0.8.18      3.11.10.25 611   16      100000
js-http   16     706      1360061025544 17694720 4492224  8228352   0.8.18      3.11.10.25 611   16      100000
js-http   17     707      1360061026253 17694720 4488912  8228352   0.8.18      3.11.10.25 611   16      100000
js-http   18     706      1360061026959 17694720 4493800  8228352   0.8.18      3.11.10.25 611   16      100000
js-http   19     704      1360061027663 17694720 4492712  8228352   0.8.18      3.11.10.25 611   16      100000
js-http   20     701      1360061028366 17694720 4489192  8228352   0.8.18      3.11.10.25 611   16      100000
```

So why is the js parser faster? It's hard to say, but my guess is:

* Since it's incomplete
* Because this benchmark shows the cost of calling C/C++ code from JS and vise
  versa in v8.

Other observations:

* I saw an overall performance decrease when upgrading from node v0.8.11 to
  v0.8.18.
* heapUsed is very jumpy for node-http, probably indicating a lot more GC work
  going on.
* node-http also uses more memory overall (~13mb heap total vs. 8mb in js-http)
* node-http is doing more work than js-http, as well as returning a larger
  data structure with more properties.
