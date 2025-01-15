package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.vaadin.flow.theme.Theme;
import com.vaadin.flow.component.page.AppShellConfigurator;

@SpringBootApplication
@Theme("my-theme") // Gardez une seule annotation @Theme
public class DemoApplication implements AppShellConfigurator {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
