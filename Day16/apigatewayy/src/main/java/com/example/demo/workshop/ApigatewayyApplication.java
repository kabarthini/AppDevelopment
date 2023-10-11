package com.example.demo.workshop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class ApigatewayyApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApigatewayyApplication.class, args);
	}

}
