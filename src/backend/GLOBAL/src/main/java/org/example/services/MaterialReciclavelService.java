package org.example.services;

import org.example.entities.MaterialReciclavel;
import org.example.entities.dtos.SearchMaterialReciclavelDto;
import org.example.repositories.MaterialReciclavelRepository;

public class MaterialReciclavelService {

    private MaterialReciclavelRepository materialReciclavelRepository;

    public MaterialReciclavelService() {
        materialReciclavelRepository = new MaterialReciclavelRepository();
    }

    public SearchMaterialReciclavelDto getAll(String TipoMaterial, String CorLixo, String orderBy, String direction, int limit, int offset) {
        var materiais = materialReciclavelRepository.getAll(TipoMaterial, CorLixo, orderBy, direction, limit, offset);
        var totalItems = materialReciclavelRepository.count(TipoMaterial);
        return new SearchMaterialReciclavelDto(TipoMaterial, CorLixo, orderBy, direction, limit, offset, totalItems, materiais);
    }

    public void create(MaterialReciclavel material) {
        var validation = material.validate();

        if (validation.containsKey(false))
            throw new IllegalArgumentException(validation.get(false).toString());
        else
            materialReciclavelRepository.create(material);
    }

    public void delete(int id) {
        materialReciclavelRepository.delete(id);
    }

    public void update(int id, MaterialReciclavel material) {
        var validation = material.validate();

        if (validation.containsKey(false))
            throw new IllegalArgumentException(validation.get(false).toString());
        else
            materialReciclavelRepository.update(id, material);
    }
}
