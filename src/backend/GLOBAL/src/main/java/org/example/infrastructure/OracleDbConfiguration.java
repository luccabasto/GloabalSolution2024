package org.example.infrastructure;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;


public class OracleDbConfiguration {
    private static final String URL = "jdbc:oracle:thin:@oracle.fiap.com.br:1521:orcl";
    private static final String USER = "RM553771";
    private static final String PASSWORD = "210499";


    public Connection getConnection() {
        try {
            return DriverManager.getConnection(URL, USER, PASSWORD);
        }
        catch (SQLException e){
            e.printStackTrace();
        }
        return null;
    }


    public void closeConnection(Connection connection) throws SQLException{
        connection.close();
    }
}
