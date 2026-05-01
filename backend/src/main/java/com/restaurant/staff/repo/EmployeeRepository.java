package com.restaurant.staff.repo;

import com.restaurant.staff.domain.EmployeeEntity;
import com.restaurant.staff.domain.EmployeeRole;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface EmployeeRepository extends JpaRepository<EmployeeEntity, UUID> {
    Page<EmployeeEntity> findByRole(EmployeeRole role, Pageable pageable);
}

