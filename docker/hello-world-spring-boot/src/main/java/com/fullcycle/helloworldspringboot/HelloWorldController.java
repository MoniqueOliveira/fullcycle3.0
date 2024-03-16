package com.fullcycle.helloworldspringboot;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {
    @GetMapping
    public String get() {
        return "Spring Application says \"Hello World\"";
    }
}
