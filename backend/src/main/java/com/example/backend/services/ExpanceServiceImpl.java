package com.example.backend.services;

import com.example.backend.dto.ExpanceDTO;
import com.example.backend.entity.ExpanceEntity;
import com.example.backend.entity.UserEntity;
import com.example.backend.repository.ExpanceRepository;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
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

        // Retrieve the UserEntity based on the username
        Optional<UserEntity> userEntityOptional = Optional.ofNullable(userRepository.findByUserName(expanceDTO.getUsername()));
        if (userEntityOptional.isPresent()) {
            expanceEntity.setUserEntity(userEntityOptional.get());
        } else {
            // Handle the case where the user does not exist
            throw new RuntimeException("User not found for username: " + expanceDTO.getUsername());
        }

        return expanceRepository.save(expanceEntity);
    }

    @Override
    public List<ExpanceDTO> getAllExpances(Long id) {
        // Fetch all expenses for the given user ID
        List<ExpanceEntity> expanceEntities = expanceRepository.findByUserEntity_Id(id);

        return expanceEntities.stream().map(expance -> {
            ExpanceDTO dto = new ExpanceDTO();
            dto.setId(expance.getId());
            dto.setDate(expance.getDate());
            dto.setType(expance.getType());
            dto.setCategory(expance.getCategory());
            dto.setAmount(expance.getAmount());
            dto.setUsername(expance.getUserEntity().getUserName());
            return dto;
        }).collect(Collectors.toList());
    }

}
