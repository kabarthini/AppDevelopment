package com.example.demo.workshop.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.workshop.entity.Contact;
import com.example.demo.workshop.repository.ContactRepository;
@Service
public class ContactService {
	@Autowired
	 private ContactRepository contactRepository;
   
	

	public void saveContact(Contact contact) 
	{
		contactRepository.save(contact);
	}



	public List<Contact> getContact() 
	{
		return contactRepository.findAll();
		
		
	}



	public void updateContact(Contact contact) {
		
		contactRepository.save(contact);
	}



	public void deleteContact(int contactId) {
		contactRepository.deleteById(contactId);
		
	}
}
