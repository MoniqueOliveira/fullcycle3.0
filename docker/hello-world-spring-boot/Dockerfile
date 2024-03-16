FROM amazoncorretto:17.0.9

WORKDIR /app

COPY ./build/libs/hello-world-spring-boot-0.0.1-SNAPSHOT.jar /app/app.jar

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]