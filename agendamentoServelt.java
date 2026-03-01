package com.barbearia.aldeia.controller;

import com.barbearia.aldeia.dao.AgendamentoDAO;
import com.barbearia.aldeia.model.Agendamento;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeParseException;
import java.util.Arrays;
import java.util.stream.Collectors;

@WebServlet("/agendamento")
public class AgendamentoServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("UTF-8");

        try {
            String nome = req.getParameter("nome");
            String telefone = req.getParameter("telefone");
            String[] servicosArray = req.getParameterValues("servicos");
            String[] adicionaisArray = req.getParameterValues("adicionais");
            String dataStr = req.getParameter("data");
            String horaStr = req.getParameter("hora");
            String barbeiroParam = req.getParameter("barbeiro");

            if (nome == null || nome.trim().isEmpty() || telefone == null || telefone.trim().isEmpty() ||
                servicosArray == null || servicosArray.length == 0 || dataStr == null || horaStr == null) {
                resp.sendRedirect("agendamento.html?erro=Preencha todos os campos obrigatórios.");
                return;
            }

            String servicos = Arrays.stream(servicosArray).collect(Collectors.joining(", "));
            String adicionais = (adicionaisArray != null) ? Arrays.stream(adicionaisArray).collect(Collectors.joining(", ")) : "";

            LocalDate data = LocalDate.parse(dataStr);
            LocalTime hora = LocalTime.parse(horaStr);
            Integer barbeiroId = (barbeiroParam != null && !barbeiroParam.isEmpty()) ? Integer.parseInt(barbeiroParam) : null;

            Agendamento agendamento = new Agendamento(nome, telefone, servicos, adicionais, data, hora, barbeiroId);
            AgendamentoDAO dao = new AgendamentoDAO();
            dao.salvar(agendamento);

            resp.sendRedirect("agendamento.html?sucesso=true");

        } catch (DateTimeParseException | NumberFormatException e) {
            e.printStackTrace();
            resp.sendRedirect("agendamento.html?erro=Formato de data/hora inválido.");
        } catch (Exception e) {
            e.printStackTrace();
            resp.sendRedirect("agendamento.html?erro=Erro interno no servidor.");
        }
    }
}