package com.restaurant.staff.api;

import com.restaurant.staff.api.dto.EmployeeCreateRequest;
import com.restaurant.staff.api.dto.EmployeeResponse;
import com.restaurant.staff.api.dto.EmployeeUpdateRequest;
import com.restaurant.staff.domain.EmployeeEntity;

final class EmployeeMapper {
    private EmployeeMapper() {
    }

    static EmployeeEntity toEntity(EmployeeCreateRequest req) {
        var e = new EmployeeEntity();
        apply(e, req.role(), req.firstName(), req.lastName(), req.middleName(),
                req.experience(), req.workHours(), req.quantityMadeCocktails());
        return e;
    }

    static void apply(EmployeeEntity target, EmployeeUpdateRequest req) {
        apply(target, req.role(), req.firstName(), req.lastName(), req.middleName(),
                req.experience(), req.workHours(), req.quantityMadeCocktails());
    }

    static EmployeeEntity toEntity(EmployeeUpdateRequest req) {
        var e = new EmployeeEntity();
        apply(e, req);
        return e;
    }

    private static void apply(
            EmployeeEntity target,
            com.restaurant.staff.domain.EmployeeRole role,
            String firstName,
            String lastName,
            String middleName,
            Integer experience,
            Integer workHours,
            Integer quantityMadeCocktails
    ) {
        target.setRole(role);
        target.setFirstName(firstName.trim());
        target.setLastName(lastName.trim());
        target.setMiddleName(middleName == null || middleName.isBlank() ? null : middleName.trim());
        target.setExperience(experience);
        target.setWorkHours(workHours);
        target.setQuantityMadeCocktails(quantityMadeCocktails);
    }

    static EmployeeResponse toResponse(EmployeeEntity e) {
        return new EmployeeResponse(
                e.getId(),
                e.getRole(),
                e.getFirstName(),
                e.getLastName(),
                e.getMiddleName(),
                e.getExperience(),
                e.getWorkHours(),
                e.getQuantityMadeCocktails(),
                e.getCreatedAt(),
                e.getUpdatedAt()
        );
    }
}
