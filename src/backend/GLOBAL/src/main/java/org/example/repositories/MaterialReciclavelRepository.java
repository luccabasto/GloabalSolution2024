package org.example.repositories;

import org.example.entities.MaterialReciclavel;
import org.example.infrastructure.OracleDbConfiguration;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class MaterialReciclavelRepository {

    public static final String TB_NAME = "MaterialReciclavel";

    public List<MaterialReciclavel> getAll() {
        var materiais = new ArrayList<MaterialReciclavel>();
        try (var conn = new OracleDbConfiguration().getConnection();
             var stmt = conn.prepareStatement("SELECT * FROM " + TB_NAME + " ORDER BY IdMaterial")) {
            var rs = stmt.executeQuery();
            while (rs.next()) {
                materiais.add(new MaterialReciclavel(
                        rs.getInt("IdMaterial"),
                        rs.getString("TipoMaterial"),
                        rs.getString("CorLixo")));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return materiais;
    }

    public List<MaterialReciclavel> getAll(String TipoMaterial, String CorLixo, String orderBy, String direction, int limit, int offset) {
        var materiais = new ArrayList<MaterialReciclavel>();
        try (var conn = new OracleDbConfiguration().getConnection();
             var stmt = conn.prepareStatement(
                     ("SELECT * FROM %s WHERE TipoMaterial LIKE ? ORDER BY %s %s OFFSET %d " +
                             "ROWS FETCH NEXT %d ROWS ONLY")
                             .formatted(TB_NAME, orderBy, direction == null || direction.isEmpty() ? "ASC"
                                             : direction,
                                     offset, limit == 0 ? 10 : limit)
             )) {
            stmt.setString(1, "%" + TipoMaterial + "%");
            var rs = stmt.executeQuery();
            while (rs.next()) {
                materiais.add(new MaterialReciclavel(
                        rs.getInt("IdMaterial"),
                        rs.getString("TipoMaterial"),
                        rs.getString("CorLixo")));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return materiais;
    }

    public int count(String TipoMaterial) {
        try (var conn = new OracleDbConfiguration().getConnection();
             var stmt = conn.prepareStatement("SELECT COUNT(*) FROM " +
                     TB_NAME + " WHERE TipoMaterial LIKE ? ")) {
            stmt.setString(1, "%" + TipoMaterial + "%");
            var result = stmt.executeQuery();
            if (result.next()) {
                return result.getInt(1);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return 0;
    }

    public Optional<MaterialReciclavel> get(int id) {
        try (var conn = new OracleDbConfiguration().getConnection();
             var stmt = conn.prepareStatement("SELECT * FROM " + TB_NAME + " WHERE IdMaterial = ?")
        ) {
            stmt.setInt(1, id);
            var rs = stmt.executeQuery();
            if (rs.next()) {
                return Optional.of(new MaterialReciclavel(
                        rs.getInt("IdMaterial"),
                        rs.getString("TipoMaterial"),
                        rs.getString("CorLixo")));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return Optional.empty();
    }

    public void create(MaterialReciclavel material) {
        try (var conn = new OracleDbConfiguration().getConnection();
             var stmt = conn.prepareStatement("INSERT INTO " + TB_NAME + " (TipoMaterial, CorLixo) VALUES (?,?)")) {
            stmt.setString(1, material.getTipoMaterial());
            stmt.setString(2, material.getCorLixo());
            stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void delete(int id) {
        try (var conn = new OracleDbConfiguration().getConnection();
             var stmt = conn.prepareStatement("DELETE FROM " + TB_NAME + " WHERE IdMaterial = ?")) {
            stmt.setInt(1, id);
            stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void update(int id, MaterialReciclavel material) {
        try (var conn = new OracleDbConfiguration().getConnection();
             var stmt = conn.prepareStatement("UPDATE " + TB_NAME + " SET TipoMaterial = ?, CorLixo = ? WHERE IdMaterial = ?")) {
            stmt.setString(1, material.getTipoMaterial());
            stmt.setString(2, material.getCorLixo());
            stmt.setInt(3, id);
            stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
