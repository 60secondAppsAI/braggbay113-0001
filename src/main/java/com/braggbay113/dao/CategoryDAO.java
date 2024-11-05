package com.braggbay113.dao;

import java.util.List;

import com.braggbay113.dao.GenericDAO;
import com.braggbay113.domain.Category;





public interface CategoryDAO extends GenericDAO<Category, Integer> {
  
	List<Category> findAll();
	






}


