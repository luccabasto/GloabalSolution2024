package org.example.entities.dtos;


import org.example.entities.Usuario;


import java.util.List;


public record SearchUsuarioDto(String Nome, String Email,String Senha,int PontuacaoTotal, String CEP, String Localidade, String Logradouro, String UF , String orderBy,
                               String direction, int limit, int offset, int totalItems, List<Usuario> usuarios){
}