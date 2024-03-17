FROM golang:alpine3.19

WORKDIR /app

COPY go.mod /app/go.mod
COPY hello.go /app/hello.go

CMD ["go", "run", "."]