package com.restaurant.staff.service;

import com.restaurant.staff.domain.EmployeeEntity;
import com.restaurant.staff.domain.EmployeeRole;
import com.restaurant.staff.repo.EmployeeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
class StaffDataSeeder implements CommandLineRunner {
    private final EmployeeRepository repo;

    StaffDataSeeder(EmployeeRepository repo) {
        this.repo = repo;
    }

    @Override
    public void run(String... args) {
        if (repo.count() > 0) {
            return;
        }

        repo.save(newEmployee(EmployeeRole.WAITER, "Luca", "Bianchi", null, 3, null, null));
        repo.save(newEmployee(EmployeeRole.COOK, "Giulia", "Rossi", null, 7, null, null));
        repo.save(newEmployee(EmployeeRole.BARTENDER, "Marco", "Verdi", null, null, null, 1200));
        repo.save(newEmployee(EmployeeRole.DISHWASHER, "Sara", "Neri", null, null, 35, null));
    }

    private static EmployeeEntity newEmployee(
            EmployeeRole role,
            String firstName,
            String lastName,
            String middleName,
            Integer experience,
            Integer workHours,
            Integer quantityMadeCocktails
    ) {
        var e = new EmployeeEntity();
        e.setRole(role);
        e.setFirstName(firstName);
        e.setLastName(lastName);
        e.setMiddleName(middleName);
        e.setExperience(experience);
        e.setWorkHours(workHours);
        e.setQuantityMadeCocktails(quantityMadeCocktails);
        // Reuse the same validation as the API path.
        EmployeeValidator.validateRoleSpecificFields(e);
        return e;
    }
}

