package com.braggbay113.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.ResponseEntity;

import com.braggbay113.domain.Message;
import com.braggbay113.dto.MessageDTO;
import com.braggbay113.dto.MessageSearchDTO;
import com.braggbay113.dto.MessagePageDTO;
import com.braggbay113.dto.MessageConvertCriteriaDTO;
import com.braggbay113.service.GenericService;
import com.braggbay113.dto.common.RequestDTO;
import com.braggbay113.dto.common.ResultDTO;
import java.util.List;
import java.util.Optional;





public interface MessageService extends GenericService<Message, Integer> {

	List<Message> findAll();

	ResultDTO addMessage(MessageDTO messageDTO, RequestDTO requestDTO);

	ResultDTO updateMessage(MessageDTO messageDTO, RequestDTO requestDTO);

    Page<Message> getAllMessages(Pageable pageable);

    Page<Message> getAllMessages(Specification<Message> spec, Pageable pageable);

	ResponseEntity<MessagePageDTO> getMessages(MessageSearchDTO messageSearchDTO);
	
	List<MessageDTO> convertMessagesToMessageDTOs(List<Message> messages, MessageConvertCriteriaDTO convertCriteria);

	MessageDTO getMessageDTOById(Integer messageId);







}





