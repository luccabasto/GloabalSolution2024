package org.example.services;

import org.example.entities.Usuario;
import org.example.entities.dtos.SearchUsuarioDto;
import org.example.repositories.UsuarioRepository;

public class UsuarioService {

    private UsuarioRepository usuarioRepository;

    public UsuarioService() {
        usuarioRepository = new UsuarioRepository();
    }

    public SearchUsuarioDto getAll(String Nome, String Email, String Senha, int PontuacaoTotal, String CEP, String Localidade, String Logradouro, String UF, String orderBy, String direction, int limit, int offset) {
        var usuarios = usuarioRepository.getAll(Nome, Email, Senha, PontuacaoTotal, CEP, Localidade, Logradouro, UF, orderBy, direction, limit, offset);
        var totalItems = usuarioRepository.count(Nome);
        return new SearchUsuarioDto(Nome, Email, Senha, PontuacaoTotal, CEP, Localidade, Logradouro, UF, orderBy, direction, limit, offset, totalItems, usuarios);
    }

    public void create(Usuario usuario){
        var validation = usuario.validate();


        if(validation.containsKey(false))
            throw new IllegalArgumentException(validation.get(false).toString());
        else
            usuarioRepository.create(usuario);
    }

    public void delete(int id){
        usuarioRepository.delete(id);
    }

    public void update(int id, Usuario usuario){
        var validation = usuario.validate();


        if(validation.containsKey(false))
            throw new IllegalArgumentException(validation.get(false).toString());
        else
            usuarioRepository.update(id, usuario);
    }

    public Usuario findByEmailAndPassword(String email, String senha) throws Exception {
        return usuarioRepository.findByEmailAndPassword(email, senha);
    }

}


