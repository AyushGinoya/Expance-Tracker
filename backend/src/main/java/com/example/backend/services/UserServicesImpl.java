package com.example.backend.services;

import com.example.backend.dto.UserDTO;
import com.example.backend.entity.UserEntity;
import com.example.backend.exception.UserCreationException;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
@Service
public class UserServicesImpl implements UserServices{
    @Autowired
    private UserRepository userRepository;
    private static final Logger logger = LoggerFactory.getLogger(UserServicesImpl.class);

    public UserServicesImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDTO createUser(UserDTO userDTO) {
        logger.info("Creating user with username: {}", userDTO.getUserName());
        // UserDTO  --- Convert--->  UserEntity
        UserEntity userEntity = new UserEntity();
        userEntity.setUserName(userDTO.getUserName());
        userEntity.setEmailId(userDTO.getEmailId());
        userEntity.setPassword(userDTO.getPassword());

        try {
            UserEntity savedUserEntity = userRepository.save(userEntity);
            logger.info("User saved with id: {}", savedUserEntity.getId());

            // Saved UserEntity --- Convert ---> back to UserDTO
            UserDTO savedUserDTO = new UserDTO();
            savedUserDTO.setUserName(savedUserEntity.getUserName());
            savedUserDTO.setEmailId(savedUserEntity.getEmailId());
            savedUserDTO.setPassword(savedUserEntity.getPassword());

            return savedUserDTO;
        }catch (Exception e) {
            logger.error("Failed to create user: {}", e.getMessage(), e);
            throw new UserCreationException("Failed to create user", e);
        }
    }
}
