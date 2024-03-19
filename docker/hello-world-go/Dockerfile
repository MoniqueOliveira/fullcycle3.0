# Etapa de compilação
FROM golang:alpine AS builder

WORKDIR /app

COPY go.mod .
COPY hello.go .

# Compilação estática do aplicativo Go
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o hello .

# Etapa de criação da imagem final
FROM scratch

WORKDIR /app

# Copia o binário compilado do estágio de compilação
COPY --from=builder /app/hello .

# Executa o aplicativo compilado
CMD ["./hello"]
