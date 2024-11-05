package com.braggbay113.dao;

import java.util.List;

import com.braggbay113.dao.GenericDAO;
import com.braggbay113.domain.Product;





public interface ProductDAO extends GenericDAO<Product, Integer> {
  
	List<Product> findAll();
	






}


