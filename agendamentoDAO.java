package com.barbearia.aldeia.dao;

import com.barbearia.aldeia.model.Agendamento;
import com.barbearia.aldeia.util.ConnectionFactory;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class AgendamentoDAO {

    public void salvar(Agendamento agendamento) throws SQLException {
        String sql = "INSERT INTO agendamentos (nome, telefone, servicos, adicionais, data_agendamento, hora_agendamento, barbeiro_id, status) VALUES (?,?,?,?,?,?,?,?)";
        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, agendamento.getNome());
            stmt.setString(2, agendamento.getTelefone());
            stmt.setString(3, agendamento.getServicos());
            stmt.setString(4, agendamento.getAdicionais());
            stmt.setDate(5, Date.valueOf(agendamento.getData()));
            stmt.setTime(6, Time.valueOf(agendamento.getHora()));
            if (agendamento.getBarbeiroId() != null) {
                stmt.setInt(7, agendamento.getBarbeiroId());
            } else {
                stmt.setNull(7, Types.INTEGER);
            }
            stmt.setString(8, agendamento.getStatus());
            stmt.executeUpdate();
        }
    }

    public List<Agendamento> listarTodos() throws SQLException {
        List<Agendamento> lista = new ArrayList<>();
        String sql = "SELECT * FROM agendamentos ORDER BY data_agendamento, hora_agendamento";
        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql);
             ResultSet rs = stmt.executeQuery()) {
            while (rs.next()) {
                Agendamento a = new Agendamento();
                a.setId(rs.getInt("id"));
                a.setNome(rs.getString("nome"));
                a.setTelefone(rs.getString("telefone"));
                a.setServicos(rs.getString("servicos"));
                a.setAdicionais(rs.getString("adicionais"));
                a.setData(rs.getDate("data_agendamento").toLocalDate());
                a.setHora(rs.getTime("hora_agendamento").toLocalTime());
                a.setBarbeiroId(rs.getInt("barbeiro_id") == 0 ? null : rs.getInt("barbeiro_id"));
                a.setStatus(rs.getString("status"));
                lista.add(a);
            }
        }
        return lista;
    }
}