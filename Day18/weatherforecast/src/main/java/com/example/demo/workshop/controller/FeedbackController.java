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

import com.example.demo.workshop.entity.Feedback;

import com.example.demo.workshop.service.FeedbackService;


@RestController
@CrossOrigin
public class FeedbackController {
	@Autowired
	private FeedbackService s;
	 @GetMapping("/getFeedback")
	    public List<Feedback> getFeedbackDetails()
	    {
	   	 return s.getFeedback();
	    }
		@PutMapping("/putFeedback")
	    public String updateFeedbackDetails(@RequestBody Feedback feedbackEntity,@RequestParam int userId)
	    {
	    	feedbackEntity.setUserId(userId);
	   	    s.updateFeedback(feedbackEntity);
	   	    return ("Successfully Updated");
	    }
		@PostMapping("/postFeedback")
		public String saveDetails(@RequestBody 	Feedback e)
		{
			s.saveData(e);
			return "Successfully saved";
		}
	    
	    @DeleteMapping("/deleteRegister")
	    public String deleteFeedbackDetails(@RequestParam int userRegId)
	    {
	        s.deleteFeedback(userRegId);
	   	 return ("Successfully Deleted");
	    }
}
