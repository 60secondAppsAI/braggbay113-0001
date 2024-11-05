package com.braggbay113.dao;

import java.util.List;

import com.braggbay113.dao.GenericDAO;
import com.braggbay113.domain.Payment;





public interface PaymentDAO extends GenericDAO<Payment, Integer> {
  
	List<Payment> findAll();
	






}


