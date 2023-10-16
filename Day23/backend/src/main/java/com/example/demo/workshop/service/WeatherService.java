package com.example.demo.workshop.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.workshop.entity.Weather;
import com.example.demo.workshop.repository.WeatherRepository;
@Service
public class WeatherService {
	@Autowired
	 private WeatherRepository weatherRepository;
   
	

	public void saveWeather(Weather weather) 
	{
		weatherRepository.save(weather);
	}



	public List<Weather> getWeather() 
	{
		return weatherRepository.findAll();
		
		
	}



	public void updateWeather(Weather weather) {
		
		weatherRepository.save(weather);
	}



	public void deleteWeather(int weatherId) {
		weatherRepository.deleteById(weatherId);
		
	}
}


