package com.example.backend.dto;

import jakarta.persistence.Transient;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ExpanceDTO {
    private long id;
    private Date date;
    private String type;
    private String category;
    private int amount;
    @Transient
    private Long userId;
}
