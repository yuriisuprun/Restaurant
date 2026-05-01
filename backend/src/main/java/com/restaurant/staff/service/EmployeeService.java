package com.restaurant.staff.service;

import com.restaurant.common.exception.NotFoundException;
import com.restaurant.staff.domain.EmployeeEntity;
import com.restaurant.staff.domain.EmployeeRole;
import com.restaurant.staff.repo.EmployeeRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
@Transactional
public class EmployeeService {
    private final EmployeeRepository repo;

    public EmployeeService(EmployeeRepository repo) {
        this.repo = repo;
    }

    public EmployeeEntity create(EmployeeEntity employee) {
        EmployeeValidator.validateRoleSpecificFields(employee);
        return repo.save(employee);
    }

    @Transactional(readOnly = true)
    public Page<EmployeeEntity> list(EmployeeRole role, Pageable pageable) {
        if (role == null) {
            return repo.findAll(pageable);
        }
        return repo.findByRole(role, pageable);
    }

    @Transactional(readOnly = true)
    public EmployeeEntity get(UUID id) {
        return repo.findById(id).orElseThrow(() -> new NotFoundException("Employee not found: " + id));
    }

    public EmployeeEntity update(UUID id, EmployeeEntity updates) {
        var current = get(id);
        current.setRole(updates.getRole());
        current.setFirstName(updates.getFirstName());
        current.setLastName(updates.getLastName());
        current.setMiddleName(updates.getMiddleName());
        current.setExperience(updates.getExperience());
        current.setWorkHours(updates.getWorkHours());
        current.setQuantityMadeCocktails(updates.getQuantityMadeCocktails());

        EmployeeValidator.validateRoleSpecificFields(current);
        return repo.save(current);
    }

    public void delete(UUID id) {
        if (!repo.existsById(id)) {
            throw new NotFoundException("Employee not found: " + id);
        }
        repo.deleteById(id);
    }
}

