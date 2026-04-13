package com.hydrasense.schydrasense.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "Atleta")
public class Atleta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String nome;

    @Column(nullable = false)
    private LocalDate dataNascimento;

    @Column(nullable = false, length = 50)
    private String modalidadePrincipal;

    @Column(nullable = false)
    private Float pesoAtual;

    // Construtor padrão JPA
    public Atleta() {}

    // Construtor da classe
    public Atleta(String nome, LocalDate dataNascimento, String modalidadePrincipal, Float pesoAtual) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.modalidadePrincipal = modalidadePrincipal;
        this.pesoAtual = pesoAtual;
    }

    // Getters e Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public LocalDate getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(LocalDate dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public String getModalidadePrincipal() {
        return modalidadePrincipal;
    }

    public void setModalidadePrincipal(String modalidadePrincipal) {
        this.modalidadePrincipal = modalidadePrincipal;
    }

    public Float getPesoAtual() {
        return pesoAtual;
    }

    public void setPesoAtual(Float pesoAtual) {
        this.pesoAtual = pesoAtual;
    }
}