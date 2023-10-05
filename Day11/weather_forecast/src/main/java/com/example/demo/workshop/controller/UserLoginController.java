package com.example.demo.workshop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.workshop.entity.UserLoginEntity;
import com.example.demo.workshop.service.UserLoginService;


@CrossOrigin
@RestController
public class UserLoginController {

	 @Autowired
     private UserLoginService s;
     @GetMapping("/logingetdata")
     public List<UserLoginEntity>getData()
   	  {
   		  return s.getDetails();
   	  }
     @PutMapping("/loginput")
     public String updateDetails(@RequestBody UserLoginEntity e,@RequestParam int id)
     {
     	e.setUserId(id);
     	s.updateUser(e);
     	return "Successfully updated";
     }
 	
 	@PostMapping("/loginpost")
 	public String saveDetails(@RequestBody UserLoginEntity e)
 	{
 		s.saveData(e);
 		return "Successfully saved";
 	}
 	@DeleteMapping("/logindelete")
 	public String deleteDetails(@RequestParam int id)
 	{
 		s.deleteData(id);
 		return "Successfully deleted";
 	}
}
