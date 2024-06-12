package org.example.entities;

import java.util.ArrayList;
import java.util.Map;

public class MaterialReciclavel {
    private int IdMaterial;
    private String TipoMaterial;
    private String CorLixo;

    public int getIdMaterial() {
        return IdMaterial;
    }

    public void setIdMaterial(int idMaterial) {
        IdMaterial = idMaterial;
    }

    public String getTipoMaterial() {
        return TipoMaterial;
    }

    public void setTipoMaterial(String tipoMaterial) {
        TipoMaterial = tipoMaterial;
    }

    public String getCorLixo() {
        return CorLixo;
    }

    public void setCorLixo(String corLixo) {
        CorLixo = corLixo;
    }

    public MaterialReciclavel() {
    }

    public MaterialReciclavel(int idMaterial, String tipoMaterial, String corLixo) {
        IdMaterial = idMaterial;
        TipoMaterial = tipoMaterial;
        CorLixo = corLixo;
    }

    @Override
    public String toString() {
        return "MaterialReciclavel{" +
                "IdMaterial=" + IdMaterial +
                ", TipoMaterial='" + TipoMaterial + '\'' +
                ", CorLixo='" + CorLixo + '\'' +
                '}';
    }

    public Map<Boolean, ArrayList<String>> validate() {
        var errors = new ArrayList<String>();
        if (TipoMaterial == null || TipoMaterial.isBlank())
            errors.add("Tipo do material não pode ser vazio");
        if (CorLixo == null || CorLixo.isBlank())
            errors.add("Cor do lixo não pode ser vazia");

        return !errors.isEmpty() ?
                Map.of(false, errors) :
                Map.of(true, errors);
    }
}
