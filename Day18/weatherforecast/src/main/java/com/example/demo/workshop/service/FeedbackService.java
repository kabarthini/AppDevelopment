package com.example.demo.workshop.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.workshop.entity.Feedback;
import com.example.demo.workshop.repository.FeedbackRepository;

@Service
public class FeedbackService {

	@Autowired
	private FeedbackRepository r ; 
	public List<Feedback> getFeedback() 
	{
		return r.findAll();
	}

	public void updateFeedback(Feedback feedbackEntity) 
	{
		r.save(feedbackEntity);	
	}

	public void deleteFeedback(int userId) 
	{
		
		r.deleteById(userId);
	}
	public void saveData(Feedback e) {
		r.save(e);
	}

}
