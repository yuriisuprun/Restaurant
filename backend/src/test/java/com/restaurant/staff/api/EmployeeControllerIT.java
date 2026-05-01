package com.restaurant.staff.api;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.restaurant.staff.api.dto.EmployeeCreateRequest;
import com.restaurant.staff.domain.EmployeeRole;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class EmployeeControllerIT {
    @Autowired MockMvc mvc;
    @Autowired ObjectMapper om;

    @Test
    void createAndList() throws Exception {
        var req = new EmployeeCreateRequest(
                EmployeeRole.WAITER,
                "John",
                "Doe",
                null,
                5,
                null,
                null
        );

        mvc.perform(post("/api/employees")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(om.writeValueAsString(req)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").exists())
                .andExpect(jsonPath("$.role").value("WAITER"));

        mvc.perform(get("/api/employees?role=WAITER&size=50"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.items").isArray())
                .andExpect(jsonPath("$.items.length()").value(org.hamcrest.Matchers.greaterThanOrEqualTo(1)));
    }
}

