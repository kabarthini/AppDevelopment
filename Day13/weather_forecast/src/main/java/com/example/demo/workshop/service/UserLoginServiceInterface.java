package com.example.demo.workshop.service;

import java.util.List;

import com.example.demo.workshop.entity.UserLoginEntity;


public interface UserLoginServiceInterface {
	
	 public List<UserLoginEntity>getDetails();
	    public void saveData(UserLoginEntity e);
	    public void updateUser(UserLoginEntity e);
	    public void deleteData(int id);

}
