package org.example.entities.dtos;


import org.example.entities.Noticia;


import java.util.List;


public record SearchNoticiaDto(String EmailNoticia, String orderBy,
                                String direction, int limit, int offset, int totalItems, List<Noticia> noticias){

}
