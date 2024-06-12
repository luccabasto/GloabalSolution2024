package org.example.repositories;

import org.example.entities.Avaliacao;
import org.example.infrastructure.OracleDbConfiguration;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class AvaliacaoRepository {

    public static final String TB_NAME = "Avaliacao";

    public List<Avaliacao> getAll() {
        var avaliacoes = new ArrayList<Avaliacao>();
        try (var conn = new OracleDbConfiguration().getConnection();
             var stmt = conn.prepareStatement("SELECT * FROM " + TB_NAME + " ORDER BY IdAvaliacao")) {
            var rs = stmt.executeQuery();
            while (rs.next()) {
                avaliacoes.add(new Avaliacao(
                        rs.getInt("IdAvaliacao"),
                        rs.getInt("nota"),
                        rs.getString("comentario")));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return avaliacoes;
    }

    public List<Avaliacao> getAll(int nota, String comentario, String orderBy, String direction, int limit, int offset) {
        var avaliacoes = new ArrayList<Avaliacao>();
        try (var conn = new OracleDbConfiguration().getConnection();
             var stmt = conn.prepareStatement(
                     ("SELECT * FROM %s WHERE nota >= ? AND comentario LIKE ? ORDER BY %s %s OFFSET %d " +
                             "ROWS FETCH NEXT %d ROWS ONLY")
                             .formatted(TB_NAME, orderBy, direction == null || direction.isEmpty() ? "ASC"
                                             : direction,
                                     offset, limit == 0 ? 10 : limit)
             )) {
            stmt.setInt(1, nota);
            stmt.setString(2, "%" + comentario + "%");
            var rs = stmt.executeQuery();
            while (rs.next()) {
                avaliacoes.add(new Avaliacao(
                        rs.getInt("IdAvaliacao"),
                        rs.getInt("nota"),
                        rs.getString("comentario")));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return avaliacoes;
    }

    public int count(int nota, String comentario) {
        try (var conn = new OracleDbConfiguration().getConnection();
             var stmt = conn.prepareStatement("SELECT COUNT(*) FROM " +
                     TB_NAME + " WHERE nota >= ? AND comentario LIKE ? ")) {
            stmt.setInt(1, nota);
            stmt.setString(2, "%" + comentario + "%");
            var result = stmt.executeQuery();
            if (result.next()) {
                return result.getInt(1);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return 0;
    }

    public Optional<Avaliacao> get(int id) {
        try (var conn = new OracleDbConfiguration().getConnection();
             var stmt = conn.prepareStatement("SELECT * FROM " + TB_NAME + " WHERE IdAvaliacao = ?")
        ) {
            stmt.setInt(1, id);
            var rs = stmt.executeQuery();
            if (rs.next()) {
                return Optional.of(new Avaliacao(
                        rs.getInt("IdAvaliacao"),
                        rs.getInt("nota"),
                        rs.getString("comentario")));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return Optional.empty();
    }

    public void create(Avaliacao avaliacao) {
        try (var conn = new OracleDbConfiguration().getConnection();
             var stmt = conn.prepareStatement("INSERT INTO " + TB_NAME + " (nota, comentario) VALUES (?,?)")) {
            stmt.setInt(1, avaliacao.getNota());
            stmt.setString(2, avaliacao.getComentario());
            stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void delete(int id) {
        try (var conn = new OracleDbConfiguration().getConnection();
             var stmt = conn.prepareStatement("DELETE FROM " + TB_NAME + " WHERE IdAvaliacao = ?")) {
            stmt.setInt(1, id);
            stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void update(int id, Avaliacao avaliacao) {
        try (var conn = new OracleDbConfiguration().getConnection();
             var stmt = conn.prepareStatement("UPDATE " + TB_NAME + " SET nota = ?, comentario = ? WHERE IdAvaliacao = ?")) {
            stmt.setInt(1, avaliacao.getNota());
            stmt.setString(2, avaliacao.getComentario());
            stmt.setInt(3, id);
            stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
