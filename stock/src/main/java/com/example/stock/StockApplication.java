package com.example.stock;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StockApplication {

	public static void main(String[] args) {
		try{
			SpringApplication.run(StockApplication.class, args);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
