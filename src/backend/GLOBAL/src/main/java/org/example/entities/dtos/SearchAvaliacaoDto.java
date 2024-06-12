package org.example.entities.dtos;

import org.example.entities.Avaliacao;

import java.util.List;

public record SearchAvaliacaoDto(int nota, String comentario, String orderBy, String direction, int limit, int offset, int totalItems, List<Avaliacao> avaliacoes) {
}
