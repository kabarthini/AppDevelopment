package com.example.demo.workshop.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.workshop.entity.Feedback;
import com.example.demo.workshop.repository.FeedbackRepo;
@Service
public class FeedbackService
{

	@Autowired
    private FeedbackRepo feedbackrepo;
	public List<Feedback> getFeedback() 
	{
		return feedbackrepo.findAll();
	}
	public void saveFeedback(Feedback registerEntity) 
	{
	        feedbackrepo.save(registerEntity);
	}
	public void updateFeedback(Feedback registerEntity) 
	{
		feedbackrepo.save(registerEntity);	
	}
	public void deleteFeedback(int feedbackId) 
	{
		feedbackrepo.deleteById(feedbackId);
	}
}
