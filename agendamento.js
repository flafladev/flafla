package com.barbearia.aldeia.model;

import java.time.LocalDate;
import java.time.LocalTime;

public class Agendamento {
    private int id;
    private String nome;
    private String telefone;
    private String servicos;       // serviços principais concatenados
    private String adicionais;      // serviços adicionais concatenados
    private LocalDate data;
    private LocalTime hora;
    private Integer barbeiroId;
    private String status;

    public Agendamento() {}

    public Agendamento(String nome, String telefone, String servicos, String adicionais, 
                       LocalDate data, LocalTime hora, Integer barbeiroId) {
        this.nome = nome;
        this.telefone = telefone;
        this.servicos = servicos;
        this.adicionais = adicionais;
        this.data = data;
        this.hora = hora;
        this.barbeiroId = barbeiroId;
        this.status = "pendente";
    }

    // Getters e Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getTelefone() { return telefone; }
    public void setTelefone(String telefone) { this.telefone = telefone; }

    public String getServicos() { return servicos; }
    public void setServicos(String servicos) { this.servicos = servicos; }

    public String getAdicionais() { return adicionais; }
    public void setAdicionais(String adicionais) { this.adicionais = adicionais; }

    public LocalDate getData() { return data; }
    public void setData(LocalDate data) { this.data = data; }

    public LocalTime getHora() { return hora; }
    public void setHora(LocalTime hora) { this.hora = hora; }

    public Integer getBarbeiroId() { return barbeiroId; }
    public void setBarbeiroId(Integer barbeiroId) { this.barbeiroId = barbeiroId; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}