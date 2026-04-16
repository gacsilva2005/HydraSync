package com.hydrasense.schydrasense.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.List;
import java.util.ArrayList;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "Atleta")
public class Atleta {

    // Getters e Setters
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

    //Relação 1:M com Profissional
    @ManyToOne
    @JoinColumn(name = "profissional_id")
    @JsonIgnore
    private Profissional profissional;

    // Relação 1:0..1 com Registro de Hidratação
    @Setter
    @OneToOne(mappedBy = "atleta", cascade = CascadeType.ALL)
    private RegistroDeHidratacao registroDeHidratacao;

    //Relação 1 com muitos SessaoDeTreino
    @JsonIgnore
    @OneToMany(mappedBy = "atleta", cascade = CascadeType.ALL)
    private List<SessaoDeTreino> sessoes = new ArrayList<>();

    // Construtor padrão JPA
    public Atleta() {}

    // Construtor da classe
    public Atleta(String nome, LocalDate dataNascimento, String modalidadePrincipal, Float pesoAtual) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.modalidadePrincipal = modalidadePrincipal;
        this.pesoAtual = pesoAtual;
    }

    public void adicionarSessao(SessaoDeTreino sessao) {
        sessoes.add(sessao);
        sessao.setAtleta(this);
    }

    public void setProfissional(Profissional profissional) {
        this.profissional = profissional;
    }
}