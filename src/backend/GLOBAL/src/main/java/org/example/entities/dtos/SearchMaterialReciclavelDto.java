package org.example.entities.dtos;

import org.example.entities.MaterialReciclavel;

import java.util.List;

public record SearchMaterialReciclavelDto(String TipoMaterial, String CorLixo, String orderBy, String direction, int limit, int offset, int totalItems, List<MaterialReciclavel> materiais) {
}
