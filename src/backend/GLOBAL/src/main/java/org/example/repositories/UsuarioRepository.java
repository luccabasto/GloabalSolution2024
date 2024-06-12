package org.example.repositories;

import org.example.entities.Usuario;
import org.example.infrastructure.OracleDbConfiguration;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class UsuarioRepository {

    public static final String TB_NAME = "Usuario";

    public List<Usuario> getAll() {
        var usuarios = new ArrayList<Usuario>();
        try (var conn = new OracleDbConfiguration().getConnection();
             var stmt = conn.prepareStatement("SELECT * FROM " + TB_NAME + " ORDER BY IdUsuario")) {
            var rs = stmt.executeQuery();
            while (rs.next()) {
                usuarios.add(new Usuario(
                        rs.getInt("IdUsuario"),
                        rs.getString("Nome"),
                        rs.getString("Email"),
                        rs.getString("Senha"),
                        rs.getInt("PontuacaoTotal"),
                        rs.getString("CEP"),
                        rs.getString("Localidade"),
                        rs.getString("Logradouro"),
                        rs.getString("UF")));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }


        return usuarios;
    }

    public List<Usuario> getAll(String NOME, String Email, String Senha, int PontuacaoTotal, String CEP, String Localidade, String Logradouro, String UF, String orderBy, String direction, int limit, int offset) {
        var usuarios = new ArrayList<Usuario>();
        try (var conn = new OracleDbConfiguration().getConnection();
             var stmt = conn.prepareStatement(
                     ("SELECT * FROM %s WHERE NOME LIKE ? ORDER BY %s %s OFFSET %d " +
                             "ROWS FETCH NEXT %d ROWS ONLY")
                             .formatted(TB_NAME, orderBy, direction == null || direction.isEmpty() ? "ASC"
                                             : direction,
                                     offset, limit == 0 ? 10 : limit)
             )) {
            stmt.setString(1, "%" + NOME + "%");
            var rs = stmt.executeQuery();
            while (rs.next()) {
                usuarios.add(new Usuario(
                        rs.getInt("IdUsuario"),
                        rs.getString("Nome"),
                        rs.getString("Email"),
                        rs.getString("Senha"),
                        rs.getInt("PontuacaoTotal"),
                        rs.getString("CEP"),
                        rs.getString("Localidade"),
                        rs.getString("Logradouro"),
                        rs.getString("UF")));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return usuarios;
    }

    public int count(String NOME) {
        try (var conn = new OracleDbConfiguration().getConnection();
             var stmt = conn.prepareStatement("SELECT COUNT(*) FROM " +
                     TB_NAME + " WHERE Nome LIKE ? ")) {
            stmt.setString(1, "%" + NOME + "%");
            var result = stmt.executeQuery();
            if (result.next()) {
                return result.getInt(1);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return 0;
    }

    public Optional<Usuario> get(int id) {
        try (var conn = new OracleDbConfiguration().getConnection();
             var stmt = conn.prepareStatement("SELECT * FROM " + TB_NAME + " WHERE IdUsuario = ?")
        ) {
            stmt.setInt(1, id);
            var rs = stmt.executeQuery();
            if (rs.next()) {
                return Optional.of(new Usuario(
                        rs.getInt("IdUsuario"),
                        rs.getString("Nome"),
                        rs.getString("Email"),
                        rs.getString("Senha"),
                        rs.getInt("PontuacaoTotal"),
                        rs.getString("CEP"),
                        rs.getString("Localidade"),
                        rs.getString("Logradouro"),
                        rs.getString("UF")));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return Optional.empty();
    }

    public void create(Usuario usuario){
        try(var conn = new OracleDbConfiguration().getConnection();
            var stmt = conn.prepareStatement("INSERT INTO " + TB_NAME + " (Nome, Email, Senha, PontuacaoTotal, CEP, Localidade, Logradouro, UF ) VALUES (?,?,?,?,?,?,?,?)")){
            stmt.setString(1, usuario.getNome());
            stmt.setString(2, usuario.getEmail());
            stmt.setString(3, usuario.getSenha());
            stmt.setInt(4, usuario.getPontuacaoTotal());
            stmt.setString(5, usuario.getCep());
            stmt.setString(6, usuario.getLocalidade());
            stmt.setString(7, usuario.getLogradouro());
            stmt.setString(8, usuario.getUF());
            stmt.executeUpdate();
        }
        catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void delete(int id){
        try(var conn = new OracleDbConfiguration().getConnection();
            var stmt = conn.prepareStatement("DELETE FROM "+ TB_NAME + " WHERE IdUsuario = ?");)
        {
            stmt.setInt(1, id);
            stmt.executeUpdate();
        }
        catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void update(int id, Usuario usuario){
        try(var conn = new OracleDbConfiguration().getConnection();
            var stmt = conn.prepareStatement("UPDATE "+ TB_NAME + " SET Nome = ?, Email = ?, Senha = ?, PontuacaoTotal = ?,CEP = ?,Localidade = ?, Logradouro = ?, UF = ?  WHERE IdUsuario = ?");)
        {
            stmt.setString(1, usuario.getNome());
            stmt.setString(2, usuario.getEmail());
            stmt.setString(3, usuario.getSenha());
            stmt.setInt(4, usuario.getPontuacaoTotal());
            stmt.setString(5, usuario.getCep());
            stmt.setString(6, usuario.getLocalidade());
            stmt.setString(7, usuario.getLogradouro());
            stmt.setString(8, usuario.getUF());
            stmt.setInt(9, id);
            stmt.executeUpdate();
        }
        catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public Usuario findByEmailAndPassword(String email, String senha) throws SQLException {
        try (var conn = new OracleDbConfiguration().getConnection();
             var stmt = conn.prepareStatement("SELECT * FROM " + TB_NAME + " WHERE Email =? AND Senha =?")) {
            stmt.setString(1, email);
            stmt.setString(2, senha);
            ResultSet rs = stmt.executeQuery();

            if (rs.next()) {
                return new Usuario(rs.getInt("IdUsuario"), rs.getString("Nome"), rs.getString("Email"), rs.getString("Senha"),
                        rs.getInt("PontuacaoTotal"), rs.getString("CEP"), rs.getString("Localidade"), rs.getString("Logradouro"), rs.getString("UF"));
            }
        }
        return null;
    }
}


