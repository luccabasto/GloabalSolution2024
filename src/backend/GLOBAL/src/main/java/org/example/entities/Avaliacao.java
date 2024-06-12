package org.example.entities;

import java.util.ArrayList;
import java.util.Map;

public class Avaliacao {
    private int IdAvaliacao;
    private int nota;
    private String comentario;

    public int getIdAvaliacao() {
        return IdAvaliacao;
    }

    public void setIdAvaliacao(int idAvaliacao) {
        IdAvaliacao = idAvaliacao;
    }

    public int getNota() {
        return nota;
    }

    public void setNota(int nota) {
        this.nota = nota;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public Avaliacao() {
    }

    public Avaliacao(int idAvaliacao, int nota, String comentario) {
        IdAvaliacao = idAvaliacao;
        this.nota = nota;
        this.comentario = comentario;
    }

    @Override
    public String toString() {
        return "Avaliacao{" +
                "IdAvaliacao=" + IdAvaliacao +
                ", nota=" + nota +
                ", comentario='" + comentario + '\'' +
                '}';
    }

    public Map<Boolean, ArrayList<String>> validate() {
        var errors = new ArrayList<String>();
        if (nota < 0 || nota > 10)
            errors.add("A nota deve estar entre 0 e 10");
        if (comentario == null || comentario.isBlank())
            errors.add("O comentário não pode ser vazio");

        return !errors.isEmpty() ?
                Map.of(false, errors) :
                Map.of(true, errors);
    }
}
