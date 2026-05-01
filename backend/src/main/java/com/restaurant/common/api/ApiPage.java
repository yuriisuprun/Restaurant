package com.restaurant.common.api;

import org.springframework.data.domain.Page;

import java.util.List;

public record ApiPage<T>(
        List<T> items,
        long totalItems,
        int page,
        int size,
        int totalPages,
        boolean hasNext,
        boolean hasPrevious
) {
    public static <T> ApiPage<T> from(Page<T> page) {
        return new ApiPage<>(
                page.getContent(),
                page.getTotalElements(),
                page.getNumber(),
                page.getSize(),
                page.getTotalPages(),
                page.hasNext(),
                page.hasPrevious()
        );
    }
}

