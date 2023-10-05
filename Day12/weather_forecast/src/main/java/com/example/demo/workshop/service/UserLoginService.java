package com.example.demo.workshop.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.workshop.entity.UserLoginEntity;
import com.example.demo.workshop.repository.UserLoginRepository;
@Service
public class UserLoginService implements UserLoginServiceInterface {

	@Autowired
	private UserLoginRepository r;
	@Override
	public List<UserLoginEntity> getDetails() {

        return r.findAll();
	}

	@Override
	public void saveData(UserLoginEntity e) {
		r.save(e);
	}

	@Override
	   public void updateUser(UserLoginEntity e) 
	   {
		   r.save(e);
	   }

	@Override
	public void deleteData(int id) {
		r.deleteById(id);

	}

}
