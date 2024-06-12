package org.example.repositories;


import jakarta.validation.constraints.Email;
import org.example.entities.Noticia;
import org.example.entities.Usuario;
import org.example.infrastructure.OracleDbConfiguration;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class NoticiaRepository {


    public static final String TB_NAME = "Noticia";

    public List<Noticia> getAll() {
        var noticias = new ArrayList<Noticia>();
        try (var conn = new OracleDbConfiguration().getConnection();
             var stmt = conn.prepareStatement("SELECT * FROM " + TB_NAME + " ORDER BY IdNoticia")) {
            var rs = stmt.executeQuery();
            while (rs.next()) {
                noticias.add(new Noticia(
                        rs.getInt("IdNoticia"),
                        rs.getString("EmailNoticia")));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return noticias;
    }

    public List<Noticia> getAll(String EmailNoticia, String orderBy, String direction, int limit, int offset) {
        var noticias = new ArrayList<Noticia>();
        try (var conn = new OracleDbConfiguration().getConnection();
             var stmt = conn.prepareStatement(
                     ("SELECT * FROM %s WHERE NOME LIKE ? ORDER BY %s %s OFFSET %d " +
                             "ROWS FETCH NEXT %d ROWS ONLY")
                             .formatted(TB_NAME, orderBy, direction == null || direction.isEmpty() ? "ASC"
                                             : direction,
                                     offset, limit == 0 ? 10 : limit)
             )) {
            stmt.setString(1, "%" + EmailNoticia + "%");
            var rs = stmt.executeQuery();
            while (rs.next()) {
                noticias.add(new Noticia(
                        rs.getInt("IdNoticia"),
                        rs.getString("EmailNoticia")));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return noticias;
    }

    public int count(String EmailNoticia) {
        try (var conn = new OracleDbConfiguration().getConnection();
             var stmt = conn.prepareStatement("SELECT COUNT(*) FROM " +
                     TB_NAME + " WHERE EmailNoticia LIKE ? ")) {
            stmt.setString(1, "%" + EmailNoticia + "%");
            var result = stmt.executeQuery();
            if (result.next()) {
                return result.getInt(1);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return 0;
    }

    public Optional<Noticia> get(int id) {
        try (var conn = new OracleDbConfiguration().getConnection();
             var stmt = conn.prepareStatement("SELECT * FROM " + TB_NAME + " WHERE IdNoticia = ?")
        ) {
            stmt.setInt(1, id);
            var rs = stmt.executeQuery();
            if (rs.next()) {
                return Optional.of(new Noticia(
                        rs.getInt("IdNoticia"),
                        rs.getString("EmailNoticia")));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return Optional.empty();
    }

    public void create(Noticia noticia) {
        try (var conn = new OracleDbConfiguration().getConnection();
             var stmt = conn.prepareStatement("INSERT INTO " + TB_NAME + " (EmailNoticia) VALUES (?)")) {
            stmt.setString(1, noticia.getEmailNoticia());

            stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

}
