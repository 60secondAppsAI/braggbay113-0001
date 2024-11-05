package com.braggbay113.dao;

import java.util.List;

import com.braggbay113.dao.GenericDAO;
import com.braggbay113.domain.Listing;





public interface ListingDAO extends GenericDAO<Listing, Integer> {
  
	List<Listing> findAll();
	






}


