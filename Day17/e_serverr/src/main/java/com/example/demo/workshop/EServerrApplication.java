package com.example.demo.workshop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@EnableEurekaServer
@SpringBootApplication
public class EServerrApplication {

	public static void main(String[] args) {
		SpringApplication.run(EServerrApplication.class, args);
	}

}
