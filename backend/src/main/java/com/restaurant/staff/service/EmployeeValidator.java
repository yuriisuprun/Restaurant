package com.restaurant.staff.service;

import com.restaurant.common.exception.BadRequestException;
import com.restaurant.staff.domain.EmployeeEntity;

final class EmployeeValidator {
    private EmployeeValidator() {
    }

    static void validateRoleSpecificFields(EmployeeEntity e) {
        if (e.getRole() == null) {
            throw new BadRequestException("role is required");
        }

        // Fail fast if unrelated fields are provided (keeps the model clean and prevents "dirty" records).
        switch (e.getRole()) {
            case WAITER, COOK -> {
                requireNonNull(e.getExperience(), "experience is required for role " + e.getRole());
                requireNull(e.getWorkHours(), "workHours is not applicable for role " + e.getRole());
                requireNull(e.getQuantityMadeCocktails(), "quantityMadeCocktails is not applicable for role " + e.getRole());
            }
            case DISHWASHER -> {
                requireNonNull(e.getWorkHours(), "workHours is required for role DISHWASHER");
                requireNull(e.getExperience(), "experience is not applicable for role DISHWASHER");
                requireNull(e.getQuantityMadeCocktails(), "quantityMadeCocktails is not applicable for role DISHWASHER");
            }
            case BARTENDER -> {
                requireNonNull(e.getQuantityMadeCocktails(), "quantityMadeCocktails is required for role BARTENDER");
                requireNull(e.getExperience(), "experience is not applicable for role BARTENDER");
                requireNull(e.getWorkHours(), "workHours is not applicable for role BARTENDER");
            }
            default -> throw new BadRequestException("Unsupported role: " + e.getRole());
        }
    }

    private static void requireNonNull(Integer value, String message) {
        if (value == null) {
            throw new BadRequestException(message);
        }
    }

    private static void requireNull(Integer value, String message) {
        if (value != null) {
            throw new BadRequestException(message);
        }
    }
}
