package com.braggbay113.dao;

import java.util.List;

import com.braggbay113.dao.GenericDAO;
import com.braggbay113.domain.Bid;





public interface BidDAO extends GenericDAO<Bid, Integer> {
  
	List<Bid> findAll();
	






}


