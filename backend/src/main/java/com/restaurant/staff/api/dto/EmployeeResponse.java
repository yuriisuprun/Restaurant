package com.restaurant.staff.api.dto;

import com.restaurant.staff.domain.EmployeeRole;

import java.time.Instant;
import java.util.UUID;

public record EmployeeResponse(
        UUID id,
        EmployeeRole role,
        String firstName,
        String lastName,
        String middleName,
        Integer experience,
        Integer workHours,
        Integer quantityMadeCocktails,
        Instant createdAt,
        Instant updatedAt
) {
}

