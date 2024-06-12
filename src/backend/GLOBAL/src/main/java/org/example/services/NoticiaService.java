package org.example.services;

import org.example.entities.Noticia;

import org.example.entities.dtos.SearchNoticiaDto;
import org.example.repositories.NoticiaRepository;


public class NoticiaService {

    private NoticiaRepository noticiaRepository;

    public NoticiaService() {
        noticiaRepository = new NoticiaRepository();
    }

    public SearchNoticiaDto getAll(String EmailNoticia, String orderBy, String direction, int limit, int offset) {
        var noticias = noticiaRepository.getAll(EmailNoticia, orderBy, direction, limit, offset);
        var totalItems = noticiaRepository.count(EmailNoticia);
        return new SearchNoticiaDto(EmailNoticia, orderBy, direction, limit, offset, totalItems, noticias);
    }



    public void create(Noticia noticia){
        var validation = noticia.validate();


        if(validation.containsKey(false))
            throw new IllegalArgumentException(validation.get(false).toString());
        else
            noticiaRepository.create(noticia);
    }

}
