package org.example.entities;

import java.util.ArrayList;
import java.util.Map;
import java.util.Arrays;

public class Usuario {
    private int IdUsuario;
    private String Nome;
    private String Email;
    private String Senha;
    private int PontuacaoTotal;
    private String CEP;
    private String Localidade;
    private String Logradouro;
    private String UF;


    public int getIdUsuario() {
        return IdUsuario;
    }

    public void setIdUsuario(int idUsuario) {
        IdUsuario = idUsuario;
    }

    public String getNome() {
        return Nome;
    }

    public void setNome(String nome) {
        Nome = nome;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getSenha() {
        return Senha;
    }

    public void setSenha(String senha) {
        Senha = senha;
    }

    public int getPontuacaoTotal() {
        return PontuacaoTotal;
    }

    public void setPontuacaoTotal(int pontuacaoTotal) {
        PontuacaoTotal = pontuacaoTotal;
    }

    public String getCep() {
        return CEP;
    }

    public void setCep(String CEP) {
        this.CEP = CEP;
    }

    public String getLocalidade() {
        return Localidade;
    }

    public void setLocalidade(String localidade) {
        Localidade = localidade;
    }

    public String getLogradouro() {
        return Logradouro;
    }

    public void setLogradouro(String logradouro) {
        Logradouro = logradouro;
    }

    public String getUF() {
        return UF;
    }

    public void setUF(String UF) {
        this.UF = UF;
    }

    public Usuario(){

    }

    public Usuario(int idUsuario, String nome, String email, String senha, int pontuacaoTotal, String CEP, String localidade, String logradouro, String UF) {
        IdUsuario = idUsuario;
        Nome = nome;
        Email = email;
        Senha = senha;
        PontuacaoTotal = pontuacaoTotal;
        this.CEP = CEP;
        Localidade = localidade;
        Logradouro = logradouro;
        this.UF = UF;
    }

    @Override
    public String toString() {
        return "Usuario{" +
                "IdUsuario=" + IdUsuario +
                ", Nome='" + Nome + '\'' +
                ", Email='" + Email + '\'' +
                ", Senha='" + Senha + '\'' +
                ", PontuacaoTotal='" + PontuacaoTotal + '\'' +
                ", CEP='" + CEP + '\'' +
                ", Localidade='" + Localidade + '\'' +
                ", Logradouro='" + Logradouro + '\'' +
                ", UF='" + UF + '\'' +
                '}';
    }

    public Map<Boolean, ArrayList<String>> validate() {
        var errors = new ArrayList<String>();
        if (Nome == null || Nome.isBlank())
            errors.add("Nome do usuario não pode ser vazio");

        return !errors.isEmpty() ?
                Map.of(false, errors) :
                Map.of(true, errors);
    }


}
