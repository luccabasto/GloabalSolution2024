package org.example.entities;

import java.util.ArrayList;
import java.util.Map;

public class Noticia {
    private int IdNoticia;
    private String EmailNoticia;

    public int getIdNoticia() {
        return IdNoticia;
    }

    public void setIdNoticia(int idNoticia) {
        IdNoticia = idNoticia;
    }

    public String getEmailNoticia() {
        return EmailNoticia;
    }

    public void setEmailNoticia(String emailNoticia) {
        EmailNoticia = emailNoticia;
    }

    @Override
    public String toString() {
        return "Noticia{" +
                "IdNoticia=" + IdNoticia +
                ", EmailNoticia='" + EmailNoticia + '\'' +
                '}';
    }


    public Noticia(int idNoticia, String emailNoticia) {
        IdNoticia = idNoticia;
        EmailNoticia = emailNoticia;
    }


    public Map<Boolean, ArrayList<String>> validate() {
        var errors = new ArrayList<String>();
        if (EmailNoticia == null || EmailNoticia.isBlank())
            errors.add("Email não pode ser vazio");

        return !errors.isEmpty() ?
                Map.of(false, errors) :
                Map.of(true, errors);
    }

    public Noticia(){

    }
}
