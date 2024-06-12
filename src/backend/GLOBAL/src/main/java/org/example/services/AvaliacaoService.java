
package org.example.services;

import org.example.entities.Avaliacao;
import org.example.entities.dtos.SearchAvaliacaoDto;
import org.example.repositories.AvaliacaoRepository;

public class AvaliacaoService {

    private AvaliacaoRepository avaliacaoRepository;

    public AvaliacaoService() {
        avaliacaoRepository = new AvaliacaoRepository();
    }

    public SearchAvaliacaoDto getAll(int nota, String comentario, String orderBy, String direction, int limit, int offset) {
        var avaliacoes = avaliacaoRepository.getAll(nota, comentario, orderBy, direction, limit, offset);
        var totalItems = avaliacaoRepository.count(nota, comentario);
        return new SearchAvaliacaoDto(nota, comentario, orderBy, direction, limit, offset, totalItems, avaliacoes);
    }

    public void create(Avaliacao avaliacao) {
        var validation = avaliacao.validate();

        if (validation.containsKey(false))
            throw new IllegalArgumentException(validation.get(false).toString());
        else
            avaliacaoRepository.create(avaliacao);
    }

    public void delete(int id) {
        avaliacaoRepository.delete(id);
    }

    public void update(int id, Avaliacao avaliacao) {
        var validation = avaliacao.validate();

        if (validation.containsKey(false))
            throw new IllegalArgumentException(validation.get(false).toString());
        else
            avaliacaoRepository.update(id, avaliacao);
    }
}
