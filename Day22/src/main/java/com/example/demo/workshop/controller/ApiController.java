package com.example.demo.workshop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.demo.workshop.entity.StoringData;
import com.example.demo.workshop.entity.UserRegister;
import com.example.demo.workshop.entity.WeatherData;
import com.example.demo.workshop.repository.StoringDataRepo;
import com.example.demo.workshop.repository.UserRegisterRepository;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class ApiController {
	@Autowired
    private StoringDataRepo storingDataRepository;
	
	@Autowired
	private UserRegisterRepository userRepository;
	 private final String apiKey = "a6673e782011461b31f86f49a5d71adb";

	 @GetMapping("/getWeatherData")
	 public WeatherData getWeatherData(@RequestParam String cityName,@RequestParam String username) {
		 String apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=metric";

		 RestTemplate restTemplate = new RestTemplate();
		  WeatherData weatherData = restTemplate.getForObject(apiUrl, WeatherData.class);
		  UserRegister user = userRepository.findByUsername(username).orElseThrow(() -> new RuntimeException("User not found"));

		 StoringData storingData = new StoringData();
		    storingData.setCity(cityName);
		    storingData.setTemp(weatherData.getMain().getTemp());
		    storingData.setHumidity(weatherData.getMain().getHumidity());
		    storingData.setWind(weatherData.getWind().getSpeed());
		    storingData.setUser(user);

		    storingDataRepository.save(storingData);
		 return restTemplate.getForObject(apiUrl, WeatherData.class);
		 
	 }
	 @GetMapping("/history")
	    public List<StoringData> getUserWeatherHistory(@RequestParam String username) {
	        UserRegister user = userRepository.findByUsername(username)
	                .orElseThrow(() -> new RuntimeException("User not found"));

	        
	        return storingDataRepository.findByUser(user);
	    }
	 @GetMapping("/getall")
	 public List<StoringData> getAllDetails()
	 {
		return storingDataRepository.findAll();
	 }
}
