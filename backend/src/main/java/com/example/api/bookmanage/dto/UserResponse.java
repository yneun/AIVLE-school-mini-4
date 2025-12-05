package com.example.api.bookmanage.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponse {
    private Long id;
    private String loginId;

    public UserResponse(Long id, String loginId) {
        this.id = id;
        this.loginId = loginId;
    }
}