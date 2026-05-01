package com.restaurant.staff.api;

import com.restaurant.common.api.ApiPage;
import com.restaurant.staff.api.dto.EmployeeCreateRequest;
import com.restaurant.staff.api.dto.EmployeeResponse;
import com.restaurant.staff.api.dto.EmployeeUpdateRequest;
import com.restaurant.staff.domain.EmployeeRole;
import com.restaurant.staff.service.EmployeeService;
import jakarta.validation.Valid;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("/api")
public class EmployeeController {
    private final EmployeeService service;

    public EmployeeController(EmployeeService service) {
        this.service = service;
    }

    @GetMapping("/roles")
    public EmployeeRole[] roles() {
        return EmployeeRole.values();
    }

    @GetMapping("/employees")
    public ApiPage<EmployeeResponse> list(
            @RequestParam(required = false) EmployeeRole role,
            @PageableDefault(size = 20) Pageable pageable
    ) {
        return ApiPage.from(service.list(role, pageable).map(EmployeeMapper::toResponse));
    }

    @GetMapping("/employees/{id}")
    public EmployeeResponse get(@PathVariable UUID id) {
        return EmployeeMapper.toResponse(service.get(id));
    }

    @PostMapping("/employees")
    @ResponseStatus(HttpStatus.CREATED)
    public EmployeeResponse create(@Valid @RequestBody EmployeeCreateRequest request) {
        var created = service.create(EmployeeMapper.toEntity(request));
        return EmployeeMapper.toResponse(created);
    }

    @PutMapping("/employees/{id}")
    public EmployeeResponse update(@PathVariable UUID id, @Valid @RequestBody EmployeeUpdateRequest request) {
        return EmployeeMapper.toResponse(service.update(id, EmployeeMapper.toEntity(request)));
    }

    @DeleteMapping("/employees/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable UUID id) {
        service.delete(id);
    }
}
