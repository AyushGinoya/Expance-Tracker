package com.example.backend.services;

import com.example.backend.dto.ExpanceDTO;
import com.example.backend.entity.ExpanceEntity;

import java.util.List;

public interface ExpanceService {
    ExpanceEntity addExpance(ExpanceDTO expanceDTO);

    List<ExpanceDTO> getAllExpances(Long id);

    ExpanceDTO editExpense(Long expenseId, ExpanceDTO expanceDTO);
}
