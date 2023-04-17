---
slug: configuring-a-logger-for-the-go-sdk
title: Configuring a logger for the go-sdk
authors: [skyerus]
date: 2022-09-02
tags: [golang, blog, tutorial, go-sdk, hooks, logging, logger]
draft: false
---

_Logging is the act of keeping a log. A log (in this case) records events that occur in software._

Subject to many opinions and differing principles of best practice, the best thing we could do for the `go-sdk` was
to create an implementation as open & configurable as possible. To achieve this, we've integrated [logr](https://github.com/go-logr/logr),
this allows the use of any logger that conforms to its API.

Applications may already have a chosen logging solution at the point of introducing `openfeature`. An [integration with logr](https://github.com/go-logr/logr#implementations-non-exhaustive)
may already exist for their chosen solution (integrations exist for many of the popular logger packages in go). If not, they could write their own integration.

<!--truncate-->

## Objective

_Configure the popular go logger [zap](https://github.com/uber-go/zap) with the go-sdk._

## Prerequisites

- Golang 1.17+

## Scaffolding

1. Go get the following dependencies

   ```shell
   go get github.com/open-feature/go-sdk
   go get go.uber.org/zap
   go get github.com/go-logr/logr
   go get github.com/go-logr/zapr # an integration of zap with logr's API
   ```

2. Import all of the above into your `main.go` and create `func main()`

   ```go
   package main

   import (
       "github.com/go-logr/logr"
       "github.com/go-logr/zapr"
       "github.com/open-feature/go-sdk/pkg/openfeature"
       "go.uber.org/zap"
       "go.uber.org/zap/zapcore"
       "context"
       "log"
   )

   func main() {

   }
   ```

## Integrating the logger

1. Create the zap logger with preset development config (for the sake of this tutorial)

   ```go
   func main() {
       zc := zap.NewDevelopmentConfig()
       zc.Level = zap.NewAtomicLevelAt(zapcore.Level(-1)) // the level here decides the verbosity of our logs
       z, err := zc.Build()
       if err != nil {
           log.Fatal(err)
       }
   }
   ```

2. Create the zapr logger (zap logger that conforms to logr's interface)

   ```go
   l := zapr.NewLogger(z)
   ```

3. Set the logger to the global openfeature singleton

   ```go
   openfeature.SetLogger(l)
   ```

4. Create an openfeature client and invoke a flag evaluation

   ```go
   c := openfeature.NewClient("log")

   evalCtx := openfeature.NewEvaluationContext("foo", nil)

   c.BooleanValue(context.Background(), "bar", false, evalCtx)
   ```

5. Check the result of `go run main.go`

   ```shell
   2022-09-02T14:22:31.109+0100    INFO    openfeature/openfeature.go:76   set global logger
   2022-09-02T14:22:31.110+0100    DEBUG   openfeature/client.go:230       evaluating flag {"flag": "bar", "type": "bool", "defaultValue": false, "evaluationContext": {"targetingKey":"foo","attributes":null}, "evaluationOptions": {}}
   2022-09-02T14:22:31.110+0100    DEBUG   openfeature/client.go:336       executing before hooks
   2022-09-02T14:22:31.110+0100    DEBUG   openfeature/client.go:349       executed before hooks
   2022-09-02T14:22:31.110+0100    DEBUG   openfeature/client.go:355       executing after hooks
   2022-09-02T14:22:31.110+0100    DEBUG   openfeature/client.go:364       executed after hooks
   2022-09-02T14:22:31.110+0100    DEBUG   openfeature/client.go:318       evaluated flag  {"flag": "bar", "details": {"FlagKey":"bar","FlagType":0,"Value":false,"ErrorCode":"","Reason":"","Variant":""}, "type": "bool"}
   2022-09-02T14:22:31.110+0100    DEBUG   openfeature/client.go:377       executing finally hooks
   2022-09-02T14:22:31.110+0100    DEBUG   openfeature/client.go:383       executed finally hooks
   ```

6. (optional) Tweak the level set in step 1 to decrease the verbosity
