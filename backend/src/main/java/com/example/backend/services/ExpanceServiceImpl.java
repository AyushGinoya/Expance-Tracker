package com.example.backend.services;

import com.example.backend.dto.ExpanceDTO;
import com.example.backend.entity.ExpanceEntity;
import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.repository.ExpanceRepository;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ExpanceServiceImpl implements ExpanceService {

    private final ExpanceRepository expanceRepository;
    private final UserRepository userRepository;

    @Autowired
    public ExpanceServiceImpl(ExpanceRepository expanceRepository, UserRepository userRepository) {
        this.expanceRepository = expanceRepository;
        this.userRepository = userRepository;
    }

    @Override
    public ExpanceEntity addExpance(ExpanceDTO expanceDTO) {
        ExpanceEntity expanceEntity = new ExpanceEntity();
        BeanUtils.copyProperties(expanceDTO, expanceEntity);
        userRepository.findById(expanceDTO.getUserId()).ifPresent(expanceEntity::setUserEntity);
        return expanceRepository.save(expanceEntity);
    }

    @Override
    public List<ExpanceDTO> getAllExpances(Long userId) {
        List<ExpanceEntity> expanceEntities = expanceRepository.findByUserEntity_Id(userId);
        return expanceEntities.stream().map(expance -> {
            ExpanceDTO dto = new ExpanceDTO();
            BeanUtils.copyProperties(expance, dto);
            dto.setUserId(expance.getUserEntity().getId());
            return dto;
        }).collect(Collectors.toList());
    }

    @Override
    public ExpanceDTO editExpense(Long expenseId, ExpanceDTO expanceDTO) {
        return expanceRepository.findById(expenseId).map(expense -> {
            if (expanceDTO.getDate() != null) {
                expense.setDate(expanceDTO.getDate());
            }
            if (expanceDTO.getAmount() != 0) {
                expense.setAmount(expanceDTO.getAmount());
            }
            if (expanceDTO.getType() != null) {
                expense.setType(expanceDTO.getType());
            }
            if (expanceDTO.getCategory() != null) {
                expense.setCategory(expanceDTO.getCategory());
            }
            if (expanceDTO.getUserId() != null) {
                userRepository.findById(expanceDTO.getUserId()).ifPresent(expense::setUserEntity);
            }

            ExpanceEntity updatedExpense = expanceRepository.save(expense);

            ExpanceDTO updatedExpanceDTO = new ExpanceDTO();
            BeanUtils.copyProperties(updatedExpense, updatedExpanceDTO);
            updatedExpanceDTO.setUserId(updatedExpense.getUserEntity().getId());

            return updatedExpanceDTO;
        }).orElseThrow(() -> new ResourceNotFoundException("Expense not found with id " + expenseId));
    }
}
