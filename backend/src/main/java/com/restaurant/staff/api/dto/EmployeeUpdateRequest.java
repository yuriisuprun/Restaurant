package com.restaurant.staff.api.dto;

import com.restaurant.staff.domain.EmployeeRole;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;

public record EmployeeUpdateRequest(
        @NotNull EmployeeRole role,
        @NotBlank String firstName,
        @NotBlank String lastName,
        String middleName,
        @PositiveOrZero Integer experience,
        @PositiveOrZero Integer workHours,
        @PositiveOrZero Integer quantityMadeCocktails
) {
}

